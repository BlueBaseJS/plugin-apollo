import { ApolloClient, ApolloConsumer, InMemoryCache } from '@apollo/client';
import { Mutation, Query, Subscription } from '@apollo/client/react/components';
import { BlueBase, BootOptions, createPlugin } from '@bluebase/core';

import withApolloProvider from './withApolloProvider';
import { VERSION } from './version';

const { createUploadLink } = require('apollo-upload-client');

let client: ApolloClient<{}>;

export default createPlugin({
	description: '🌍 A BlueBase Plugin that integrates Apollo GraphQL Client',
	key: 'plugin-apollo',
	name: 'Apollo Plugin',
	version: VERSION,

	components: {
		ApolloConsumer,
		GraphqlMutation: Mutation,
		GraphqlQuery: Query,
		GraphqlSubscription: Subscription,
	},

	defaultConfigs: {
		'plugin.apollo.clientOptions': {},
		'plugin.apollo.httpLinkOptions': {},
	},

	filters: {
		'bluebase.boot.end': {
			key: 'apollo-register',
			value: async (bootOptions: BootOptions, _ctx: any, BB: BlueBase) => {
				if (!client) {
					const httpLinkOptions = BB.Configs.getValue('plugin.apollo.httpLinkOptions');
					const clientOptions = BB.Configs.getValue('plugin.apollo.clientOptions');

					const httpLink = createUploadLink(httpLinkOptions);
					const link = await BB.Filters.run('plugin.apollo.link', httpLink);
					const cache = await BB.Filters.run('plugin.apollo.cache', new InMemoryCache());

					client = new ApolloClient({
						cache,
						link,
						...clientOptions,
					});
					await BB.Filters.run('plugin.apollo.client', client);
				}

				BB.Components.addHocs('BlueBaseContent', withApolloProvider(client));

				BB.Filters.register({
					event: 'bluebase.reset',
					key: 'apollo-reset',
					priority: 50,
					value: async () => {
						await client.clearStore();
					},
				});

				return bootOptions;
			},
		},
	},
});
