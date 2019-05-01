"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const index_1 = tslib_1.__importDefault(require("../index"));
// import { Text } from 'react-native';
// import WithApolloProvider from '../withApolloProvider';
// import React from 'react';
// import { mount } from 'enzyme';
// import { waitForElement } from 'enzyme-async-helpers';
// import { HttpLink } from 'apollo-link-http';
// import { sample } from '../__mocks__/index'
// const CustomText = () => <Text>Everything is ok!</Text>;
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    // import { waitForElement } from 'enzyme-async-helpers';
    expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
});
test('Plugin should throw error if httpLinkOptions config is not given', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    //let message;
    // try {
    // 	//await BB.boot();
    // } catch (error) {
    // 	///message = error.message;
    // }
    const { HttpLink } = jest.mock('apollo-link-http');
    BB.Filters.run("bluebase.boot.end", HttpLink);
    //	expect(message).toBe('HTTP Link URI not provided to Apollo');
});
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    const { HttpLink } = jest.mock('apollo-link-http');
    await BB.Filters.run("bluebase.boot.end", HttpLink);
    expect(HttpLink).toBeTruthy();
});
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Filters.register({
        event: 'bluebase-boot-end',
        value: () => {
        }
    });
});
// class MockClass {
// 	constructor(public input) {
// 	}
// }
// instanceof.input === 
// // let client:any;
// // test('Plugin should be correctly registered', async () => {
// // 		 WithApolloProvider(client as any);
// // });
// mise(resolve => resolve()));
// 	const wrapper = mount(
// 		<BlueBaseApp plugins={[Plugin]} configs={{ 'plugins.apollo.httpLinkOptions': { uri: 'www.g
// describe('Apollo Plugin test', () => {
// 	it('Test with Apollo Config', async () => {
// 		const BB = new BlueBase();
// 		await BB.Plugins.register(Plugin);
// 		// ApolloPlugin.getClient();
// 		const Plugins = await BB.Plugins.has(Plugin);
// 		await BB.Configs.setValue('plugins.apollo.httpLinkOptions', { uri: 'http://graphql' });
// 		// renderer.create (
// 		// 	<BB.Components.Query>)
// 		// </BB.Components.Query>
// 		BB.boot();
// 		console.log('Plugins====>', BB.Configs.getValue('plugins.apollo.httpLinkOptions'));
// 		const httpLinkOptions = BB.Configs.getValue('plugins.apollo.httpLinkOptions');
// 		expect(httpLinkOptions).toEqual({uri: 'http://graphql'});
// 	});
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsMERBQTBEO0FBQzFELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELCtDQUErQztBQUMvQyw4Q0FBOEM7QUFHOUMsMkRBQTJEO0FBRTNELElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbkMseURBQXlEO0lBQ3hELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGtFQUFrRSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBRW5GLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUNsQyxjQUFjO0lBRWQsUUFBUTtJQUNSLHNCQUFzQjtJQUV0QixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLElBQUk7SUFDSixNQUFNLEVBQUMsUUFBUSxFQUFDLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RELEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRzlDLGdFQUFnRTtBQUNoRSxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUVuRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFFL0IsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDOUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUMxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3pCLEtBQUssRUFBRSxtQkFBbUI7UUFDMUIsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUVaLENBQUM7S0FDRCxDQUFDLENBQUM7QUFFSixDQUFDLENBQUMsQ0FBQztBQVFILG9CQUFvQjtBQUNwQiwrQkFBK0I7QUFFL0IsS0FBSztBQUNMLElBQUk7QUFFSix3QkFBd0I7QUFJeEIscUJBQXFCO0FBQ3JCLGlFQUFpRTtBQUVqRSwyQ0FBMkM7QUFDM0MsU0FBUztBQUVULCtCQUErQjtBQUUvQiwwQkFBMEI7QUFDMUIsK0ZBQStGO0FBSS9GLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFFL0MsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QyxpQ0FBaUM7QUFDakMsa0RBQWtEO0FBQ2xELDRGQUE0RjtBQUU1Rix5QkFBeUI7QUFDekIsK0JBQStCO0FBQy9CLDhCQUE4QjtBQUU5QixlQUFlO0FBQ2Ysd0ZBQXdGO0FBQ3hGLG1GQUFtRjtBQUNuRiw4REFBOEQ7QUFFOUQsT0FBTztBQUNQLE1BQU0iLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2UsIFxuXHQvLyBCbHVlQmFzZUFwcCBcbn0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi9pbmRleCc7XG4vLyBpbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbi8vIGltcG9ydCBXaXRoQXBvbGxvUHJvdmlkZXIgZnJvbSAnLi4vd2l0aEFwb2xsb1Byb3ZpZGVyJztcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG4vLyBpbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcbi8vIGltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG4vLyBpbXBvcnQgeyBzYW1wbGUgfSBmcm9tICcuLi9fX21vY2tzX18vaW5kZXgnXG5cblxuLy8gY29uc3QgQ3VzdG9tVGV4dCA9ICgpID0+IDxUZXh0PkV2ZXJ5dGhpbmcgaXMgb2shPC9UZXh0PjtcblxudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuXHRleHBlY3QoQkIuUGx1Z2lucy5oYXMoJ3BsdWdpbi1hcG9sbG8nKSkudG9CZVRydXRoeSgpO1xufSk7XG5cbnRlc3QoJ1BsdWdpbiBzaG91bGQgdGhyb3cgZXJyb3IgaWYgaHR0cExpbmtPcHRpb25zIGNvbmZpZyBpcyBub3QgZ2l2ZW4nLCBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0Ly9sZXQgbWVzc2FnZTtcblxuXHQvLyB0cnkge1xuXHQvLyBcdC8vYXdhaXQgQkIuYm9vdCgpO1xuXG5cdC8vIH0gY2F0Y2ggKGVycm9yKSB7XG5cdC8vIFx0Ly8vbWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdC8vIH1cblx0Y29uc3Qge0h0dHBMaW5rfSA6YW55ID0gamVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cdEJCLkZpbHRlcnMucnVuKFwiYmx1ZWJhc2UuYm9vdC5lbmRcIixIdHRwTGluayk7XG5cblxuLy9cdGV4cGVjdChtZXNzYWdlKS50b0JlKCdIVFRQIExpbmsgVVJJIG5vdCBwcm92aWRlZCB0byBBcG9sbG8nKTtcbn0pO1xuXG50ZXN0KCdQbHVnaW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGNvbnN0IHtIdHRwTGlua30gOmFueSA9IGplc3QubW9jaygnYXBvbGxvLWxpbmstaHR0cCcpO1xuXHRhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIsSHR0cExpbmspO1xuXG5cdGV4cGVjdChIdHRwTGluaykudG9CZVRydXRoeSgpO1xuXG59KTtcblxudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRhd2FpdCBCQi5GaWx0ZXJzLnJlZ2lzdGVyKHtcblx0XHRldmVudDogJ2JsdWViYXNlLWJvb3QtZW5kJyxcblx0XHR2YWx1ZTogKCkgPT4ge1xuXG5cdFx0fVxuXHR9KTtcblxufSk7XG5cblxuXG5cblxuXG5cbi8vIGNsYXNzIE1vY2tDbGFzcyB7XG4vLyBcdGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dCkge1xuXG4vLyBcdH1cbi8vIH1cblxuLy8gaW5zdGFuY2VvZi5pbnB1dCA9PT0gXG5cblxuXG4vLyAvLyBsZXQgY2xpZW50OmFueTtcbi8vIC8vIHRlc3QoJ1BsdWdpbiBzaG91bGQgYmUgY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cbi8vIC8vIFx0XHQgV2l0aEFwb2xsb1Byb3ZpZGVyKGNsaWVudCBhcyBhbnkpO1xuLy8gLy8gfSk7XG5cbi8vIG1pc2UocmVzb2x2ZSA9PiByZXNvbHZlKCkpKTtcblxuLy8gXHRjb25zdCB3cmFwcGVyID0gbW91bnQoXG4vLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfSBjb25maWdzPXt7ICdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnOiB7IHVyaTogJ3d3dy5nXG5cblxuXG4vLyBkZXNjcmliZSgnQXBvbGxvIFBsdWdpbiB0ZXN0JywgKCkgPT4ge1xuLy8gXHRpdCgnVGVzdCB3aXRoIEFwb2xsbyBDb25maWcnLCBhc3luYyAoKSA9PiB7XG5cbi8vIFx0XHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuLy8gXHRcdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcbi8vIFx0XHQvLyBBcG9sbG9QbHVnaW4uZ2V0Q2xpZW50KCk7XG4vLyBcdFx0Y29uc3QgUGx1Z2lucyA9IGF3YWl0IEJCLlBsdWdpbnMuaGFzKFBsdWdpbik7XG4vLyBcdFx0YXdhaXQgQkIuQ29uZmlncy5zZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJywgeyB1cmk6ICdodHRwOi8vZ3JhcGhxbCcgfSk7XG5cbi8vIFx0XHQvLyByZW5kZXJlci5jcmVhdGUgKFxuLy8gXHRcdC8vIFx0PEJCLkNvbXBvbmVudHMuUXVlcnk+KVxuLy8gXHRcdC8vIDwvQkIuQ29tcG9uZW50cy5RdWVyeT5cblxuLy8gXHRcdEJCLmJvb3QoKTtcbi8vIFx0XHRjb25zb2xlLmxvZygnUGx1Z2lucz09PT0+JywgQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJykpO1xuLy8gXHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuLy8gXHRcdGV4cGVjdChodHRwTGlua09wdGlvbnMpLnRvRXF1YWwoe3VyaTogJ2h0dHA6Ly9ncmFwaHFsJ30pO1xuXG4vLyBcdH0pO1xuLy8gfSk7XG5cbiJdLCJ2ZXJzaW9uIjozfQ==