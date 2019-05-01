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
            console.log("httlinloptions", httpLinkOptions);
            const httpLink = new apollo_link_http_1.HttpLink(httpLinkOptions);
            const links = await BB.Filters.run('plugin.apollo.links', [httpLink]);
            const cache = await BB.Filters.run('plugin.apollo.cache', new apollo_cache_inmemory_1.InMemoryCache());
            console.log("clientoptionssss", httpLinkOptions);
            const client = new apollo_client_1.ApolloClient(Object.assign({ cache, link: apollo_link_1.ApolloLink.from(links) }, clientOptions));
            BB.Components.addHocs('BlueBaseContent', withApolloProvider_1.default(client));
            return bootOptions;
        },
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9pbmRleC50cyIsIm1hcHBpbmdzIjoiOzs7QUFBQSwrQ0FBNkU7QUFDN0UseUNBQXFFO0FBRXJFLGlEQUE2QztBQUM3Qyw2Q0FBeUM7QUFDekMsdURBQTRDO0FBQzVDLGlFQUFzRDtBQUN0RCxzRkFBc0Q7QUFFdEQsa0JBQWUsbUJBQVksQ0FBQztJQUMzQixXQUFXLEVBQUUsNERBQTREO0lBQ3pFLEdBQUcsRUFBRSxlQUFlO0lBQ3BCLElBQUksRUFBRSxlQUFlO0lBQ3JCLE9BQU8sRUFBRSxPQUFPO0lBRWhCLFVBQVUsRUFBRTtRQUNYLGNBQWMsRUFBZCw2QkFBYztRQUNkLGVBQWUsRUFBRSx1QkFBUTtRQUN6QixZQUFZLEVBQUUsb0JBQUs7UUFDbkIsbUJBQW1CLEVBQUUsMkJBQVk7S0FDakM7SUFDRCxjQUFjLEVBQUU7UUFDZiw2QkFBNkIsRUFBRSxFQUFFO1FBQ2pDLCtCQUErQixFQUFFLEVBQUU7S0FDbkM7SUFDRCxPQUFPLEVBQUU7UUFDUixtQkFBbUIsRUFBRSxLQUFLLEVBQUUsV0FBd0IsRUFBRSxJQUFTLEVBQUUsRUFBWSxFQUFFLEVBQUU7WUFDaEYsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUM5RSxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQzFFLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSSxLQUFLLENBQUMsc0NBQXNDLENBQUMsQ0FBQzthQUN4RDtZQUVELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUMsZUFBZSxDQUFDLENBQUM7WUFFOUMsTUFBTSxRQUFRLEdBQUcsSUFBSSwyQkFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLE1BQU0sS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxxQ0FBYSxFQUFFLENBQUMsQ0FBQztZQUcvRSxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFDLGVBQWUsQ0FBQyxDQUFDO1lBRWhELE1BQU0sTUFBTSxHQUFxQixJQUFJLDRCQUFZLGlCQUNoRCxLQUFLLEVBQ0wsSUFBSSxFQUFFLHdCQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUN6QixhQUFhLEVBQ2YsQ0FBQztZQUVILEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLDRCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDckUsT0FBTyxXQUFXLENBQUM7UUFDcEIsQ0FBQztLQUNEO0NBQ0QsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9hcG9sbG8vcGx1Z2luLWFwb2xsby9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBvbGxvQ29uc3VtZXIsIE11dGF0aW9uLCBRdWVyeSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncmVhY3QtYXBvbGxvJztcbmltcG9ydCB7IEJsdWVCYXNlLCBCb290T3B0aW9ucywgY3JlYXRlUGx1Z2luIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQgfSBmcm9tICdhcG9sbG8tY2xpZW50JztcbmltcG9ydCB7IEFwb2xsb0xpbmsgfSBmcm9tICdhcG9sbG8tbGluayc7XG5pbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuaW1wb3J0IHsgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ2Fwb2xsby1jYWNoZS1pbm1lbW9yeSc7XG5pbXBvcnQgd2l0aEFwb2xsb1Byb3ZpZGVyIGZyb20gJy4vd2l0aEFwb2xsb1Byb3ZpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGx1Z2luKHtcblx0ZGVzY3JpcHRpb246ICfwn4yNIEEgQmx1ZUJhc2UgUGx1Z2luIHRoYXQgaW50ZWdyYXRlcyBBcG9sbG8gR3JhcGhRTCBDbGllbnQnLFxuXHRrZXk6ICdwbHVnaW4tYXBvbGxvJyxcblx0bmFtZTogJ0Fwb2xsbyBQbHVnaW4nLFxuXHR2ZXJzaW9uOiAnMS4wLjAnLFxuXG5cdGNvbXBvbmVudHM6IHtcblx0XHRBcG9sbG9Db25zdW1lcixcblx0XHRHcmFwaHFsTXV0YXRpb246IE11dGF0aW9uLFxuXHRcdEdyYXBocWxRdWVyeTogUXVlcnksXG5cdFx0R3JhcGhxbFN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG5cdH0sXG5cdGRlZmF1bHRDb25maWdzOiB7XG5cdFx0J3BsdWdpbi5hcG9sbG8uY2xpZW50T3B0aW9ucyc6IHt9LFxuXHRcdCdwbHVnaW4uYXBvbGxvLmh0dHBMaW5rT3B0aW9ucyc6IHt9XG5cdH0sXG5cdGZpbHRlcnM6IHtcblx0XHQnYmx1ZWJhc2UuYm9vdC5lbmQnOiBhc3luYyAoYm9vdE9wdGlvbnM6IEJvb3RPcHRpb25zLCBfY3R4OiBhbnksIEJCOiBCbHVlQmFzZSkgPT4ge1xuXHRcdFx0Y29uc3QgaHR0cExpbmtPcHRpb25zID0gQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJyk7XG5cdFx0XHRjb25zdCBjbGllbnRPcHRpb25zID0gQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uY2xpZW50T3B0aW9ucycpO1xuXHRcdFx0aWYgKCFodHRwTGlua09wdGlvbnMpIHtcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCdIVFRQIExpbmsgVVJJIG5vdCBwcm92aWRlZCB0byBBcG9sbG8nKTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc29sZS5sb2coXCJodHRsaW5sb3B0aW9uc1wiLGh0dHBMaW5rT3B0aW9ucyk7XG5cblx0XHRcdGNvbnN0IGh0dHBMaW5rID0gbmV3IEh0dHBMaW5rKGh0dHBMaW5rT3B0aW9ucyk7XG5cdFx0XHRjb25zdCBsaW5rcyA9IGF3YWl0IEJCLkZpbHRlcnMucnVuKCdwbHVnaW4uYXBvbGxvLmxpbmtzJywgW2h0dHBMaW5rXSk7XG5cdFx0XHRjb25zdCBjYWNoZSA9IGF3YWl0IEJCLkZpbHRlcnMucnVuKCdwbHVnaW4uYXBvbGxvLmNhY2hlJywgbmV3IEluTWVtb3J5Q2FjaGUoKSk7XG5cblxuXHRcdFx0Y29uc29sZS5sb2coXCJjbGllbnRvcHRpb25zc3NzXCIsaHR0cExpbmtPcHRpb25zKTtcblx0XHRcdFxuXHRcdFx0Y29uc3QgY2xpZW50OiBBcG9sbG9DbGllbnQ8e30+ID0gbmV3IEFwb2xsb0NsaWVudCh7XG5cdFx0XHRcdGNhY2hlLFxuXHRcdFx0XHRsaW5rOiBBcG9sbG9MaW5rLmZyb20obGlua3MpLFxuXHRcdFx0XHQuLi5jbGllbnRPcHRpb25zXG5cdFx0XHR9KTtcblxuXHRcdFx0QkIuQ29tcG9uZW50cy5hZGRIb2NzKCdCbHVlQmFzZUNvbnRlbnQnLCB3aXRoQXBvbGxvUHJvdmlkZXIoY2xpZW50KSk7XG5cdFx0XHRyZXR1cm4gYm9vdE9wdGlvbnM7XG5cdFx0fSxcblx0fVxufSk7XG4iXSwidmVyc2lvbiI6M30=