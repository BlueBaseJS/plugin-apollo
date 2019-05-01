"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const index_1 = tslib_1.__importDefault(require("../index"));
const react_native_1 = require("react-native");
// import WithApolloProvider from '../withApolloProvider';
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
// import { HttpLink } from 'apollo-link-http';
// import { sample } from '../__mocks__/index'
const CustomText = () => react_1.default.createElement(react_native_1.Text, null, "Everything is ok!");
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
});
test('Plugin should throw error if httpLinkOptions config is not given', async () => {
    jest.mock('apollo-link-http');
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    let message;
    try {
        await BB.boot();
        BB.Filters.run("bluebase.boot.end", {});
    }
    catch (error) {
        message = error.message;
    }
    expect(message).toBe('HTTP Link URI not provided to Apollo');
});
test('Plugin correctly registered', async () => {
    global.fetch = jest.fn(() => new Promise(resolve => resolve()));
    const wrapper = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default], configs: { 'plugins.apollo.httpLinkOptions': { uri: 'www.google.com' } } },
        react_1.default.createElement(CustomText, null)));
    await enzyme_async_helpers_1.waitForElement(wrapper, CustomText);
    expect(wrapper.find('ApolloProvider').getElements().length).toBe(1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXVEO0FBQ3ZELDZEQUE4QjtBQUM5QiwrQ0FBb0M7QUFDcEMsMERBQTBEO0FBQzFELDBEQUEwQjtBQUMxQixtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBQ3RELCtDQUErQztBQUMvQyw4Q0FBOEM7QUFHOUMsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFLENBQUMsOEJBQUMsbUJBQUksNEJBQXlCLENBQUM7QUFFeEQsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxrRUFBa0UsRUFBRSxLQUFLLElBQUksRUFBRTtJQWFuRixJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFYOUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO0lBQ2xDLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSTtRQUNILE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLEVBQUUsQ0FBQyxDQUFDO0tBRXZDO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUlELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztDQUM3RCxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFN0MsTUFBYyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXpFLE1BQU0sT0FBTyxHQUFHLGNBQUssQ0FDcEIsOEJBQUMsa0JBQVcsSUFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxnQ0FBZ0MsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxFQUFFO1FBQ3ZHLDhCQUFDLFVBQVUsT0FBRyxDQUNELENBQ2QsQ0FBQztJQUNGLE1BQU0scUNBQWMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDMUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFckUsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFJLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDOUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUMxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3pCLEtBQUssRUFBRSxtQkFBbUI7UUFDMUIsS0FBSyxFQUFFLEdBQUcsRUFBRTtRQUVaLENBQUM7S0FDRCxDQUFDLENBQUM7QUFFSixDQUFDLENBQUMsQ0FBQztBQVFILG9CQUFvQjtBQUNwQiwrQkFBK0I7QUFFL0IsS0FBSztBQUNMLElBQUk7QUFFSix3QkFBd0I7QUFJeEIscUJBQXFCO0FBQ3JCLGlFQUFpRTtBQUVqRSwyQ0FBMkM7QUFDM0MsU0FBUztBQUVULCtCQUErQjtBQUUvQiwwQkFBMEI7QUFDMUIsK0ZBQStGO0FBSS9GLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFFL0MsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QyxpQ0FBaUM7QUFDakMsa0RBQWtEO0FBQ2xELDRGQUE0RjtBQUU1Rix5QkFBeUI7QUFDekIsK0JBQStCO0FBQy9CLDhCQUE4QjtBQUU5QixlQUFlO0FBQ2Ysd0ZBQXdGO0FBQ3hGLG1GQUFtRjtBQUNuRiw4REFBOEQ7QUFFOUQsT0FBTztBQUNQLE1BQU0iLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2UsIEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbi8vIGltcG9ydCBXaXRoQXBvbGxvUHJvdmlkZXIgZnJvbSAnLi4vd2l0aEFwb2xsb1Byb3ZpZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcbi8vIGltcG9ydCB7IEh0dHBMaW5rIH0gZnJvbSAnYXBvbGxvLWxpbmstaHR0cCc7XG4vLyBpbXBvcnQgeyBzYW1wbGUgfSBmcm9tICcuLi9fX21vY2tzX18vaW5kZXgnXG5cblxuY29uc3QgQ3VzdG9tVGV4dCA9ICgpID0+IDxUZXh0PkV2ZXJ5dGhpbmcgaXMgb2shPC9UZXh0PjtcblxudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cblx0ZXhwZWN0KEJCLlBsdWdpbnMuaGFzKCdwbHVnaW4tYXBvbGxvJykpLnRvQmVUcnV0aHkoKTtcbn0pO1xuXG50ZXN0KCdQbHVnaW4gc2hvdWxkIHRocm93IGVycm9yIGlmIGh0dHBMaW5rT3B0aW9ucyBjb25maWcgaXMgbm90IGdpdmVuJywgYXN5bmMgKCkgPT4ge1xuXG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdFxuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cdGxldCBtZXNzYWdlO1xuXHR0cnkge1xuXHRcdGF3YWl0IEJCLmJvb3QoKTtcblx0XHRCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIse30pO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdH1cblx0amVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cblxuXHRleHBlY3QobWVzc2FnZSkudG9CZSgnSFRUUCBMaW5rIFVSSSBub3QgcHJvdmlkZWQgdG8gQXBvbGxvJyk7XG59KTtcblxudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXG5cdChnbG9iYWwgYXMgYW55KS5mZXRjaCA9IGplc3QuZm4oKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNvbHZlKCkpKTtcblxuXHRjb25zdCB3cmFwcGVyID0gbW91bnQoXG5cdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfSBjb25maWdzPXt7ICdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnOiB7IHVyaTogJ3d3dy5nb29nbGUuY29tJyB9IH19PlxuXHRcdFx0PEN1c3RvbVRleHQgLz5cblx0XHQ8L0JsdWVCYXNlQXBwPlxuXHQpO1xuXHRhd2FpdCB3YWl0Rm9yRWxlbWVudCh3cmFwcGVyLCBDdXN0b21UZXh0KTtcblx0ZXhwZWN0KHdyYXBwZXIuZmluZCgnQXBvbGxvUHJvdmlkZXInKS5nZXRFbGVtZW50cygpLmxlbmd0aCkudG9CZSgxKTtcblxufSk7XG5cbnRlc3QoJ1BsdWdpbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZCcsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0YXdhaXQgQkIuRmlsdGVycy5yZWdpc3Rlcih7XG5cdFx0ZXZlbnQ6ICdibHVlYmFzZS1ib290LWVuZCcsXG5cdFx0dmFsdWU6ICgpID0+IHtcblxuXHRcdH1cblx0fSk7XG5cbn0pO1xuXG5cblxuXG5cblxuXG4vLyBjbGFzcyBNb2NrQ2xhc3Mge1xuLy8gXHRjb25zdHJ1Y3RvcihwdWJsaWMgaW5wdXQpIHtcblxuLy8gXHR9XG4vLyB9XG5cbi8vIGluc3RhbmNlb2YuaW5wdXQgPT09IFxuXG5cblxuLy8gLy8gbGV0IGNsaWVudDphbnk7XG4vLyAvLyB0ZXN0KCdQbHVnaW4gc2hvdWxkIGJlIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXG4vLyAvLyBcdFx0IFdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQgYXMgYW55KTtcbi8vIC8vIH0pO1xuXG4vLyBtaXNlKHJlc29sdmUgPT4gcmVzb2x2ZSgpKSk7XG5cbi8vIFx0Y29uc3Qgd3JhcHBlciA9IG1vdW50KFxuLy8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0gY29uZmlncz17eyAncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJzogeyB1cmk6ICd3d3cuZ1xuXG5cblxuLy8gZGVzY3JpYmUoJ0Fwb2xsbyBQbHVnaW4gdGVzdCcsICgpID0+IHtcbi8vIFx0aXQoJ1Rlc3Qgd2l0aCBBcG9sbG8gQ29uZmlnJywgYXN5bmMgKCkgPT4ge1xuXG4vLyBcdFx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcbi8vIFx0XHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG4vLyBcdFx0Ly8gQXBvbGxvUGx1Z2luLmdldENsaWVudCgpO1xuLy8gXHRcdGNvbnN0IFBsdWdpbnMgPSBhd2FpdCBCQi5QbHVnaW5zLmhhcyhQbHVnaW4pO1xuLy8gXHRcdGF3YWl0IEJCLkNvbmZpZ3Muc2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycsIHsgdXJpOiAnaHR0cDovL2dyYXBocWwnIH0pO1xuXG4vLyBcdFx0Ly8gcmVuZGVyZXIuY3JlYXRlIChcbi8vIFx0XHQvLyBcdDxCQi5Db21wb25lbnRzLlF1ZXJ5Pilcbi8vIFx0XHQvLyA8L0JCLkNvbXBvbmVudHMuUXVlcnk+XG5cbi8vIFx0XHRCQi5ib290KCk7XG4vLyBcdFx0Y29uc29sZS5sb2coJ1BsdWdpbnM9PT09PicsIEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpKTtcbi8vIFx0XHRjb25zdCBodHRwTGlua09wdGlvbnMgPSBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKTtcbi8vIFx0XHRleHBlY3QoaHR0cExpbmtPcHRpb25zKS50b0VxdWFsKHt1cmk6ICdodHRwOi8vZ3JhcGhxbCd9KTtcblxuLy8gXHR9KTtcbi8vIH0pO1xuXG4iXSwidmVyc2lvbiI6M30=