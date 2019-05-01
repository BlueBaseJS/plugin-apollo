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
    console.log("mocked httplink ", HttpLink);
    await BB.Filters.run("bluebase.boot.end", { HttpLink });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELGdEQUFnRDtBQUNoRCw4Q0FBOEM7QUFDOUMseURBQXlEO0FBSXpELDJEQUEyRDtBQUczRCxxQkFBcUI7QUFDcEIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ2hELE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVqQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILHFCQUFxQjtBQUNyQixJQUFJLENBQUMsa0VBQWtFLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFbkYsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO0lBQ2xDLElBQUksT0FBTyxDQUFDO0lBRVosSUFBSTtRQUNILE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0tBRWhCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUVELE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFFOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBRTlELENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLElBQUksRUFBRTtJQUMxQixNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBQyxRQUFRLENBQUMsQ0FBQTtJQUN4QyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUVyRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztBQUVyQyxDQUFDLENBQUMsQ0FBQztBQUdILElBQUksTUFBVSxDQUFDO0FBQ2YsSUFBSSxDQUFDLCtCQUErQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBRTlDLDRCQUFrQixDQUFDLE1BQWEsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBR0gsb0JBQW9CO0FBQ3BCLCtCQUErQjtBQUUvQixLQUFLO0FBQ0wsSUFBSTtBQUVKLHdCQUF3QjtBQUV4QiwrQkFBK0I7QUFFL0IsMEJBQTBCO0FBQzFCLCtGQUErRjtBQUUvRixRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBRW5DLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUV4QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO1FBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7UUFDbEMsNEJBQTRCO1FBQzVCLCtDQUErQztRQUMvQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUV2RixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDbkYsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5RSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLGdCQUFnQixFQUFDLENBQUMsQ0FBQztJQUUxRCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9hcG9sbG8vcGx1Z2luLWFwb2xsby9zcmMvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlLCBcblx0Ly8gQmx1ZUJhc2VBcHAgXG59IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vaW5kZXgnO1xuLy8gaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgV2l0aEFwb2xsb1Byb3ZpZGVyIGZyb20gJy4uL3dpdGhBcG9sbG9Qcm92aWRlcic7XG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG4vLyAgaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbi8vIGltcG9ydCB7IHNhbXBsZSB9IGZyb20gJy4uL19fbW9ja3NfXy9pbmRleCdcbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuXG5cblxuLy8gY29uc3QgQ3VzdG9tVGV4dCA9ICgpID0+IDxUZXh0PkV2ZXJ5dGhpbmcgaXMgb2shPC9UZXh0PjtcblxuXG4vL3dvcmtpbmcgYW5kIHRlc3Rpbmdcblx0dGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuY29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcbmF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblxuXHRleHBlY3QoQkIuUGx1Z2lucy5oYXMoJ3BsdWdpbi1hcG9sbG8nKSkudG9CZVRydXRoeSgpO1xufSk7XG5cbi8vd29ya2luZyBhbmQgdGVzdGluZ1xudGVzdCgnUGx1Z2luIHNob3VsZCB0aHJvdyBlcnJvciBpZiBodHRwTGlua09wdGlvbnMgY29uZmlnIGlzIG5vdCBnaXZlbicsIGFzeW5jICgpID0+IHtcblxuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXHRsZXQgbWVzc2FnZTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IEJCLmJvb3QoKTtcblxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXHR9XG5cblx0Y29uc3Qge0h0dHBMaW5rfSA6YW55ID0gamVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cdFx0QkIuRmlsdGVycy5ydW4oXCJibHVlYmFzZS5ib290LmVuZFwiLEh0dHBMaW5rKTtcblxuXHRleHBlY3QobWVzc2FnZSkudG9CZSgnSFRUUCBMaW5rIFVSSSBub3QgcHJvdmlkZWQgdG8gQXBvbGxvJyk7XG5cbn0pO1xuXG5cbnRlc3QoJ01vY2tpbmcnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGNvbnN0IHtIdHRwTGlua306YW55ICA9IGplc3QubW9jaygnYXBvbGxvLWxpbmstaHR0cCcpO1xuXHRjb25zb2xlLmxvZyhcIm1vY2tlZCBodHRwbGluayBcIixIdHRwTGluaylcblx0YXdhaXQgQkIuRmlsdGVycy5ydW4oXCJibHVlYmFzZS5ib290LmVuZFwiLHtIdHRwTGlua30pO1xuXG5cdGV4cGVjdChIdHRwTGluaykudG9IYXZlQmVlbkNhbGxlZCgpO1xuXG59KTtcblxuXG5sZXQgY2xpZW50OmFueTtcbnRlc3QoJ1BsdWdpbiBhcG9sbG9Qcm92aWRlciB3b3JraW5nJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0IFdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQgYXMgYW55KTtcbn0pO1xuXG5cbi8vIGNsYXNzIE1vY2tDbGFzcyB7XG4vLyBcdGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dCkge1xuXG4vLyBcdH1cbi8vIH1cblxuLy8gaW5zdGFuY2VvZi5pbnB1dCA9PT0gXG5cbi8vIG1pc2UocmVzb2x2ZSA9PiByZXNvbHZlKCkpKTtcblxuLy8gXHRjb25zdCB3cmFwcGVyID0gbW91bnQoXG4vLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfSBjb25maWdzPXt7ICdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnOiB7IHVyaTogJ3d3dy5nXG5cbmRlc2NyaWJlKCdBcG9sbG8gUGx1Z2luIHRlc3QnLCAoKSA9PiB7XG5cblx0aXQoJ1Rlc3Qgd2l0aCBBcG9sbG8gQ29uZmlnJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cdFx0Ly8gQXBvbGxvUGx1Z2luLmdldENsaWVudCgpO1xuXHRcdC8vY29uc3QgUGx1Z2lucyA9IGF3YWl0IEJCLlBsdWdpbnMuaGFzKFBsdWdpbik7XG5cdFx0YXdhaXQgQkIuQ29uZmlncy5zZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJywgeyB1cmk6ICdodHRwOi8vZ3JhcGhxbCcgfSk7XG5cblx0XHRCQi5ib290KCk7XG5cdFx0Y29uc29sZS5sb2coJ1BsdWdpbnM9PT09PicsIEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpKTtcblx0XHRjb25zdCBodHRwTGlua09wdGlvbnMgPSBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKTtcblx0XHRleHBlY3QoaHR0cExpbmtPcHRpb25zKS50b0VxdWFsKHt1cmk6ICdodHRwOi8vZ3JhcGhxbCd9KTtcblxuXHR9KTtcbn0pO1xuXG4iXSwidmVyc2lvbiI6M30=