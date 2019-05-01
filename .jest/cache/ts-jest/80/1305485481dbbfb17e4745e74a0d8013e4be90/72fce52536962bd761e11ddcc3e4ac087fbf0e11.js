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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3ZELGdGQUFpQztBQUNuQyw4Q0FBOEM7QUFDOUMseURBQXlEO0FBQ3pELDJEQUEyRDtBQUMzRCwyQ0FBMkM7QUFHM0MscUJBQXFCO0FBQ3JCLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbEMsMkNBQTJDO0lBQzNDLHVDQUF1QztJQUV2QyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksTUFBVSxDQUFDO0FBQ2YsSUFBSSxDQUFDLCtCQUErQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBRTlDLDRCQUFrQixDQUFDLE1BQWEsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBRUgsMEJBQTBCO0FBQ3pCLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUUxQyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFDbEMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFFdkYsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO0lBQ25GLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7SUFDOUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7QUFFMUQsQ0FBQyxDQUFDLENBQUM7QUFFSixxQkFBcUI7QUFDckIsSUFBSSxDQUFDLGtFQUFrRSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBRW5GLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUNsQyxJQUFJLE9BQU8sQ0FBQztJQUNaLElBQUk7UUFDSCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUVoQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDeEI7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFFOUQsQ0FBQyxDQUFDLENBQUM7QUFFSCx3Q0FBd0M7QUFDeEMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzNDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIscURBQXFEO0lBRXJELE1BQU0sUUFBUSxHQUFHLElBQUssMEJBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxRQUFRLENBQUMsQ0FBQTtJQUNwQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUVyRCwyREFBMkQ7SUFFM0QsZ0NBQWdDO0FBRWpDLENBQUMsQ0FBQyxDQUFDO0FBZ0JILDBCQUEwQjtBQUMxQixpREFBaUQ7QUFDakQsOEJBQThCO0FBQzlCLDBEQUEwRDtBQUUxRCwyQ0FBMkM7QUFFM0MsMkRBQTJEO0FBRTNELDZEQUE2RDtBQUc3RCxrQ0FBa0M7QUFFbEMsTUFBTTtBQWNOLG9CQUFvQjtBQUNwQiwrQkFBK0I7QUFFL0IsS0FBSztBQUNMLElBQUk7QUFFSix3QkFBd0I7QUFFeEIsK0JBQStCO0FBRS9CLDBCQUEwQjtBQUMxQiwrRkFBK0YiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2UsIFxuXHQvLyBCbHVlQmFzZUFwcCBcbn0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi9pbmRleCc7XG4vLyBpbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBXaXRoQXBvbGxvUHJvdmlkZXIgZnJvbSAnLi4vd2l0aEFwb2xsb1Byb3ZpZGVyJztcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG4vLyBpbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcbiAgaW1wb3J0IEEgZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG4vLyBpbXBvcnQgeyBzYW1wbGUgfSBmcm9tICcuLi9fX21vY2tzX18vaW5kZXgnXG4vLyBpbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcbi8vIGNvbnN0IEN1c3RvbVRleHQgPSAoKSA9PiA8VGV4dD5FdmVyeXRoaW5nIGlzIG9rITwvVGV4dD47XG4vLyBpbXBvcnQgSHR0cExpbmsgZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG5cblxuLy93b3JraW5nIGFuZCB0ZXN0aW5nXG50ZXN0KCdQbHVnaW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XG5cdC8vIGNvbnNvbGUubG9nKCdpbXBvcnRlZHt9PT09Picse0h0dHBMaW5rfSlcblx0Ly8gY29uc29sZS5sb2coJ2ltcG9ydGVkPT09PicsSHR0cExpbmspXG5cblx0ZXhwZWN0KEJCLlBsdWdpbnMuaGFzKCdwbHVnaW4tYXBvbGxvJykpLnRvQmVUcnV0aHkoKTtcbn0pO1xuXG5sZXQgY2xpZW50OmFueTtcbnRlc3QoJ1BsdWdpbiBhcG9sbG9Qcm92aWRlciB3b3JraW5nJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0IFdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQgYXMgYW55KTtcbn0pO1xuXG4vL3dvcmtpbmcgaHR0cGxpbmsgb3B0aW9uc1xuXHR0ZXN0KCdUZXN0IHdpdGggQXBvbGxvIENvbmZpZycsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdFx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXHRcdGF3YWl0IEJCLkNvbmZpZ3Muc2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycsIHsgdXJpOiAnaHR0cDovL2dyYXBocWwnIH0pO1xuXG5cdFx0QkIuYm9vdCgpO1xuXHRcdGNvbnNvbGUubG9nKCdQbHVnaW5zPT09PT4nLCBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKSk7XG5cdFx0Y29uc3QgaHR0cExpbmtPcHRpb25zID0gQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJyk7XG5cdFx0ZXhwZWN0KGh0dHBMaW5rT3B0aW9ucykudG9FcXVhbCh7dXJpOiAnaHR0cDovL2dyYXBocWwnfSk7XG5cblx0fSk7XG5cbi8vd29ya2luZyBhbmQgdGVzdGluZ1xudGVzdCgnUGx1Z2luIHNob3VsZCB0aHJvdyBlcnJvciBpZiBodHRwTGlua09wdGlvbnMgY29uZmlnIGlzIG5vdCBnaXZlbicsIGFzeW5jICgpID0+IHtcblxuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXHRsZXQgbWVzc2FnZTtcblx0dHJ5IHtcblx0XHRhd2FpdCBCQi5ib290KCk7XG5cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcblx0fVxuXHRleHBlY3QobWVzc2FnZSkudG9CZSgnSFRUUCBMaW5rIFVSSSBub3QgcHJvdmlkZWQgdG8gQXBvbGxvJyk7XG5cbn0pO1xuXG4vL21vY2tpbmcgKyBhcG9sbG8gbGlua3MgICAvL25vdCB3b3JraW5nXG50ZXN0KCdNb2NraW5nIGFuZCBhcG9sbG8gbGlua3MnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdC8vIGNvbnN0IHtIdHRwTGlua30gID0gamVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cblx0Y29uc3QgaHR0cExpbmsgPSBuZXcgIEEuSHR0cExpbmsoKVxuXG5cdGNvbnNvbGUubG9nKCdvcmlnaW5hbD09PT4nLGh0dHBMaW5rKVxuXHRhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIsW2h0dHBMaW5rXSk7XG5cdFxuXHQvLyAgYXdhaXQgQkIuRmlsdGVycy5ydW4oXCJwbHVnaW4uYXBvbGxvLmxpbmtzXCIse0h0dHBMaW5rfSk7XG5cblx0Ly9leHBlY3QoSHR0cExpbmspLnRvQmVDYWxsZWQoKTtcblxufSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyAvL2NoZWNraW5nIGFwb2xsbyBjYWNoZVxuLy8gdGVzdCgnTW9ja2luZyBhbmQgYXBvbGxvIGNhY2hlJywgYXN5bmMgKCkgPT4ge1xuLy8gXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuLy8gXHRjb25zdCB7SHR0cExpbmt9OmFueSAgPSBqZXN0Lm1vY2soJ2Fwb2xsby1saW5rLWh0dHAnKTtcblxuLy8gXHQvLyBjb25zb2xlLmxvZygnb3JpZ2luYWw9PT0+JyxIdHRwTGluaylcblx0XG4vLyBcdC8vYXdhaXQgQkIuRmlsdGVycy5ydW4oXCJibHVlYmFzZS5ib290LmVuZFwiLHtIdHRwTGlua30pO1xuXG4vLyBcdCAgYXdhaXQgQkIuRmlsdGVycy5ydW4oXCJwbHVnaW4uYXBvbGxvLmNhY2hlXCIse0h0dHBMaW5rfSk7XG5cblxuLy8gXHRleHBlY3QoSHR0cExpbmspLnRvQmVDYWxsZWQoKTtcblxuLy8gfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNsYXNzIE1vY2tDbGFzcyB7XG4vLyBcdGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dCkge1xuXG4vLyBcdH1cbi8vIH1cblxuLy8gaW5zdGFuY2VvZi5pbnB1dCA9PT0gXG5cbi8vIG1pc2UocmVzb2x2ZSA9PiByZXNvbHZlKCkpKTtcblxuLy8gXHRjb25zdCB3cmFwcGVyID0gbW91bnQoXG4vLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfSBjb25maWdzPXt7ICdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnOiB7IHVyaTogJ3d3dy5nXG5cblxuXG4iXSwidmVyc2lvbiI6M30=