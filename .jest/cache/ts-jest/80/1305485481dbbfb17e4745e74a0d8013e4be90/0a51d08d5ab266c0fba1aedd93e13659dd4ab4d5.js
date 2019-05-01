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
//   import { HttpLink } from 'apollo-link-http';
// import { sample } from '../__mocks__/index'
// import { waitForElement } from 'enzyme-async-helpers';
// const CustomText = () => <Text>Everything is ok!</Text>;
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
describe('Apollo Plugin test', () => {
    it('Test with Apollo Config', async () => {
        const BB = new core_1.BlueBase();
        await BB.Plugins.register(index_1.default);
        await BB.Configs.setValue('plugins.apollo.httpLinkOptions', { uri: 'http://graphql' });
        BB.boot();
        console.log('Plugins====>', BB.Configs.getValue('plugins.apollo.httpLinkOptions'));
        const httpLinkOptions = BB.Configs.getValue('plugins.apollo.httpLinkOptions');
        expect(httpLinkOptions).toEqual({ uri: 'http://graphql' });
    });
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
//mocking + apollo links
test('Mocking and apollo links', async () => {
    const BB = new core_1.BlueBase();
    const { HttpLink } = jest.mock('apollo-link-http');
    // console.log('original===>',HttpLink)
    await BB.Filters.run("bluebase.boot.end", { HttpLink });
    //  await BB.Filters.run("plugin.apollo.links",{HttpLink});
    expect(HttpLink).toBeCalled();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELGlEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMseURBQXlEO0FBQ3pELDJEQUEyRDtBQUkzRCxxQkFBcUI7QUFDckIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQywyQ0FBMkM7SUFDM0MsdUNBQXVDO0lBRXZDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBSSxNQUFVLENBQUM7QUFDZixJQUFJLENBQUMsK0JBQStCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFOUMsNEJBQWtCLENBQUMsTUFBYSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCwwQkFBMEI7QUFDMUIsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtJQUVuQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFeEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztRQUMxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBRXZGLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUNuRixNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO0lBRTFELENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUM7QUFDSCxxQkFBcUI7QUFDckIsSUFBSSxDQUFDLGtFQUFrRSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBRW5GLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUNsQyxJQUFJLE9BQU8sQ0FBQztJQUNaLElBQUk7UUFDSCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUVoQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDeEI7SUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7QUFFOUQsQ0FBQyxDQUFDLENBQUM7QUFFSCx3QkFBd0I7QUFDeEIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzNDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFDLFFBQVEsRUFBQyxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUV0RCx1Q0FBdUM7SUFDdkMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFFckQsMkRBQTJEO0lBRTNELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUUvQixDQUFDLENBQUMsQ0FBQztBQUdILDBCQUEwQjtBQUMxQixpREFBaUQ7QUFDakQsOEJBQThCO0FBQzlCLDBEQUEwRDtBQUUxRCwyQ0FBMkM7QUFFM0MsMkRBQTJEO0FBRTNELDZEQUE2RDtBQUc3RCxrQ0FBa0M7QUFFbEMsTUFBTTtBQWNOLG9CQUFvQjtBQUNwQiwrQkFBK0I7QUFFL0IsS0FBSztBQUNMLElBQUk7QUFFSix3QkFBd0I7QUFFeEIsK0JBQStCO0FBRS9CLDBCQUEwQjtBQUMxQiwrRkFBK0YiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2UsIFxuXHQvLyBCbHVlQmFzZUFwcCBcbn0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi9pbmRleCc7XG4vLyBpbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBXaXRoQXBvbGxvUHJvdmlkZXIgZnJvbSAnLi4vd2l0aEFwb2xsb1Byb3ZpZGVyJztcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG4vLyBpbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcbi8vICAgaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbi8vIGltcG9ydCB7IHNhbXBsZSB9IGZyb20gJy4uL19fbW9ja3NfXy9pbmRleCdcbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuLy8gY29uc3QgQ3VzdG9tVGV4dCA9ICgpID0+IDxUZXh0PkV2ZXJ5dGhpbmcgaXMgb2shPC9UZXh0PjtcblxuXG5cbi8vd29ya2luZyBhbmQgdGVzdGluZ1xudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cdFxuXHQvLyBjb25zb2xlLmxvZygnaW1wb3J0ZWR7fT09PT4nLHtIdHRwTGlua30pXG5cdC8vIGNvbnNvbGUubG9nKCdpbXBvcnRlZD09PT4nLEh0dHBMaW5rKVxuXG5cdGV4cGVjdChCQi5QbHVnaW5zLmhhcygncGx1Z2luLWFwb2xsbycpKS50b0JlVHJ1dGh5KCk7XG59KTtcblxuXG5sZXQgY2xpZW50OmFueTtcbnRlc3QoJ1BsdWdpbiBhcG9sbG9Qcm92aWRlciB3b3JraW5nJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0IFdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQgYXMgYW55KTtcbn0pO1xuXG4vL3dvcmtpbmcgaHR0cGxpbmsgb3B0aW9uc1xuZGVzY3JpYmUoJ0Fwb2xsbyBQbHVnaW4gdGVzdCcsICgpID0+IHtcblxuXHRpdCgnVGVzdCB3aXRoIEFwb2xsbyBDb25maWcnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XHRhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnLCB7IHVyaTogJ2h0dHA6Ly9ncmFwaHFsJyB9KTtcblxuXHRcdEJCLmJvb3QoKTtcblx0XHRjb25zb2xlLmxvZygnUGx1Z2lucz09PT0+JywgQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJykpO1xuXHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuXHRcdGV4cGVjdChodHRwTGlua09wdGlvbnMpLnRvRXF1YWwoe3VyaTogJ2h0dHA6Ly9ncmFwaHFsJ30pO1xuXG5cdH0pO1xufSk7XG4vL3dvcmtpbmcgYW5kIHRlc3RpbmdcbnRlc3QoJ1BsdWdpbiBzaG91bGQgdGhyb3cgZXJyb3IgaWYgaHR0cExpbmtPcHRpb25zIGNvbmZpZyBpcyBub3QgZ2l2ZW4nLCBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0bGV0IG1lc3NhZ2U7XG5cdHRyeSB7XG5cdFx0YXdhaXQgQkIuYm9vdCgpO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdH1cblx0ZXhwZWN0KG1lc3NhZ2UpLnRvQmUoJ0hUVFAgTGluayBVUkkgbm90IHByb3ZpZGVkIHRvIEFwb2xsbycpO1xuXG59KTtcblxuLy9tb2NraW5nICsgYXBvbGxvIGxpbmtzXG50ZXN0KCdNb2NraW5nIGFuZCBhcG9sbG8gbGlua3MnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGNvbnN0IHtIdHRwTGlua306YW55ICA9IGplc3QubW9jaygnYXBvbGxvLWxpbmstaHR0cCcpO1xuXG5cdC8vIGNvbnNvbGUubG9nKCdvcmlnaW5hbD09PT4nLEh0dHBMaW5rKVxuXHRhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIse0h0dHBMaW5rfSk7XG5cblx0Ly8gIGF3YWl0IEJCLkZpbHRlcnMucnVuKFwicGx1Z2luLmFwb2xsby5saW5rc1wiLHtIdHRwTGlua30pO1xuXG5cdGV4cGVjdChIdHRwTGluaykudG9CZUNhbGxlZCgpO1xuXG59KTtcblxuXG4vLyAvL2NoZWNraW5nIGFwb2xsbyBjYWNoZVxuLy8gdGVzdCgnTW9ja2luZyBhbmQgYXBvbGxvIGNhY2hlJywgYXN5bmMgKCkgPT4ge1xuLy8gXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuLy8gXHRjb25zdCB7SHR0cExpbmt9OmFueSAgPSBqZXN0Lm1vY2soJ2Fwb2xsby1saW5rLWh0dHAnKTtcblxuLy8gXHQvLyBjb25zb2xlLmxvZygnb3JpZ2luYWw9PT0+JyxIdHRwTGluaylcblx0XG4vLyBcdC8vYXdhaXQgQkIuRmlsdGVycy5ydW4oXCJibHVlYmFzZS5ib290LmVuZFwiLHtIdHRwTGlua30pO1xuXG4vLyBcdCAgYXdhaXQgQkIuRmlsdGVycy5ydW4oXCJwbHVnaW4uYXBvbGxvLmNhY2hlXCIse0h0dHBMaW5rfSk7XG5cblxuLy8gXHRleHBlY3QoSHR0cExpbmspLnRvQmVDYWxsZWQoKTtcblxuLy8gfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNsYXNzIE1vY2tDbGFzcyB7XG4vLyBcdGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dCkge1xuXG4vLyBcdH1cbi8vIH1cblxuLy8gaW5zdGFuY2VvZi5pbnB1dCA9PT0gXG5cbi8vIG1pc2UocmVzb2x2ZSA9PiByZXNvbHZlKCkpKTtcblxuLy8gXHRjb25zdCB3cmFwcGVyID0gbW91bnQoXG4vLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfSBjb25maWdzPXt7ICdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnOiB7IHVyaTogJ3d3dy5nXG5cblxuXG4iXSwidmVyc2lvbiI6M30=