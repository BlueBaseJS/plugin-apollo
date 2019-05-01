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
    await enzyme_async_helpers_1.waitForElement(wrapper, CustomText);
    expect(wrapper).toMatchSnapshot();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXVEO0FBQ3ZELDZEQUE4QjtBQUM5QiwrQ0FBb0M7QUFDcEMsMERBQTBEO0FBQzFELDBEQUEwQjtBQUMxQixtQ0FBK0I7QUFDL0IsK0RBQXNEO0FBRXRELE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLDhCQUFDLG1CQUFJLDRCQUF5QixDQUFDO0FBRXhELElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDdEQsQ0FBQyxDQUFDLENBQUM7QUFHSCxJQUFJLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFOUMsTUFBTSxPQUFPLEdBQUcsY0FBSyxDQUNwQiw4QkFBQyxrQkFBVyxJQUFDLE9BQU8sRUFBRSxDQUFDLGVBQU0sQ0FBQztRQUM3Qiw4QkFBQyxVQUFVLE9BQUcsQ0FDRCxDQUNkLENBQUM7SUFHRixNQUFNLHFDQUFjLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUNuQyxDQUFDLENBQUMsQ0FBQztBQUdILGtCQUFrQjtBQUNsQiw4REFBOEQ7QUFFOUQsd0NBQXdDO0FBQ3hDLE1BQU07QUFNTix5Q0FBeUM7QUFDekMsK0NBQStDO0FBRS9DLCtCQUErQjtBQUMvQix1Q0FBdUM7QUFDdkMsaUNBQWlDO0FBQ2pDLGtEQUFrRDtBQUNsRCw0RkFBNEY7QUFFNUYseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQiw4QkFBOEI7QUFFOUIsZUFBZTtBQUNmLHdGQUF3RjtBQUN4RixtRkFBbUY7QUFDbkYsOERBQThEO0FBRTlELE9BQU87QUFDUCxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9hcG9sbG8vcGx1Z2luLWFwb2xsby9zcmMvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlLCBCbHVlQmFzZUFwcCB9IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vaW5kZXgnO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG4vLyBpbXBvcnQgV2l0aEFwb2xsb1Byb3ZpZGVyIGZyb20gJy4uL3dpdGhBcG9sbG9Qcm92aWRlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cbmNvbnN0IEN1c3RvbVRleHQgPSAoKSA9PiA8VGV4dD5FdmVyeXRoaW5nIGlzIG9rITwvVGV4dD47XG5cbnRlc3QoJ1BsdWdpbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZCcsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXG5cdGV4cGVjdChCQi5QbHVnaW5zLmhhcygncGx1Z2luLWFwb2xsbycpKS50b0JlVHJ1dGh5KCk7XG59KTtcblxuIFxudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRcblx0Y29uc3Qgd3JhcHBlciA9IG1vdW50KFxuXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG5cdFx0XHQ8Q3VzdG9tVGV4dCAvPlxuXHRcdDwvQmx1ZUJhc2VBcHA+XG5cdCk7XG5cblx0XG5cdGF3YWl0IHdhaXRGb3JFbGVtZW50KHdyYXBwZXIsIEN1c3RvbVRleHQpO1xuXHRleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KCk7XG59KTtcblxuXG4vLyBsZXQgY2xpZW50OmFueTtcbi8vIHRlc3QoJ1BsdWdpbiBzaG91bGQgYmUgY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdCBcbi8vIFx0XHQgV2l0aEFwb2xsb1Byb3ZpZGVyKGNsaWVudCBhcyBhbnkpO1xuLy8gfSk7XG5cblxuXG5cblxuLy8gZGVzY3JpYmUoJ0Fwb2xsbyBQbHVnaW4gdGVzdCcsICgpID0+IHtcbi8vIFx0aXQoJ1Rlc3Qgd2l0aCBBcG9sbG8gQ29uZmlnJywgYXN5bmMgKCkgPT4ge1xuXHRcdFxuLy8gXHRcdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG4vLyBcdFx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuLy8gXHRcdC8vIEFwb2xsb1BsdWdpbi5nZXRDbGllbnQoKTtcbi8vIFx0XHRjb25zdCBQbHVnaW5zID0gYXdhaXQgQkIuUGx1Z2lucy5oYXMoUGx1Z2luKTtcbi8vIFx0XHRhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnLCB7IHVyaTogJ2h0dHA6Ly9ncmFwaHFsJyB9KTtcblxuLy8gXHRcdC8vIHJlbmRlcmVyLmNyZWF0ZSAoXG4vLyBcdFx0Ly8gXHQ8QkIuQ29tcG9uZW50cy5RdWVyeT4pXG4vLyBcdFx0Ly8gPC9CQi5Db21wb25lbnRzLlF1ZXJ5PlxuXG4vLyBcdFx0QkIuYm9vdCgpO1xuLy8gXHRcdGNvbnNvbGUubG9nKCdQbHVnaW5zPT09PT4nLCBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKSk7XG4vLyBcdFx0Y29uc3QgaHR0cExpbmtPcHRpb25zID0gQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJyk7XG4vLyBcdFx0ZXhwZWN0KGh0dHBMaW5rT3B0aW9ucykudG9FcXVhbCh7dXJpOiAnaHR0cDovL2dyYXBocWwnfSk7XG5cdFx0XG4vLyBcdH0pO1xuLy8gfSk7XG5cbiJdLCJ2ZXJzaW9uIjozfQ==