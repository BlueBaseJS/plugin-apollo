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
const CustomText = () => react_1.default.createElement(react_native_1.Text, null, "Everything is ok!");
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
});
test('Plugin correctly registered', async () => {
    const wrapper = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
        react_1.default.createElement(CustomText, null)));
    expect(wrapper).toMatchSnapshot();
    await enzyme_async_helpers_1.waitForElement(wrapper, CustomText);
});
// let client:any;
// test('Plugin should be correctly registered', async () => {
// 		 WithApolloProvider(client as any);
// });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXVEO0FBQ3ZELDZEQUE4QjtBQUM5QiwrQ0FBb0M7QUFDcEMsMERBQTBEO0FBQzFELDBEQUEwQjtBQUMxQixtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLDhCQUFDLG1CQUFJLDRCQUF5QixDQUFDO0FBRXhELElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDdEQsQ0FBQyxDQUFDLENBQUM7QUFHSCxJQUFJLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFOUMsTUFBTSxPQUFPLEdBQUcsY0FBSyxDQUNwQiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sQ0FBQztRQUM3Qiw4QkFBQyxVQUFVLE9BQUcsQ0FDRCxDQUNkLENBQUM7SUFFRixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFFbEMsTUFBTSxxQ0FBYyxDQUFDLE9BQU8sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMzQyxDQUFDLENBQUMsQ0FBQztBQUdILGtCQUFrQjtBQUNsQiw4REFBOEQ7QUFFOUQsd0NBQXdDO0FBQ3hDLE1BQU07QUFNTix5Q0FBeUM7QUFDekMsK0NBQStDO0FBRS9DLCtCQUErQjtBQUMvQix1Q0FBdUM7QUFDdkMsaUNBQWlDO0FBQ2pDLGtEQUFrRDtBQUNsRCw0RkFBNEY7QUFFNUYseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQiw4QkFBOEI7QUFFOUIsZUFBZTtBQUNmLHdGQUF3RjtBQUN4RixtRkFBbUY7QUFDbkYsOERBQThEO0FBRTlELE9BQU87QUFDUCxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9hcG9sbG8vcGx1Z2luLWFwb2xsby9zcmMvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlLCBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG4vLyBpbXBvcnQgV2l0aEFwb2xsb1Byb3ZpZGVyIGZyb20gJy4uL3dpdGhBcG9sbG9Qcm92aWRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbmNvbnN0IEN1c3RvbVRleHQgPSAoKSA9PiA8VGV4dD5FdmVyeXRoaW5nIGlzIG9rITwvVGV4dD47XG5cbnRlc3QoJ1BsdWdpbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZCcsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXG5cdGV4cGVjdChCQi5QbHVnaW5zLmhhcygncGx1Z2luLWFwb2xsbycpKS50b0JlVHJ1dGh5KCk7XG59KTtcblxuIFxudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRcblx0Y29uc3Qgd3JhcHBlciA9IG1vdW50KFxuXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHQ8Q3VzdG9tVGV4dCAvPlxuXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdCk7XG5cblx0ZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuXG5cdGF3YWl0IHdhaXRGb3JFbGVtZW50KHdyYXBwZXIsIEN1c3RvbVRleHQpO1xufSk7XG5cblxuLy8gbGV0IGNsaWVudDphbnk7XG4vLyB0ZXN0KCdQbHVnaW4gc2hvdWxkIGJlIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHQgXG4vLyBcdFx0IFdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQgYXMgYW55KTtcbi8vIH0pO1xuXG5cblxuXG5cbi8vIGRlc2NyaWJlKCdBcG9sbG8gUGx1Z2luIHRlc3QnLCAoKSA9PiB7XG4vLyBcdGl0KCdUZXN0IHdpdGggQXBvbGxvIENvbmZpZycsIGFzeW5jICgpID0+IHtcblx0XHRcbi8vIFx0XHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuLy8gXHRcdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcbi8vIFx0XHQvLyBBcG9sbG9QbHVnaW4uZ2V0Q2xpZW50KCk7XG4vLyBcdFx0Y29uc3QgUGx1Z2lucyA9IGF3YWl0IEJCLlBsdWdpbnMuaGFzKFBsdWdpbik7XG4vLyBcdFx0YXdhaXQgQkIuQ29uZmlncy5zZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJywgeyB1cmk6ICdodHRwOi8vZ3JhcGhxbCcgfSk7XG5cbi8vIFx0XHQvLyByZW5kZXJlci5jcmVhdGUgKFxuLy8gXHRcdC8vIFx0PEJCLkNvbXBvbmVudHMuUXVlcnk+KVxuLy8gXHRcdC8vIDwvQkIuQ29tcG9uZW50cy5RdWVyeT5cblxuLy8gXHRcdEJCLmJvb3QoKTtcbi8vIFx0XHRjb25zb2xlLmxvZygnUGx1Z2lucz09PT0+JywgQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJykpO1xuLy8gXHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuLy8gXHRcdGV4cGVjdChodHRwTGlua09wdGlvbnMpLnRvRXF1YWwoe3VyaTogJ2h0dHA6Ly9ncmFwaHFsJ30pO1xuXHRcdFxuLy8gXHR9KTtcbi8vIH0pO1xuXG4iXSwidmVyc2lvbiI6M30=