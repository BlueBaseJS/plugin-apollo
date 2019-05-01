import { ApolloConsumer, Mutation, Query, Subscription } from 'react-apollo';
import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';

import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import withApolloProvider from './withApolloProvider';

export default createPlugin({
	description: '🌍 A BlueBase Plugin that integrates Apollo GraphQL Client',
	key: 'plugin-apollo',
	name: 'Apollo Plugin',
	version: '1.0.0',

	components: {
		ApolloConsumer,
		GraphqlMutation: Mutation,
		GraphqlQuery: Query,
		GraphqlSubscription: Subscription
	},
	defaultConfigs: {
		'plugin.apollo.clientOptions': {},
		'plugin.apollo.httpLinkOptions': {}
	},
	filters: {
		'bluebase.boot.end': async (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			const httpLinkOptions = BB.Configs.getValue('plugins.apollo.httpLinkOptions');
			const clientOptions = BB.Configs.getValue('plugins.apollo.clientOptions');
			if (!httpLinkOptions) {
				throw new Error('HTTP Link URI not provided to Apollo');
			}

			console.log("httpLinkOptions",httpLinkOptions);

			const httpLink = new HttpLink(httpLinkOptions);
			console.log("link",httpLink);

			const links = await BB.Filters.run('plugin.apollo.links', [httpLink]);
			const cache = await BB.Filters.run('plugin.apollo.cache', new InMemoryCache());

			console.log("clientoptionssss",httpLinkOptions);
			
			const client: ApolloClient<{}> = new ApolloClient({
				cache,
				link: ApolloLink.from(links),
				...clientOptions
			});

			BB.Components.addHocs('BlueBaseContent', withApolloProvider(client));
			return bootOptions;
		},
	}
});
