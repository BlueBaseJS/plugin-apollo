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
const console = require("console");
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
            console.log("clientoptionssss", httpLinkOptions);
            const httpLink = new apollo_link_http_1.HttpLink(httpLinkOptions);
            const links = await BB.Filters.run('plugin.apollo.links', [httpLink]);
            const cache = await BB.Filters.run('plugin.apollo.cache', new apollo_cache_inmemory_1.InMemoryCache());
            const client = new apollo_client_1.ApolloClient(Object.assign({ cache, link: apollo_link_1.ApolloLink.from(links) }, clientOptions));
            BB.Components.addHocs('BlueBaseContent', withApolloProvider_1.default(client));
            return bootOptions;
        },
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBNkU7QUFDN0UseUNBQXFFO0FBRXJFLGlEQUE2QztBQUM3Qyw2Q0FBeUM7QUFDekMsdURBQTRDO0FBQzVDLGlFQUFzRDtBQUN0RCxzRkFBc0Q7QUFDdEQsbUNBQW9DO0FBRXBDLGtCQUFlLG1CQUFZLENBQUM7SUFDM0IsV0FBVyxFQUFFLDREQUE0RDtJQUN6RSxHQUFHLEVBQUUsZUFBZTtJQUNwQixJQUFJLEVBQUUsZUFBZTtJQUNyQixPQUFPLEVBQUUsT0FBTztJQUVoQixVQUFVLEVBQUU7UUFDWCxjQUFjLEVBQWQsNkJBQWM7UUFDZCxlQUFlLEVBQUUsdUJBQVE7UUFDekIsWUFBWSxFQUFFLG9CQUFLO1FBQ25CLG1CQUFtQixFQUFFLDJCQUFZO0tBQ2pDO0lBQ0QsY0FBYyxFQUFFO1FBQ2YsNkJBQTZCLEVBQUUsRUFBRTtRQUNqQywrQkFBK0IsRUFBRSxFQUFFO0tBQ25DO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLFdBQXdCLEVBQUUsSUFBUyxFQUFFLEVBQVksRUFBRSxFQUFFO1lBQ2hGLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDOUUsTUFBTSxhQUFhLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUMxRSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUNyQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7YUFDeEQ7WUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sUUFBUSxHQUFHLElBQUksMkJBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMvQyxNQUFNLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN0RSxNQUFNLEtBQUssR0FBRyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUkscUNBQWEsRUFBRSxDQUFDLENBQUM7WUFFL0UsTUFBTSxNQUFNLEdBQXFCLElBQUksNEJBQVksaUJBQ2hELEtBQUssRUFDTCxJQUFJLEVBQUUsd0JBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQ3pCLGFBQWEsRUFDZixDQUFDO1lBRUgsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsNEJBQWtCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNyRSxPQUFPLFdBQVcsQ0FBQztRQUNwQixDQUFDO0tBQ0Q7Q0FDRCxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9Db25zdW1lciwgTXV0YXRpb24sIFF1ZXJ5LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyZWFjdC1hcG9sbG8nO1xuaW1wb3J0IHsgQmx1ZUJhc2UsIEJvb3RPcHRpb25zLCBjcmVhdGVQbHVnaW4gfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5cbmltcG9ydCB7IEFwb2xsb0NsaWVudCB9IGZyb20gJ2Fwb2xsby1jbGllbnQnO1xuaW1wb3J0IHsgQXBvbGxvTGluayB9IGZyb20gJ2Fwb2xsby1saW5rJztcbmltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5pbXBvcnQgeyBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnYXBvbGxvLWNhY2hlLWlubWVtb3J5JztcbmltcG9ydCB3aXRoQXBvbGxvUHJvdmlkZXIgZnJvbSAnLi93aXRoQXBvbGxvUHJvdmlkZXInO1xuaW1wb3J0IGNvbnNvbGUgPSByZXF1aXJlKCdjb25zb2xlJyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsdWdpbih7XG5cdGRlc2NyaXB0aW9uOiAn8J+MjSBBIEJsdWVCYXNlIFBsdWdpbiB0aGF0IGludGVncmF0ZXMgQXBvbGxvIEdyYXBoUUwgQ2xpZW50Jyxcblx0a2V5OiAncGx1Z2luLWFwb2xsbycsXG5cdG5hbWU6ICdBcG9sbG8gUGx1Z2luJyxcblx0dmVyc2lvbjogJzEuMC4wJyxcblxuXHRjb21wb25lbnRzOiB7XG5cdFx0QXBvbGxvQ29uc3VtZXIsXG5cdFx0R3JhcGhxbE11dGF0aW9uOiBNdXRhdGlvbixcblx0XHRHcmFwaHFsUXVlcnk6IFF1ZXJ5LFxuXHRcdEdyYXBocWxTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuXHR9LFxuXHRkZWZhdWx0Q29uZmlnczoge1xuXHRcdCdwbHVnaW4uYXBvbGxvLmNsaWVudE9wdGlvbnMnOiB7fSxcblx0XHQncGx1Z2luLmFwb2xsby5odHRwTGlua09wdGlvbnMnOiB7fVxuXHR9LFxuXHRmaWx0ZXJzOiB7XG5cdFx0J2JsdWViYXNlLmJvb3QuZW5kJzogYXN5bmMgKGJvb3RPcHRpb25zOiBCb290T3B0aW9ucywgX2N0eDogYW55LCBCQjogQmx1ZUJhc2UpID0+IHtcblx0XHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuXHRcdFx0Y29uc3QgY2xpZW50T3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmNsaWVudE9wdGlvbnMnKTtcblx0XHRcdGlmICghaHR0cExpbmtPcHRpb25zKSB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignSFRUUCBMaW5rIFVSSSBub3QgcHJvdmlkZWQgdG8gQXBvbGxvJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnNvbGUubG9nKFwiY2xpZW50b3B0aW9uc3Nzc1wiLGh0dHBMaW5rT3B0aW9ucyk7XG5cdFx0XHRjb25zdCBodHRwTGluayA9IG5ldyBIdHRwTGluayhodHRwTGlua09wdGlvbnMpO1xuXHRcdFx0Y29uc3QgbGlua3MgPSBhd2FpdCBCQi5GaWx0ZXJzLnJ1bigncGx1Z2luLmFwb2xsby5saW5rcycsIFtodHRwTGlua10pO1xuXHRcdFx0Y29uc3QgY2FjaGUgPSBhd2FpdCBCQi5GaWx0ZXJzLnJ1bigncGx1Z2luLmFwb2xsby5jYWNoZScsIG5ldyBJbk1lbW9yeUNhY2hlKCkpO1xuXG5cdFx0XHRjb25zdCBjbGllbnQ6IEFwb2xsb0NsaWVudDx7fT4gPSBuZXcgQXBvbGxvQ2xpZW50KHtcblx0XHRcdFx0Y2FjaGUsXG5cdFx0XHRcdGxpbms6IEFwb2xsb0xpbmsuZnJvbShsaW5rcyksXG5cdFx0XHRcdC4uLmNsaWVudE9wdGlvbnNcblx0XHRcdH0pO1xuXG5cdFx0XHRCQi5Db21wb25lbnRzLmFkZEhvY3MoJ0JsdWVCYXNlQ29udGVudCcsIHdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQpKTtcblx0XHRcdHJldHVybiBib290T3B0aW9ucztcblx0XHR9LFxuXHR9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==