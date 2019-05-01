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
//  import { HttpLink } from 'apollo-link-http';
// import { sample } from '../__mocks__/index'
// import { waitForElement } from 'enzyme-async-helpers';
// const CustomText = () => <Text>Everything is ok!</Text>;
//working and testing
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
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
    const { HttpLink } = jest.mock('apollo-link-http');
    BB.Filters.run("bluebase.boot.end", HttpLink);
    expect(message).toBe('HTTP Link URI not provided to Apollo');
});
test('Mocking', async () => {
    const BB = new core_1.BlueBase();
    const { HttpLink } = jest.mock('apollo-link-http');
    await BB.Filters.run("bluebase.boot.end", { HttpLink });
    console.log("asd", HttpLink);
    expect(HttpLink).toHaveBeenCalled();
});
let client;
test('Plugin apolloProvider working', async () => {
    withApolloProvider_1.default(client);
});
// class MockClass {
// 	constructor(public input) {
// 	}
// }
// instanceof.input === 
// mise(resolve => resolve()));
// 	const wrapper = mount(
// 		<BlueBaseApp plugins={[Plugin]} configs={{ 'plugins.apollo.httpLinkOptions': { uri: 'www.g
describe('Apollo Plugin test', () => {
    it('Test with Apollo Config', async () => {
        const BB = new core_1.BlueBase();
        await BB.Plugins.register(index_1.default);
        // ApolloPlugin.getClient();
        //const Plugins = await BB.Plugins.has(Plugin);
        await BB.Configs.setValue('plugins.apollo.httpLinkOptions', { uri: 'http://graphql' });
        BB.boot();
        console.log('Plugins====>', BB.Configs.getValue('plugins.apollo.httpLinkOptions'));
        const httpLinkOptions = BB.Configs.getValue('plugins.apollo.httpLinkOptions');
        expect(httpLinkOptions).toEqual({ uri: 'http://graphql' });
    });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELGdEQUFnRDtBQUNoRCw4Q0FBOEM7QUFDOUMseURBQXlEO0FBSXpELDJEQUEyRDtBQUczRCxxQkFBcUI7QUFDckIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILHFCQUFxQjtBQUNyQixJQUFJLENBQUMsa0VBQWtFLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFbkYsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO0lBQ2xDLElBQUksT0FBTyxDQUFDO0lBRVosSUFBSTtRQUNILE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0tBRWhCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUVELE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFFOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBRTlELENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLElBQUksRUFBRTtJQUMxQixNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsUUFBUSxDQUFDLENBQUE7SUFDM0IsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7QUFFckMsQ0FBQyxDQUFDLENBQUM7QUFHSCxJQUFJLE1BQVUsQ0FBQztBQUNmLElBQUksQ0FBQywrQkFBK0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUU5Qyw0QkFBa0IsQ0FBQyxNQUFhLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUdILG9CQUFvQjtBQUNwQiwrQkFBK0I7QUFFL0IsS0FBSztBQUNMLElBQUk7QUFFSix3QkFBd0I7QUFFeEIsK0JBQStCO0FBRS9CLDBCQUEwQjtBQUMxQiwrRkFBK0Y7QUFFL0YsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtJQUVuQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFeEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztRQUMxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO1FBQ2xDLDRCQUE0QjtRQUM1QiwrQ0FBK0M7UUFDL0MsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFdkYsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7SUFFMUQsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYXBvbGxvL3BsdWdpbi1hcG9sbG8vc3JjL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZSwgXG5cdC8vIEJsdWVCYXNlQXBwIFxufSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uL2luZGV4Jztcbi8vIGltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IFdpdGhBcG9sbG9Qcm92aWRlciBmcm9tICcuLi93aXRoQXBvbGxvUHJvdmlkZXInO1xuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuLy8gIGltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG4vLyBpbXBvcnQgeyBzYW1wbGUgfSBmcm9tICcuLi9fX21vY2tzX18vaW5kZXgnXG4vLyBpbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblxuXG5cbi8vIGNvbnN0IEN1c3RvbVRleHQgPSAoKSA9PiA8VGV4dD5FdmVyeXRoaW5nIGlzIG9rITwvVGV4dD47XG5cblxuLy93b3JraW5nIGFuZCB0ZXN0aW5nXG50ZXN0KCdQbHVnaW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblxuXHRleHBlY3QoQkIuUGx1Z2lucy5oYXMoJ3BsdWdpbi1hcG9sbG8nKSkudG9CZVRydXRoeSgpO1xufSk7XG5cbi8vd29ya2luZyBhbmQgdGVzdGluZ1xudGVzdCgnUGx1Z2luIHNob3VsZCB0aHJvdyBlcnJvciBpZiBodHRwTGlua09wdGlvbnMgY29uZmlnIGlzIG5vdCBnaXZlbicsIGFzeW5jICgpID0+IHtcblxuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXHRsZXQgbWVzc2FnZTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IEJCLmJvb3QoKTtcblxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXHR9XG5cblx0Y29uc3Qge0h0dHBMaW5rfSA6YW55ID0gamVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cdFx0QkIuRmlsdGVycy5ydW4oXCJibHVlYmFzZS5ib290LmVuZFwiLEh0dHBMaW5rKTtcblxuXHRleHBlY3QobWVzc2FnZSkudG9CZSgnSFRUUCBMaW5rIFVSSSBub3QgcHJvdmlkZWQgdG8gQXBvbGxvJyk7XG5cbn0pO1xuXG5cbnRlc3QoJ01vY2tpbmcnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGNvbnN0IHtIdHRwTGlua30gOmFueSA9IGplc3QubW9jaygnYXBvbGxvLWxpbmstaHR0cCcpO1xuXHRhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIse0h0dHBMaW5rfSk7XG5cdGNvbnNvbGUubG9nKFwiYXNkXCIsSHR0cExpbmspXG5cdGV4cGVjdChIdHRwTGluaykudG9IYXZlQmVlbkNhbGxlZCgpO1xuXG59KTtcblxuXG5sZXQgY2xpZW50OmFueTtcbnRlc3QoJ1BsdWdpbiBhcG9sbG9Qcm92aWRlciB3b3JraW5nJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0IFdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQgYXMgYW55KTtcbn0pO1xuXG5cbi8vIGNsYXNzIE1vY2tDbGFzcyB7XG4vLyBcdGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dCkge1xuXG4vLyBcdH1cbi8vIH1cblxuLy8gaW5zdGFuY2VvZi5pbnB1dCA9PT0gXG5cbi8vIG1pc2UocmVzb2x2ZSA9PiByZXNvbHZlKCkpKTtcblxuLy8gXHRjb25zdCB3cmFwcGVyID0gbW91bnQoXG4vLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfSBjb25maWdzPXt7ICdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnOiB7IHVyaTogJ3d3dy5nXG5cbmRlc2NyaWJlKCdBcG9sbG8gUGx1Z2luIHRlc3QnLCAoKSA9PiB7XG5cblx0aXQoJ1Rlc3Qgd2l0aCBBcG9sbG8gQ29uZmlnJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cdFx0Ly8gQXBvbGxvUGx1Z2luLmdldENsaWVudCgpO1xuXHRcdC8vY29uc3QgUGx1Z2lucyA9IGF3YWl0IEJCLlBsdWdpbnMuaGFzKFBsdWdpbik7XG5cdFx0YXdhaXQgQkIuQ29uZmlncy5zZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJywgeyB1cmk6ICdodHRwOi8vZ3JhcGhxbCcgfSk7XG5cblx0XHRCQi5ib290KCk7XG5cdFx0Y29uc29sZS5sb2coJ1BsdWdpbnM9PT09PicsIEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpKTtcblx0XHRjb25zdCBodHRwTGlua09wdGlvbnMgPSBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKTtcblx0XHRleHBlY3QoaHR0cExpbmtPcHRpb25zKS50b0VxdWFsKHt1cmk6ICdodHRwOi8vZ3JhcGhxbCd9KTtcblxuXHR9KTtcbn0pO1xuXG4iXSwidmVyc2lvbiI6M30=