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
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    let message;
    try {
        //await BB.boot();
    }
    catch (error) {
        message = error.message;
    }
    const { HttpLink } = jest.mock('apollo-link-http');
    BB.Filters.run("bluebase.boot.end", HttpLink);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXVEO0FBQ3ZELDZEQUE4QjtBQUM5QiwrQ0FBb0M7QUFDcEMsMERBQTBEO0FBQzFELDBEQUEwQjtBQUMxQixtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBQ3RELCtDQUErQztBQUMvQyw4Q0FBOEM7QUFHOUMsTUFBTSxVQUFVLEdBQUcsR0FBRyxFQUFFLENBQUMsOEJBQUMsbUJBQUksNEJBQXlCLENBQUM7QUFFeEQsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyxrRUFBa0UsRUFBRSxLQUFLLElBQUksRUFBRTtJQUVuRixNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBRTFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFDbEMsSUFBSSxPQUFPLENBQUM7SUFFWixJQUFJO1FBQ0gsa0JBQWtCO0tBRWxCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUNELE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFHN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBRTdDLE1BQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQztJQUV6RSxNQUFNLE9BQU8sR0FBRyxjQUFLLENBQ3BCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsZ0NBQWdDLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsRUFBRTtRQUN2Ryw4QkFBQyxVQUFVLE9BQUcsQ0FDRCxDQUNkLENBQUM7SUFDRixNQUFNLHFDQUFjLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRXJFLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN6QixLQUFLLEVBQUUsbUJBQW1CO1FBQzFCLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFFWixDQUFDO0tBQ0QsQ0FBQyxDQUFDO0FBRUosQ0FBQyxDQUFDLENBQUM7QUFRSCxvQkFBb0I7QUFDcEIsK0JBQStCO0FBRS9CLEtBQUs7QUFDTCxJQUFJO0FBRUosd0JBQXdCO0FBSXhCLHFCQUFxQjtBQUNyQixpRUFBaUU7QUFFakUsMkNBQTJDO0FBQzNDLFNBQVM7QUFFVCwrQkFBK0I7QUFFL0IsMEJBQTBCO0FBQzFCLCtGQUErRjtBQUkvRix5Q0FBeUM7QUFDekMsK0NBQStDO0FBRS9DLCtCQUErQjtBQUMvQix1Q0FBdUM7QUFDdkMsaUNBQWlDO0FBQ2pDLGtEQUFrRDtBQUNsRCw0RkFBNEY7QUFFNUYseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQiw4QkFBOEI7QUFFOUIsZUFBZTtBQUNmLHdGQUF3RjtBQUN4RixtRkFBbUY7QUFDbkYsOERBQThEO0FBRTlELE9BQU87QUFDUCxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9hcG9sbG8vcGx1Z2luLWFwb2xsby9zcmMvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlLCBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG4vLyBpbXBvcnQgV2l0aEFwb2xsb1Byb3ZpZGVyIGZyb20gJy4uL3dpdGhBcG9sbG9Qcm92aWRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG4vLyBpbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuLy8gaW1wb3J0IHsgc2FtcGxlIH0gZnJvbSAnLi4vX19tb2Nrc19fL2luZGV4J1xuXG5cbmNvbnN0IEN1c3RvbVRleHQgPSAoKSA9PiA8VGV4dD5FdmVyeXRoaW5nIGlzIG9rITwvVGV4dD47XG5cbnRlc3QoJ1BsdWdpbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZCcsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXG5cdGV4cGVjdChCQi5QbHVnaW5zLmhhcygncGx1Z2luLWFwb2xsbycpKS50b0JlVHJ1dGh5KCk7XG59KTtcblxudGVzdCgnUGx1Z2luIHNob3VsZCB0aHJvdyBlcnJvciBpZiBodHRwTGlua09wdGlvbnMgY29uZmlnIGlzIG5vdCBnaXZlbicsIGFzeW5jICgpID0+IHtcblxuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXHRsZXQgbWVzc2FnZTtcblxuXHR0cnkge1xuXHRcdC8vYXdhaXQgQkIuYm9vdCgpO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdH1cblx0Y29uc3Qge0h0dHBMaW5rfSA6YW55ID0gamVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cdEJCLkZpbHRlcnMucnVuKFwiYmx1ZWJhc2UuYm9vdC5lbmRcIixIdHRwTGluayk7XG5cblxuXHRleHBlY3QobWVzc2FnZSkudG9CZSgnSFRUUCBMaW5rIFVSSSBub3QgcHJvdmlkZWQgdG8gQXBvbGxvJyk7XG59KTtcblxudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXG5cdChnbG9iYWwgYXMgYW55KS5mZXRjaCA9IGplc3QuZm4oKCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiByZXNvbHZlKCkpKTtcblxuXHRjb25zdCB3cmFwcGVyID0gbW91bnQoXG5cdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfSBjb25maWdzPXt7ICdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnOiB7IHVyaTogJ3d3dy5nb29nbGUuY29tJyB9IH19PlxuXHRcdFx0PEN1c3RvbVRleHQgLz5cblx0XHQ8L0JsdWVCYXNlQXBwPlxuXHQpO1xuXHRhd2FpdCB3YWl0Rm9yRWxlbWVudCh3cmFwcGVyLCBDdXN0b21UZXh0KTtcblx0ZXhwZWN0KHdyYXBwZXIuZmluZCgnQXBvbGxvUHJvdmlkZXInKS5nZXRFbGVtZW50cygpLmxlbmd0aCkudG9CZSgxKTtcblxufSk7XG5cbnRlc3QoJ1BsdWdpbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZCcsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0YXdhaXQgQkIuRmlsdGVycy5yZWdpc3Rlcih7XG5cdFx0ZXZlbnQ6ICdibHVlYmFzZS1ib290LWVuZCcsXG5cdFx0dmFsdWU6ICgpID0+IHtcblxuXHRcdH1cblx0fSk7XG5cbn0pO1xuXG5cblxuXG5cblxuXG4vLyBjbGFzcyBNb2NrQ2xhc3Mge1xuLy8gXHRjb25zdHJ1Y3RvcihwdWJsaWMgaW5wdXQpIHtcblxuLy8gXHR9XG4vLyB9XG5cbi8vIGluc3RhbmNlb2YuaW5wdXQgPT09IFxuXG5cblxuLy8gLy8gbGV0IGNsaWVudDphbnk7XG4vLyAvLyB0ZXN0KCdQbHVnaW4gc2hvdWxkIGJlIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXG4vLyAvLyBcdFx0IFdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQgYXMgYW55KTtcbi8vIC8vIH0pO1xuXG4vLyBtaXNlKHJlc29sdmUgPT4gcmVzb2x2ZSgpKSk7XG5cbi8vIFx0Y29uc3Qgd3JhcHBlciA9IG1vdW50KFxuLy8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0gY29uZmlncz17eyAncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJzogeyB1cmk6ICd3d3cuZ1xuXG5cblxuLy8gZGVzY3JpYmUoJ0Fwb2xsbyBQbHVnaW4gdGVzdCcsICgpID0+IHtcbi8vIFx0aXQoJ1Rlc3Qgd2l0aCBBcG9sbG8gQ29uZmlnJywgYXN5bmMgKCkgPT4ge1xuXG4vLyBcdFx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcbi8vIFx0XHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG4vLyBcdFx0Ly8gQXBvbGxvUGx1Z2luLmdldENsaWVudCgpO1xuLy8gXHRcdGNvbnN0IFBsdWdpbnMgPSBhd2FpdCBCQi5QbHVnaW5zLmhhcyhQbHVnaW4pO1xuLy8gXHRcdGF3YWl0IEJCLkNvbmZpZ3Muc2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycsIHsgdXJpOiAnaHR0cDovL2dyYXBocWwnIH0pO1xuXG4vLyBcdFx0Ly8gcmVuZGVyZXIuY3JlYXRlIChcbi8vIFx0XHQvLyBcdDxCQi5Db21wb25lbnRzLlF1ZXJ5Pilcbi8vIFx0XHQvLyA8L0JCLkNvbXBvbmVudHMuUXVlcnk+XG5cbi8vIFx0XHRCQi5ib290KCk7XG4vLyBcdFx0Y29uc29sZS5sb2coJ1BsdWdpbnM9PT09PicsIEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpKTtcbi8vIFx0XHRjb25zdCBodHRwTGlua09wdGlvbnMgPSBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKTtcbi8vIFx0XHRleHBlY3QoaHR0cExpbmtPcHRpb25zKS50b0VxdWFsKHt1cmk6ICdodHRwOi8vZ3JhcGhxbCd9KTtcblxuLy8gXHR9KTtcbi8vIH0pO1xuXG4iXSwidmVyc2lvbiI6M30=