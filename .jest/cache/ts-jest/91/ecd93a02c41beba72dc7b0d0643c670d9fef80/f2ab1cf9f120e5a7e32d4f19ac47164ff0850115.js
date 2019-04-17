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
    key: '@bluebase/plugin-untitled',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL21rZGlyIGFwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBNkU7QUFDN0UseUNBQXFFO0FBRXJFLGlEQUE2QztBQUM3Qyw2Q0FBeUM7QUFDekMsdURBQTRDO0FBQzVDLGlFQUFzRDtBQUN0RCxzRkFBc0Q7QUFFdEQsa0JBQWUsbUJBQVksQ0FBQztJQUMzQixXQUFXLEVBQUUsNERBQTREO0lBQ3pFLEdBQUcsRUFBRSwyQkFBMkI7SUFDaEMsSUFBSSxFQUFFLGVBQWU7SUFDckIsT0FBTyxFQUFFLE9BQU87SUFFaEIsVUFBVSxFQUFFO1FBQ1gsY0FBYyxFQUFkLDZCQUFjO1FBQ2QsZUFBZSxFQUFFLHVCQUFRO1FBQ3pCLFlBQVksRUFBRSxvQkFBSztRQUNuQixtQkFBbUIsRUFBRSwyQkFBWTtLQUNqQztJQUNELGNBQWMsRUFBRTtRQUNmLDZCQUE2QixFQUFFLEVBQUU7UUFDakMsK0JBQStCLEVBQUUsRUFBRTtLQUNuQztJQUNELE9BQU8sRUFBRTtRQUNSLG1CQUFtQixFQUFFLEtBQUssRUFBRSxXQUF3QixFQUFFLElBQVMsRUFBRSxFQUFZLEVBQUUsRUFBRTtZQUNoRixNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzlFLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDMUUsSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDckIsTUFBTSxJQUFJLEtBQUssQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO2FBQ3hEO1lBRUQsTUFBTSxRQUFRLEdBQUcsSUFBSSwyQkFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxxQ0FBYSxFQUFFLENBQUMsQ0FBQztZQUUvRSxNQUFNLE1BQU0sR0FBcUIsSUFBSSw0QkFBWSxpQkFDaEQsS0FBSyxFQUNMLElBQUksRUFBRSx3QkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFDekIsYUFBYSxFQUNmLENBQUM7WUFFSCxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSw0QkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3JFLE9BQU8sV0FBVyxDQUFDO1FBQ3BCLENBQUM7S0FDRDtDQUNELENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvbWtkaXIgYXBvbGxvL3BsdWdpbi1hcG9sbG8vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NvbnN1bWVyLCBNdXRhdGlvbiwgUXVlcnksIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XG5pbXBvcnQgeyBCbHVlQmFzZSwgQm9vdE9wdGlvbnMsIGNyZWF0ZVBsdWdpbiB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcblxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50IH0gZnJvbSAnYXBvbGxvLWNsaWVudCc7XG5pbXBvcnQgeyBBcG9sbG9MaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmsnO1xuaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbmltcG9ydCB7IEluTWVtb3J5Q2FjaGUgfSBmcm9tICdhcG9sbG8tY2FjaGUtaW5tZW1vcnknO1xuaW1wb3J0IHdpdGhBcG9sbG9Qcm92aWRlciBmcm9tICcuL3dpdGhBcG9sbG9Qcm92aWRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsdWdpbih7XG5cdGRlc2NyaXB0aW9uOiAn8J+MjSBBIEJsdWVCYXNlIFBsdWdpbiB0aGF0IGludGVncmF0ZXMgQXBvbGxvIEdyYXBoUUwgQ2xpZW50Jyxcblx0a2V5OiAnQGJsdWViYXNlL3BsdWdpbi11bnRpdGxlZCcsXG5cdG5hbWU6ICdBcG9sbG8gUGx1Z2luJyxcblx0dmVyc2lvbjogJzEuMC4wJyxcblxuXHRjb21wb25lbnRzOiB7XG5cdFx0QXBvbGxvQ29uc3VtZXIsXG5cdFx0R3JhcGhxbE11dGF0aW9uOiBNdXRhdGlvbixcblx0XHRHcmFwaHFsUXVlcnk6IFF1ZXJ5LFxuXHRcdEdyYXBocWxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuXHR9LFxuXHRkZWZhdWx0Q29uZmlnczoge1xuXHRcdCdwbHVnaW4uYXBvbGxvLmNsaWVudE9wdGlvbnMnOiB7fSxcblx0XHQncGx1Z2luLmFwb2xsby5odHRwTGlua09wdGlvbnMnOiB7fVxuXHR9LFxuXHRmaWx0ZXJzOiB7XG5cdFx0J2JsdWViYXNlLmJvb3QuZW5kJzogYXN5bmMgKGJvb3RPcHRpb25zOiBCb290T3B0aW9ucywgX2N0eDogYW55LCBCQjogQmx1ZUJhc2UpID0+IHtcblx0XHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuXHRcdFx0Y29uc3QgY2xpZW50T3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmNsaWVudE9wdGlvbnMnKTtcblx0XHRcdGlmICghaHR0cExpbmtPcHRpb25zKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignSFRUUCBMaW5rIFVSSSBub3QgcHJvdmlkZWQgdG8gQXBvbGxvJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKGh0dHBMaW5rT3B0aW9ucyk7XG5cdFx0XHRjb25zdCBsaW5rcyA9IGF3YWl0IEJCLkZpbHRlcnMucnVuKCdwbHVnaW4uYXBvbGxvLmxpbmtzJywgW2h0dHBMaW5rXSk7XG5cdFx0XHRjb25zdCBjYWNoZSA9IGF3YWl0IEJCLkZpbHRlcnMucnVuKCdwbHVnaW4uYXBvbGxvLmNhY2hlJywgbmV3IEluTWVtb3J5Q2FjaGUoKSk7XG5cblx0XHRcdGNvbnN0IGNsaWVudDogQXBvbGxvQ2xpZW50PHt9PiA9IG5ldyBBcG9sbG9DbGllbnQoe1xuXHRcdFx0XHRjYWNoZSxcblx0XHRcdFx0bGluazogQXBvbGxvTGluay5mcm9tKGxpbmtzKSxcblx0XHRcdFx0Li4uY2xpZW50T3B0aW9uc1xuXHRcdFx0fSk7XG5cblx0XHRcdEJCLkNvbXBvbmVudHMuYWRkSG9jcygnQmx1ZUJhc2VDb250ZW50Jywgd2l0aEFwb2xsb1Byb3ZpZGVyKGNsaWVudCkpO1xuXHRcdFx0cmV0dXJuIGJvb3RPcHRpb25zO1xuXHRcdH0sXG5cdH1cbn0pO1xuIl0sInZlcnNpb24iOjN9