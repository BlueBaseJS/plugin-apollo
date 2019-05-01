"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_apollo_1 = require("react-apollo");
const core_1 = require("@bluebase/core");
const apollo_client_1 = require("apollo-client");
const apollo_link_1 = require("apollo-link");
const apollo_link_http_1 = require("apollo-link-http");
const apollo_cache_inmemory_1 = require("apollo-cache-inmemory");
const withApolloProvider_1 = tslib_1.__importDefault(require("./withApolloProvider"));
exports.default = core_1.createPlugin({
    description: '🌍 A BlueBase Plugin that integrates Apollo GraphQL Client',
    key: 'plugin-apollo',
    name: 'Apollo Plugin',
    version: '1.0.0',
    components: {
        ApolloConsumer: react_apollo_1.ApolloConsumer,
        GraphqlMutation: react_apollo_1.Mutation,
        GraphqlQuery: react_apollo_1.Query,
        GraphqlSubscription: react_apollo_1.Subscription
    },
    defaultConfigs: {
        'plugin.apollo.clientOptions': {},
        'plugin.apollo.httpLinkOptions': {}
    },
    filters: {
        'bluebase.boot.end': async (bootOptions, _ctx, BB) => {
            const httpLinkOptions = BB.Configs.getValue('plugins.apollo.httpLinkOptions');
            const clientOptions = BB.Configs.getValue('plugins.apollo.clientOptions');
            if (!httpLinkOptions) {
                throw new Error('HTTP Link URI not provided to Apollo');
            }
            console.log("httpLinkOptions", httpLinkOptions);
            const httpLink = new apollo_link_http_1.HttpLink(httpLinkOptions);
            console.log("link", httpLink);
            const links = await BB.Filters.run('plugin.apollo.links', [httpLink]);
            const cache = await BB.Filters.run('plugin.apollo.cache', new apollo_cache_inmemory_1.InMemoryCache());
            console.log("clientoptionssss", httpLinkOptions);
            const client = new apollo_client_1.ApolloClient(Object.assign({ cache, link: apollo_link_1.ApolloLink.from(links) }, clientOptions));
            BB.Components.addHocs('BlueBaseContent', withApolloProvider_1.default(client));
            return bootOptions;
        },
    }
});
