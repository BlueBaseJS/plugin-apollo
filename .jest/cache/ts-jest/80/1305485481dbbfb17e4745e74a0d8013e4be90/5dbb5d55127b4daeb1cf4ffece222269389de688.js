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
    expect(HttpLink.uri).toBeCalled();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsMERBQTBEO0FBQzFELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELCtDQUErQztBQUMvQyw4Q0FBOEM7QUFHOUMsMkRBQTJEO0FBRTNELElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbkMseURBQXlEO0lBQ3hELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGtFQUFrRSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBRW5GLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUNsQyxjQUFjO0lBRWQsUUFBUTtJQUNSLHNCQUFzQjtJQUV0QixvQkFBb0I7SUFDcEIsK0JBQStCO0lBQy9CLElBQUk7SUFDSixNQUFNLEVBQUMsUUFBUSxFQUFDLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RELEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRzlDLGdFQUFnRTtBQUNoRSxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUVuRCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRW5DLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQztRQUN6QixLQUFLLEVBQUUsbUJBQW1CO1FBQzFCLEtBQUssRUFBRSxHQUFHLEVBQUU7UUFFWixDQUFDO0tBQ0QsQ0FBQyxDQUFDO0FBRUosQ0FBQyxDQUFDLENBQUM7QUFRSCxvQkFBb0I7QUFDcEIsK0JBQStCO0FBRS9CLEtBQUs7QUFDTCxJQUFJO0FBRUosd0JBQXdCO0FBSXhCLHFCQUFxQjtBQUNyQixpRUFBaUU7QUFFakUsMkNBQTJDO0FBQzNDLFNBQVM7QUFFVCwrQkFBK0I7QUFFL0IsMEJBQTBCO0FBQzFCLCtGQUErRjtBQUkvRix5Q0FBeUM7QUFDekMsK0NBQStDO0FBRS9DLCtCQUErQjtBQUMvQix1Q0FBdUM7QUFDdkMsaUNBQWlDO0FBQ2pDLGtEQUFrRDtBQUNsRCw0RkFBNEY7QUFFNUYseUJBQXlCO0FBQ3pCLCtCQUErQjtBQUMvQiw4QkFBOEI7QUFFOUIsZUFBZTtBQUNmLHdGQUF3RjtBQUN4RixtRkFBbUY7QUFDbkYsOERBQThEO0FBRTlELE9BQU87QUFDUCxNQUFNIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9hcG9sbG8vcGx1Z2luLWFwb2xsby9zcmMvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlLCBcblx0Ly8gQmx1ZUJhc2VBcHAgXG59IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vaW5kZXgnO1xuLy8gaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG4vLyBpbXBvcnQgV2l0aEFwb2xsb1Byb3ZpZGVyIGZyb20gJy4uL3dpdGhBcG9sbG9Qcm92aWRlcic7XG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG4vLyBpbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuLy8gaW1wb3J0IHsgc2FtcGxlIH0gZnJvbSAnLi4vX19tb2Nrc19fL2luZGV4J1xuXG5cbi8vIGNvbnN0IEN1c3RvbVRleHQgPSAoKSA9PiA8VGV4dD5FdmVyeXRoaW5nIGlzIG9rITwvVGV4dD47XG5cbnRlc3QoJ1BsdWdpbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZCcsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXG4vLyBpbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblx0ZXhwZWN0KEJCLlBsdWdpbnMuaGFzKCdwbHVnaW4tYXBvbGxvJykpLnRvQmVUcnV0aHkoKTtcbn0pO1xuXG50ZXN0KCdQbHVnaW4gc2hvdWxkIHRocm93IGVycm9yIGlmIGh0dHBMaW5rT3B0aW9ucyBjb25maWcgaXMgbm90IGdpdmVuJywgYXN5bmMgKCkgPT4ge1xuXG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdFxuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cdC8vbGV0IG1lc3NhZ2U7XG5cblx0Ly8gdHJ5IHtcblx0Ly8gXHQvL2F3YWl0IEJCLmJvb3QoKTtcblxuXHQvLyB9IGNhdGNoIChlcnJvcikge1xuXHQvLyBcdC8vL21lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXHQvLyB9XG5cdGNvbnN0IHtIdHRwTGlua30gOmFueSA9IGplc3QubW9jaygnYXBvbGxvLWxpbmstaHR0cCcpO1xuXHRCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIsSHR0cExpbmspO1xuXG5cbi8vXHRleHBlY3QobWVzc2FnZSkudG9CZSgnSFRUUCBMaW5rIFVSSSBub3QgcHJvdmlkZWQgdG8gQXBvbGxvJyk7XG59KTtcblxudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRjb25zdCB7SHR0cExpbmt9IDphbnkgPSBqZXN0Lm1vY2soJ2Fwb2xsby1saW5rLWh0dHAnKTtcblx0YXdhaXQgQkIuRmlsdGVycy5ydW4oXCJibHVlYmFzZS5ib290LmVuZFwiLEh0dHBMaW5rKTtcblxuXHRleHBlY3QoSHR0cExpbmsudXJpKS50b0JlQ2FsbGVkKCk7XG5cbn0pO1xuXG50ZXN0KCdQbHVnaW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGF3YWl0IEJCLkZpbHRlcnMucmVnaXN0ZXIoe1xuXHRcdGV2ZW50OiAnYmx1ZWJhc2UtYm9vdC1lbmQnLFxuXHRcdHZhbHVlOiAoKSA9PiB7XG5cblx0XHR9XG5cdH0pO1xuXG59KTtcblxuXG5cblxuXG5cblxuLy8gY2xhc3MgTW9ja0NsYXNzIHtcbi8vIFx0Y29uc3RydWN0b3IocHVibGljIGlucHV0KSB7XG5cbi8vIFx0fVxuLy8gfVxuXG4vLyBpbnN0YW5jZW9mLmlucHV0ID09PSBcblxuXG5cbi8vIC8vIGxldCBjbGllbnQ6YW55O1xuLy8gLy8gdGVzdCgnUGx1Z2luIHNob3VsZCBiZSBjb3JyZWN0bHkgcmVnaXN0ZXJlZCcsIGFzeW5jICgpID0+IHtcblxuLy8gLy8gXHRcdCBXaXRoQXBvbGxvUHJvdmlkZXIoY2xpZW50IGFzIGFueSk7XG4vLyAvLyB9KTtcblxuLy8gbWlzZShyZXNvbHZlID0+IHJlc29sdmUoKSkpO1xuXG4vLyBcdGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbi8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19IGNvbmZpZ3M9e3sgJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucyc6IHsgdXJpOiAnd3d3LmdcblxuXG5cbi8vIGRlc2NyaWJlKCdBcG9sbG8gUGx1Z2luIHRlc3QnLCAoKSA9PiB7XG4vLyBcdGl0KCdUZXN0IHdpdGggQXBvbGxvIENvbmZpZycsIGFzeW5jICgpID0+IHtcblxuLy8gXHRcdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG4vLyBcdFx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuLy8gXHRcdC8vIEFwb2xsb1BsdWdpbi5nZXRDbGllbnQoKTtcbi8vIFx0XHRjb25zdCBQbHVnaW5zID0gYXdhaXQgQkIuUGx1Z2lucy5oYXMoUGx1Z2luKTtcbi8vIFx0XHRhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnLCB7IHVyaTogJ2h0dHA6Ly9ncmFwaHFsJyB9KTtcblxuLy8gXHRcdC8vIHJlbmRlcmVyLmNyZWF0ZSAoXG4vLyBcdFx0Ly8gXHQ8QkIuQ29tcG9uZW50cy5RdWVyeT4pXG4vLyBcdFx0Ly8gPC9CQi5Db21wb25lbnRzLlF1ZXJ5PlxuXG4vLyBcdFx0QkIuYm9vdCgpO1xuLy8gXHRcdGNvbnNvbGUubG9nKCdQbHVnaW5zPT09PT4nLCBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKSk7XG4vLyBcdFx0Y29uc3QgaHR0cExpbmtPcHRpb25zID0gQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJyk7XG4vLyBcdFx0ZXhwZWN0KGh0dHBMaW5rT3B0aW9ucykudG9FcXVhbCh7dXJpOiAnaHR0cDovL2dyYXBocWwnfSk7XG5cbi8vIFx0fSk7XG4vLyB9KTtcblxuIl0sInZlcnNpb24iOjN9