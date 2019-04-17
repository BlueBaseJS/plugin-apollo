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
        'plugin.apollo.clientOptions': { uri: 'wss://dev2mqtt.mevris.io:5000/subscriptions' },
        'plugin.apollo.httpLinkOptions': { uri: 'https://dev2mqtt.mevris.io/graphql' }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL21rZGlyIGFwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBNkU7QUFDN0UseUNBQXFFO0FBRXJFLGlEQUE2QztBQUM3Qyw2Q0FBeUM7QUFDekMsdURBQTRDO0FBQzVDLGlFQUFzRDtBQUN0RCxzRkFBc0Q7QUFFdEQsa0JBQWUsbUJBQVksQ0FBQztJQUMzQixXQUFXLEVBQUUsNERBQTREO0lBQ3pFLEdBQUcsRUFBRSwyQkFBMkI7SUFDaEMsSUFBSSxFQUFFLGVBQWU7SUFDckIsT0FBTyxFQUFFLE9BQU87SUFFaEIsVUFBVSxFQUFFO1FBQ1gsY0FBYyxFQUFkLDZCQUFjO1FBQ2QsZUFBZSxFQUFFLHVCQUFRO1FBQ3pCLFlBQVksRUFBRSxvQkFBSztRQUNuQixtQkFBbUIsRUFBRSwyQkFBWTtLQUNqQztJQUNELGNBQWMsRUFBRTtRQUNmLDZCQUE2QixFQUFFLEVBQUMsR0FBRyxFQUFHLDZDQUE2QyxFQUFDO1FBQ3BGLCtCQUErQixFQUFFLEVBQUMsR0FBRyxFQUFDLG9DQUFvQyxFQUFDO0tBQzNFO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFdBQXdCLEVBQUUsSUFBUyxFQUFFLEVBQVksRUFBRSxFQUFFO1lBQ2hGLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDOUUsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7YUFDeEQ7WUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFJLDJCQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0MsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDdEUsTUFBTSxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLHFDQUFhLEVBQUUsQ0FBQyxDQUFDO1lBRS9FLE1BQU0sTUFBTSxHQUFxQixJQUFJLDRCQUFZLGlCQUNoRCxLQUFLLEVBQ0wsSUFBSSxFQUFFLHdCQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUN6QixhQUFhLEVBQ2YsQ0FBQztZQUVILEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLDRCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckUsT0FBTyxXQUFXLENBQUM7UUFDcEIsQ0FBQztLQUNEO0NBQ0QsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9ta2RpciBhcG9sbG8vcGx1Z2luLWFwb2xsby9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIsIE11dGF0aW9uLCBRdWVyeSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IEJsdWVCYXNlLCBCb290T3B0aW9ucywgY3JlYXRlUGx1Z2luIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IEFwb2xsb0xpbmsgfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgd2l0aEFwb2xsb1Byb3ZpZGVyIGZyb20gJy4vd2l0aEFwb2xsb1Byb3ZpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGx1Z2luKHtcblx0ZGVzY3JpcHRpb246ICfwn4yNIEEgQmx1ZUJhc2UgUGx1Z2luIHRoYXQgaW50ZWdyYXRlcyBBcG9sbG8gR3JhcGhRTCBDbGllbnQnLFxuXHRrZXk6ICdAYmx1ZWJhc2UvcGx1Z2luLXVudGl0bGVkJyxcblx0bmFtZTogJ0Fwb2xsbyBQbHVnaW4nLFxuXHR2ZXJzaW9uOiAnMS4wLjAnLFxuXG5cdGNvbXBvbmVudHM6IHtcblx0XHRBcG9sbG9Db25zdW1lcixcblx0XHRHcmFwaHFsTXV0YXRpb246IE11dGF0aW9uLFxuXHRcdEdyYXBocWxRdWVyeTogUXVlcnksXG5cdFx0R3JhcGhxbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG5cdH0sXG5cdGRlZmF1bHRDb25maWdzOiB7XG5cdFx0J3BsdWdpbi5hcG9sbG8uY2xpZW50T3B0aW9ucyc6IHt1cmkgOiAnd3NzOi8vZGV2Mm1xdHQubWV2cmlzLmlvOjUwMDAvc3Vic2NyaXB0aW9ucyd9LFxuXHRcdCdwbHVnaW4uYXBvbGxvLmh0dHBMaW5rT3B0aW9ucyc6IHt1cmk6J2h0dHBzOi8vZGV2Mm1xdHQubWV2cmlzLmlvL2dyYXBocWwnfVxuXHR9LFxuXHRmaWx0ZXJzOiB7XG5cdFx0J2JsdWViYXNlLmJvb3QuZW5kJzogYXN5bmMgKGJvb3RPcHRpb25zOiBCb290T3B0aW9ucywgX2N0eDogYW55LCBCQjogQmx1ZUJhc2UpID0+IHtcblx0XHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuXHRcdFx0Y29uc3QgY2xpZW50T3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmNsaWVudE9wdGlvbnMnKTtcblx0XHRcdGlmICghaHR0cExpbmtPcHRpb25zKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignSFRUUCBMaW5rIFVSSSBub3QgcHJvdmlkZWQgdG8gQXBvbGxvJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKGh0dHBMaW5rT3B0aW9ucyk7XG5cdFx0XHRjb25zdCBsaW5rcyA9IGF3YWl0IEJCLkZpbHRlcnMucnVuKCdwbHVnaW4uYXBvbGxvLmxpbmtzJywgW2h0dHBMaW5rXSk7XG5cdFx0XHRjb25zdCBjYWNoZSA9IGF3YWl0IEJCLkZpbHRlcnMucnVuKCdwbHVnaW4uYXBvbGxvLmNhY2hlJywgbmV3IEluTWVtb3J5Q2FjaGUoKSk7XG5cblx0XHRcdGNvbnN0IGNsaWVudDogQXBvbGxvQ2xpZW50PHt9PiA9IG5ldyBBcG9sbG9DbGllbnQoe1xuXHRcdFx0XHRjYWNoZSxcblx0XHRcdFx0bGluazogQXBvbGxvTGluay5mcm9tKGxpbmtzKSxcblx0XHRcdFx0Li4uY2xpZW50T3B0aW9uc1xuXHRcdFx0fSk7XG5cblx0XHRcdEJCLkNvbXBvbmVudHMuYWRkSG9jcygnQmx1ZUJhc2VDb250ZW50Jywgd2l0aEFwb2xsb1Byb3ZpZGVyKGNsaWVudCkpO1xuXHRcdFx0cmV0dXJuIGJvb3RPcHRpb25zO1xuXHRcdH0sXG5cdH1cbn0pO1xuIl0sInZlcnNpb24iOjN9