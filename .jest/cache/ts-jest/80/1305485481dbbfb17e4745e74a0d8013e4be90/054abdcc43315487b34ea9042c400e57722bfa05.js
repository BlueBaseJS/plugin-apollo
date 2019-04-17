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
            const httpLink = new apollo_link_http_1.HttpLink(httpLinkOptions);
            const links = await BB.Filters.run('plugin.apollo.links', [httpLink]);
            const cache = await BB.Filters.run('plugin.apollo.cache', new apollo_cache_inmemory_1.InMemoryCache());
            const client = new apollo_client_1.ApolloClient(Object.assign({ cache, link: apollo_link_1.ApolloLink.from(links) }, clientOptions));
            BB.Components.addHocs('BlueBaseContent', withApolloProvider_1.default(client));
            return bootOptions;
        },
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBNkU7QUFDN0UseUNBQXFFO0FBRXJFLGlEQUE2QztBQUM3Qyw2Q0FBeUM7QUFDekMsdURBQTRDO0FBQzVDLGlFQUFzRDtBQUN0RCxzRkFBc0Q7QUFFdEQsa0JBQWUsbUJBQVksQ0FBQztJQUMzQixXQUFXLEVBQUUsNERBQTREO0lBQ3pFLEdBQUcsRUFBRSxlQUFlO0lBQ3BCLElBQUksRUFBRSxlQUFlO0lBQ3JCLE9BQU8sRUFBRSxPQUFPO0lBRWhCLFVBQVUsRUFBRTtRQUNYLGNBQWMsRUFBZCw2QkFBYztRQUNkLGVBQWUsRUFBRSx1QkFBUTtRQUN6QixZQUFZLEVBQUUsb0JBQUs7UUFDbkIsbUJBQW1CLEVBQUUsMkJBQVk7S0FDakM7SUFDRCxjQUFjLEVBQUU7UUFDZiw2QkFBNkIsRUFBRSxFQUFFO1FBQ2pDLCtCQUErQixFQUFFLEVBQUU7S0FDbkM7SUFDRCxPQUFPLEVBQUU7UUFDUixtQkFBbUIsRUFBRSxLQUFLLEVBQUUsV0FBd0IsRUFBRSxJQUFTLEVBQUUsRUFBWSxFQUFFLEVBQUU7WUFDaEYsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUM5RSxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQzthQUN4RDtZQUVELE1BQU0sUUFBUSxHQUFHLElBQUksMkJBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMvQyxNQUFNLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0RSxNQUFNLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUkscUNBQWEsRUFBRSxDQUFDLENBQUM7WUFFL0UsTUFBTSxNQUFNLEdBQXFCLElBQUksNEJBQVksaUJBQ2hELEtBQUssRUFDTCxJQUFJLEVBQUUsd0JBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQ3pCLGFBQWEsRUFDZixDQUFDO1lBRUgsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsNEJBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyRSxPQUFPLFdBQVcsQ0FBQztRQUNwQixDQUFDO0tBQ0Q7Q0FDRCxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9Db25zdW1lciwgTXV0YXRpb24sIFF1ZXJ5LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgQmx1ZUJhc2UsIEJvb3RPcHRpb25zLCBjcmVhdGVQbHVnaW4gfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5cbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvTGluayB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB3aXRoQXBvbGxvUHJvdmlkZXIgZnJvbSAnLi93aXRoQXBvbGxvUHJvdmlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbHVnaW4oe1xuXHRkZXNjcmlwdGlvbjogJ/CfjI0gQSBCbHVlQmFzZSBQbHVnaW4gdGhhdCBpbnRlZ3JhdGVzIEFwb2xsbyBHcmFwaFFMIENsaWVudCcsXG5cdGtleTogJ3BsdWdpbi1hcG9sbG8nLFxuXHRuYW1lOiAnQXBvbGxvIFBsdWdpbicsXG5cdHZlcnNpb246ICcxLjAuMCcsXG5cblx0Y29tcG9uZW50czoge1xuXHRcdEFwb2xsb0NvbnN1bWVyLFxuXHRcdEdyYXBocWxNdXRhdGlvbjogTXV0YXRpb24sXG5cdFx0R3JhcGhxbFF1ZXJ5OiBRdWVyeSxcblx0XHRHcmFwaHFsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cblx0fSxcblx0ZGVmYXVsdENvbmZpZ3M6IHtcblx0XHQncGx1Z2luLmFwb2xsby5jbGllbnRPcHRpb25zJzoge30sXG5cdFx0J3BsdWdpbi5hcG9sbG8uaHR0cExpbmtPcHRpb25zJzoge31cblx0fSxcblx0ZmlsdGVyczoge1xuXHRcdCdibHVlYmFzZS5ib290LmVuZCc6IGFzeW5jIChib290T3B0aW9uczogQm9vdE9wdGlvbnMsIF9jdHg6IGFueSwgQkI6IEJsdWVCYXNlKSA9PiB7XG5cdFx0XHRjb25zdCBodHRwTGlua09wdGlvbnMgPSBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKTtcblx0XHRcdGNvbnN0IGNsaWVudE9wdGlvbnMgPSBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5jbGllbnRPcHRpb25zJyk7XG5cdFx0XHRpZiAoIWh0dHBMaW5rT3B0aW9ucykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgTGluayBVUkkgbm90IHByb3ZpZGVkIHRvIEFwb2xsbycpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayhodHRwTGlua09wdGlvbnMpO1xuXHRcdFx0Y29uc3QgbGlua3MgPSBhd2FpdCBCQi5GaWx0ZXJzLnJ1bigncGx1Z2luLmFwb2xsby5saW5rcycsIFtodHRwTGlua10pO1xuXHRcdFx0Y29uc3QgY2FjaGUgPSBhd2FpdCBCQi5GaWx0ZXJzLnJ1bigncGx1Z2luLmFwb2xsby5jYWNoZScsIG5ldyBJbk1lbW9yeUNhY2hlKCkpO1xuXG5cdFx0XHRjb25zdCBjbGllbnQ6IEFwb2xsb0NsaWVudDx7fT4gPSBuZXcgQXBvbGxvQ2xpZW50KHtcblx0XHRcdFx0Y2FjaGUsXG5cdFx0XHRcdGxpbms6IEFwb2xsb0xpbmsuZnJvbShsaW5rcyksXG5cdFx0XHRcdC4uLmNsaWVudE9wdGlvbnNcblx0XHRcdH0pO1xuXG5cdFx0XHRCQi5Db21wb25lbnRzLmFkZEhvY3MoJ0JsdWVCYXNlQ29udGVudCcsIHdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQpKTtcblx0XHRcdHJldHVybiBib290T3B0aW9ucztcblx0XHR9LFxuXHR9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==