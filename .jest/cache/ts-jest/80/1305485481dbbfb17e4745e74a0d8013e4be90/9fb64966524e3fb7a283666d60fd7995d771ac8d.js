"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const index_1 = tslib_1.__importDefault(require("../index"));
// import { Text } from 'react-native';
const withApolloProvider_1 = tslib_1.__importDefault(require("../withApolloProvider"));
// import React from 'react';
// import { mount } from 'enzyme';
// import { waitForElement } from 'enzyme-async-helpers';
const apollo_link_http_1 = tslib_1.__importDefault(require("apollo-link-http"));
// import { sample } from '../__mocks__/index'
// import { waitForElement } from 'enzyme-async-helpers';
// const CustomText = () => <Text>Everything is ok!</Text>;
// import HttpLink from 'apollo-link-http';
//working and testing
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    // console.log('imported{}===>',{HttpLink})
    // console.log('imported===>',HttpLink)
    expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
});
let client;
test('Plugin apolloProvider working', async () => {
    withApolloProvider_1.default(client);
});
//working httplink options
test('Test with Apollo Config', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    await BB.Configs.setValue('plugins.apollo.httpLinkOptions', { uri: 'http://graphql' });
    BB.boot();
    console.log('Plugins====>', BB.Configs.getValue('plugins.apollo.httpLinkOptions'));
    const httpLinkOptions = BB.Configs.getValue('plugins.apollo.httpLinkOptions');
    expect(httpLinkOptions).toEqual({ uri: 'http://graphql' });
});
//working and testing
test('Plugin should throw error if httpLinkOptions config is not given', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    let message;
    try {
        await BB.boot();
    }
    catch (error) {
        message = error.message;
    }
    expect(message).toBe('HTTP Link URI not provided to Apollo');
});
//mocking + apollo links   //not working
test('Mocking and apollo links', async () => {
    const BB = new core_1.BlueBase();
    // const {HttpLink}  = jest.mock('apollo-link-http');
    // const httpLink =new  A.HttpLink()
    const httpLink = new apollo_link_http_1.default.HttpLink();
    console.log('original===>', httpLink);
    await BB.Filters.run("bluebase.boot.end", [httpLink]);
    //  await BB.Filters.run("plugin.apollo.links",{HttpLink});
    //expect(HttpLink).toBeCalled();
});
// //checking apollo cache
// test('Mocking and apollo cache', async () => {
// 	const BB = new BlueBase();
// 	const {HttpLink}:any  = jest.mock('apollo-link-http');
// 	// console.log('original===>',HttpLink)
// 	//await BB.Filters.run("bluebase.boot.end",{HttpLink});
// 	  await BB.Filters.run("plugin.apollo.cache",{HttpLink});
// 	expect(HttpLink).toBeCalled();
// });
// class MockClass {
// 	constructor(public input) {
// 	}
// }
// instanceof.input === 
// mise(resolve => resolve()));
// 	const wrapper = mount(
// 		<BlueBaseApp plugins={[Plugin]} configs={{ 'plugins.apollo.httpLinkOptions': { uri: 'www.g
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3ZELGdGQUFpQztBQUNuQyw4Q0FBOEM7QUFDOUMseURBQXlEO0FBQ3pELDJEQUEyRDtBQUMzRCwyQ0FBMkM7QUFHM0MscUJBQXFCO0FBQ3JCLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbEMsMkNBQTJDO0lBQzNDLHVDQUF1QztJQUV2QyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksTUFBVSxDQUFDO0FBQ2YsSUFBSSxDQUFDLCtCQUErQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBRTlDLDRCQUFrQixDQUFDLE1BQWEsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBRUgsMEJBQTBCO0FBQ3pCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUUxQyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFDbEMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFFdkYsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7QUFFMUQsQ0FBQyxDQUFDLENBQUM7QUFFSixxQkFBcUI7QUFDckIsSUFBSSxDQUFDLGtFQUFrRSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBRW5GLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUNsQyxJQUFJLE9BQU8sQ0FBQztJQUNaLElBQUk7UUFDSCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUVoQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDeEI7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFFOUQsQ0FBQyxDQUFDLENBQUM7QUFFSCx3Q0FBd0M7QUFDeEMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzNDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIscURBQXFEO0lBQ3JELG9DQUFvQztJQUVwQyxNQUFNLFFBQVEsR0FBRyxJQUFLLDBCQUFDLENBQUMsUUFBUSxFQUFFLENBQUE7SUFHakMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsUUFBUSxDQUFDLENBQUE7SUFDckMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFckQsMkRBQTJEO0lBRTNELGdDQUFnQztBQUVqQyxDQUFDLENBQUMsQ0FBQztBQWdCSCwwQkFBMEI7QUFDMUIsaURBQWlEO0FBQ2pELDhCQUE4QjtBQUM5QiwwREFBMEQ7QUFFMUQsMkNBQTJDO0FBRTNDLDJEQUEyRDtBQUUzRCw2REFBNkQ7QUFHN0Qsa0NBQWtDO0FBRWxDLE1BQU07QUFjTixvQkFBb0I7QUFDcEIsK0JBQStCO0FBRS9CLEtBQUs7QUFDTCxJQUFJO0FBRUosd0JBQXdCO0FBRXhCLCtCQUErQjtBQUUvQiwwQkFBMEI7QUFDMUIsK0ZBQStGIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9hcG9sbG8vcGx1Z2luLWFwb2xsby9zcmMvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlLCBcblx0Ly8gQmx1ZUJhc2VBcHAgXG59IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vaW5kZXgnO1xuLy8gaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgV2l0aEFwb2xsb1Byb3ZpZGVyIGZyb20gJy4uL3dpdGhBcG9sbG9Qcm92aWRlcic7XG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG4gIGltcG9ydCBBIGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuLy8gaW1wb3J0IHsgc2FtcGxlIH0gZnJvbSAnLi4vX19tb2Nrc19fL2luZGV4J1xuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG4vLyBjb25zdCBDdXN0b21UZXh0ID0gKCkgPT4gPFRleHQ+RXZlcnl0aGluZyBpcyBvayE8L1RleHQ+O1xuLy8gaW1wb3J0IEh0dHBMaW5rIGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuXG5cbi8vd29ya2luZyBhbmQgdGVzdGluZ1xudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cdFxuXHQvLyBjb25zb2xlLmxvZygnaW1wb3J0ZWR7fT09PT4nLHtIdHRwTGlua30pXG5cdC8vIGNvbnNvbGUubG9nKCdpbXBvcnRlZD09PT4nLEh0dHBMaW5rKVxuXG5cdGV4cGVjdChCQi5QbHVnaW5zLmhhcygncGx1Z2luLWFwb2xsbycpKS50b0JlVHJ1dGh5KCk7XG59KTtcblxubGV0IGNsaWVudDphbnk7XG50ZXN0KCdQbHVnaW4gYXBvbGxvUHJvdmlkZXIgd29ya2luZycsIGFzeW5jICgpID0+IHtcblxuXHRcdCBXaXRoQXBvbGxvUHJvdmlkZXIoY2xpZW50IGFzIGFueSk7XG59KTtcblxuLy93b3JraW5nIGh0dHBsaW5rIG9wdGlvbnNcblx0dGVzdCgnVGVzdCB3aXRoIEFwb2xsbyBDb25maWcnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XHRhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnLCB7IHVyaTogJ2h0dHA6Ly9ncmFwaHFsJyB9KTtcblxuXHRcdEJCLmJvb3QoKTtcblx0XHRjb25zb2xlLmxvZygnUGx1Z2lucz09PT0+JywgQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJykpO1xuXHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuXHRcdGV4cGVjdChodHRwTGlua09wdGlvbnMpLnRvRXF1YWwoe3VyaTogJ2h0dHA6Ly9ncmFwaHFsJ30pO1xuXG5cdH0pO1xuXG4vL3dvcmtpbmcgYW5kIHRlc3RpbmdcbnRlc3QoJ1BsdWdpbiBzaG91bGQgdGhyb3cgZXJyb3IgaWYgaHR0cExpbmtPcHRpb25zIGNvbmZpZyBpcyBub3QgZ2l2ZW4nLCBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0bGV0IG1lc3NhZ2U7XG5cdHRyeSB7XG5cdFx0YXdhaXQgQkIuYm9vdCgpO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdH1cblx0ZXhwZWN0KG1lc3NhZ2UpLnRvQmUoJ0hUVFAgTGluayBVUkkgbm90IHByb3ZpZGVkIHRvIEFwb2xsbycpO1xuXG59KTtcblxuLy9tb2NraW5nICsgYXBvbGxvIGxpbmtzICAgLy9ub3Qgd29ya2luZ1xudGVzdCgnTW9ja2luZyBhbmQgYXBvbGxvIGxpbmtzJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHQvLyBjb25zdCB7SHR0cExpbmt9ICA9IGplc3QubW9jaygnYXBvbGxvLWxpbmstaHR0cCcpO1xuXHQvLyBjb25zdCBodHRwTGluayA9bmV3ICBBLkh0dHBMaW5rKClcblxuXHRjb25zdCBodHRwTGluayA9IG5ldyAgQS5IdHRwTGluaygpXG5cblxuXHQgY29uc29sZS5sb2coJ29yaWdpbmFsPT09PicsaHR0cExpbmspXG5cdGF3YWl0IEJCLkZpbHRlcnMucnVuKFwiYmx1ZWJhc2UuYm9vdC5lbmRcIixbaHR0cExpbmtdKTtcblxuXHQvLyAgYXdhaXQgQkIuRmlsdGVycy5ydW4oXCJwbHVnaW4uYXBvbGxvLmxpbmtzXCIse0h0dHBMaW5rfSk7XG5cblx0Ly9leHBlY3QoSHR0cExpbmspLnRvQmVDYWxsZWQoKTtcblxufSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAvL2NoZWNraW5nIGFwb2xsbyBjYWNoZVxuLy8gdGVzdCgnTW9ja2luZyBhbmQgYXBvbGxvIGNhY2hlJywgYXN5bmMgKCkgPT4ge1xuLy8gXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuLy8gXHRjb25zdCB7SHR0cExpbmt9OmFueSAgPSBqZXN0Lm1vY2soJ2Fwb2xsby1saW5rLWh0dHAnKTtcblxuLy8gXHQvLyBjb25zb2xlLmxvZygnb3JpZ2luYWw9PT0+JyxIdHRwTGluaylcblx0XG4vLyBcdC8vYXdhaXQgQkIuRmlsdGVycy5ydW4oXCJibHVlYmFzZS5ib290LmVuZFwiLHtIdHRwTGlua30pO1xuXG4vLyBcdCAgYXdhaXQgQkIuRmlsdGVycy5ydW4oXCJwbHVnaW4uYXBvbGxvLmNhY2hlXCIse0h0dHBMaW5rfSk7XG5cblxuLy8gXHRleHBlY3QoSHR0cExpbmspLnRvQmVDYWxsZWQoKTtcblxuLy8gfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNsYXNzIE1vY2tDbGFzcyB7XG4vLyBcdGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dCkge1xuXG4vLyBcdH1cbi8vIH1cblxuLy8gaW5zdGFuY2VvZi5pbnB1dCA9PT0gXG5cbi8vIG1pc2UocmVzb2x2ZSA9PiByZXNvbHZlKCkpKTtcblxuLy8gXHRjb25zdCB3cmFwcGVyID0gbW91bnQoXG4vLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfSBjb25maWdzPXt7ICdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnOiB7IHVyaTogJ3d3dy5nXG5cblxuXG4iXSwidmVyc2lvbiI6M30=