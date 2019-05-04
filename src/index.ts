import { ApolloConsumer, Mutation, Query, Subscription } from 'react-apollo';
import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';
import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
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
		GraphqlSubscription: Subscription,
	},

	defaultConfigs: {
		'plugin.apollo.clientOptions': {},
		'plugin.apollo.httpLinkOptions': null,
	},

	filters: {
		'bluebase.boot.end': async (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
			const httpLinkOptions = BB.Configs.getValue('plugin.apollo.httpLinkOptions');
			const clientOptions = BB.Configs.getValue('plugin.apollo.clientOptions');

			if (!httpLinkOptions) {
				throw new Error('HTTP Link URI not provided to Apollo');
			}

			const httpLink = createHttpLink(httpLinkOptions);
			const links = await BB.Filters.run('plugin.apollo.links', [httpLink]);
			const cache = await BB.Filters.run('plugin.apollo.cache', new InMemoryCache());

			const client: ApolloClient<{}> = new ApolloClient({
				cache,
				link: ApolloLink.from(links),
				...clientOptions,
			});

			BB.Components.addHocs('BlueBaseContent', withApolloProvider(client));
			return bootOptions;
		},
	},
});
