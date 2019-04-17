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
    key: '@bluebase/plugin-apollo',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBNkU7QUFDN0UseUNBQXFFO0FBRXJFLGlEQUE2QztBQUM3Qyw2Q0FBeUM7QUFDekMsdURBQTRDO0FBQzVDLGlFQUFzRDtBQUN0RCxzRkFBc0Q7QUFFdEQsa0JBQWUsbUJBQVksQ0FBQztJQUMzQixXQUFXLEVBQUUsNERBQTREO0lBQ3pFLEdBQUcsRUFBRSx5QkFBeUI7SUFDOUIsSUFBSSxFQUFFLGVBQWU7SUFDckIsT0FBTyxFQUFFLE9BQU87SUFFaEIsVUFBVSxFQUFFO1FBQ1gsY0FBYyxFQUFkLDZCQUFjO1FBQ2QsZUFBZSxFQUFFLHVCQUFRO1FBQ3pCLFlBQVksRUFBRSxvQkFBSztRQUNuQixtQkFBbUIsRUFBRSwyQkFBWTtLQUNqQztJQUNELGNBQWMsRUFBRTtRQUNmLDZCQUE2QixFQUFFLEVBQUU7UUFDakMsK0JBQStCLEVBQUUsRUFBRTtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNSLG1CQUFtQixFQUFFLEtBQUssRUFBRSxXQUF3QixFQUFFLElBQVMsRUFBRSxFQUFZLEVBQUUsRUFBRTtZQUNoRixNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzlFLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2FBQ3hEO1lBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSwyQkFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxxQ0FBYSxFQUFFLENBQUMsQ0FBQztZQUUvRSxNQUFNLE1BQU0sR0FBcUIsSUFBSSw0QkFBWSxpQkFDaEQsS0FBSyxFQUNMLElBQUksRUFBRSx3QkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFDekIsYUFBYSxFQUNmLENBQUM7WUFFSCxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSw0QkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLE9BQU8sV0FBVyxDQUFDO1FBQ3BCLENBQUM7S0FDRDtDQUNELENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYXBvbGxvL3BsdWdpbi1hcG9sbG8vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NvbnN1bWVyLCBNdXRhdGlvbiwgUXVlcnksIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBCbHVlQmFzZSwgQm9vdE9wdGlvbnMsIGNyZWF0ZVBsdWdpbiB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcblxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBBcG9sbG9MaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHdpdGhBcG9sbG9Qcm92aWRlciBmcm9tICcuL3dpdGhBcG9sbG9Qcm92aWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsdWdpbih7XG5cdGRlc2NyaXB0aW9uOiAn8J+MjSBBIEJsdWVCYXNlIFBsdWdpbiB0aGF0IGludGVncmF0ZXMgQXBvbGxvIEdyYXBoUUwgQ2xpZW50Jyxcblx0a2V5OiAnQGJsdWViYXNlL3BsdWdpbi1hcG9sbG8nLFxuXHRuYW1lOiAnQXBvbGxvIFBsdWdpbicsXG5cdHZlcnNpb246ICcxLjAuMCcsXG5cblx0Y29tcG9uZW50czoge1xuXHRcdEFwb2xsb0NvbnN1bWVyLFxuXHRcdEdyYXBocWxNdXRhdGlvbjogTXV0YXRpb24sXG5cdFx0R3JhcGhxbFF1ZXJ5OiBRdWVyeSxcblx0XHRHcmFwaHFsU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cblx0fSxcblx0ZGVmYXVsdENvbmZpZ3M6IHtcblx0XHQncGx1Z2luLmFwb2xsby5jbGllbnRPcHRpb25zJzoge30sXG5cdFx0J3BsdWdpbi5hcG9sbG8uaHR0cExpbmtPcHRpb25zJzoge31cblx0fSxcblx0ZmlsdGVyczoge1xuXHRcdCdibHVlYmFzZS5ib290LmVuZCc6IGFzeW5jIChib290T3B0aW9uczogQm9vdE9wdGlvbnMsIF9jdHg6IGFueSwgQkI6IEJsdWVCYXNlKSA9PiB7XG5cdFx0XHRjb25zdCBodHRwTGlua09wdGlvbnMgPSBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKTtcblx0XHRcdGNvbnN0IGNsaWVudE9wdGlvbnMgPSBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5jbGllbnRPcHRpb25zJyk7XG5cdFx0XHRpZiAoIWh0dHBMaW5rT3B0aW9ucykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0hUVFAgTGluayBVUkkgbm90IHByb3ZpZGVkIHRvIEFwb2xsbycpO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayhodHRwTGlua09wdGlvbnMpO1xuXHRcdFx0Y29uc3QgbGlua3MgPSBhd2FpdCBCQi5GaWx0ZXJzLnJ1bigncGx1Z2luLmFwb2xsby5saW5rcycsIFtodHRwTGlua10pO1xuXHRcdFx0Y29uc3QgY2FjaGUgPSBhd2FpdCBCQi5GaWx0ZXJzLnJ1bigncGx1Z2luLmFwb2xsby5jYWNoZScsIG5ldyBJbk1lbW9yeUNhY2hlKCkpO1xuXG5cdFx0XHRjb25zdCBjbGllbnQ6IEFwb2xsb0NsaWVudDx7fT4gPSBuZXcgQXBvbGxvQ2xpZW50KHtcblx0XHRcdFx0Y2FjaGUsXG5cdFx0XHRcdGxpbms6IEFwb2xsb0xpbmsuZnJvbShsaW5rcyksXG5cdFx0XHRcdC4uLmNsaWVudE9wdGlvbnNcblx0XHRcdH0pO1xuXG5cdFx0XHRCQi5Db21wb25lbnRzLmFkZEhvY3MoJ0JsdWVCYXNlQ29udGVudCcsIHdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQpKTtcblx0XHRcdHJldHVybiBib290T3B0aW9ucztcblx0XHR9LFxuXHR9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==