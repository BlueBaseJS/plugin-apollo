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
    let message;
    try {
        await BB.boot();
    }
    catch (error) {
        message = error.message;
    }
    const { HttpLink } = jest.mock('apollo-link-http');
    BB.Filters.run("bluebase.boot.end", HttpLink);
    expect(message).toBe('HTTP Link URI not provided t Apollo');
});
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    const { HttpLink } = jest.mock('apollo-link-http');
    await BB.Filters.run("bluebase.boot.end", HttpLink);
    // expect().toBeTruthy();
});
// class MockClass {
// 	constructor(public input) {
// 	}
// }
// instanceof.input === 
let client;
test('Plugin should be correctly registered', async () => {
    withApolloProvider_1.default(client);
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELCtDQUErQztBQUMvQyw4Q0FBOEM7QUFHOUMsMkRBQTJEO0FBRTNELElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbkMseURBQXlEO0lBQ3hELE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLGtFQUFrRSxFQUFFLEtBQUssSUFBSSxFQUFFO0lBRW5GLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFFMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUNsQyxJQUFJLE9BQU8sQ0FBQztJQUVaLElBQUk7UUFDSCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUVoQjtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2YsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7S0FDeEI7SUFDRCxNQUFNLEVBQUMsUUFBUSxFQUFDLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQ3RELEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRTdDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUMsQ0FBQztBQUVILElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxRQUFRLENBQUMsQ0FBQztJQUVuRCx5QkFBeUI7QUFFMUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxvQkFBb0I7QUFDcEIsK0JBQStCO0FBRS9CLEtBQUs7QUFDTCxJQUFJO0FBRUosd0JBQXdCO0FBRXhCLElBQUksTUFBVSxDQUFDO0FBQ2YsSUFBSSxDQUFDLHVDQUF1QyxFQUFFLEtBQUssSUFBSSxFQUFFO0lBRXRELDRCQUFrQixDQUFDLE1BQWEsQ0FBQyxDQUFDO0FBQ3JDLENBQUMsQ0FBQyxDQUFDO0FBRUgsK0JBQStCO0FBRS9CLDBCQUEwQjtBQUMxQiwrRkFBK0Y7QUFFL0YsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtJQUNuQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFeEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztRQUMxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO1FBQ2xDLDRCQUE0QjtRQUM1QiwrQ0FBK0M7UUFDL0MsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFdkYsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7SUFFMUQsQ0FBQyxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYXBvbGxvL3BsdWdpbi1hcG9sbG8vc3JjL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZSwgXG5cdC8vIEJsdWVCYXNlQXBwIFxufSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uL2luZGV4Jztcbi8vIGltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IFdpdGhBcG9sbG9Qcm92aWRlciBmcm9tICcuLi93aXRoQXBvbGxvUHJvdmlkZXInO1xuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuLy8gaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbi8vIGltcG9ydCB7IHNhbXBsZSB9IGZyb20gJy4uL19fbW9ja3NfXy9pbmRleCdcblxuXG4vLyBjb25zdCBDdXN0b21UZXh0ID0gKCkgPT4gPFRleHQ+RXZlcnl0aGluZyBpcyBvayE8L1RleHQ+O1xuXG50ZXN0KCdQbHVnaW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblxuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cdGV4cGVjdChCQi5QbHVnaW5zLmhhcygncGx1Z2luLWFwb2xsbycpKS50b0JlVHJ1dGh5KCk7XG59KTtcblxudGVzdCgnUGx1Z2luIHNob3VsZCB0aHJvdyBlcnJvciBpZiBodHRwTGlua09wdGlvbnMgY29uZmlnIGlzIG5vdCBnaXZlbicsIGFzeW5jICgpID0+IHtcblxuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXHRsZXQgbWVzc2FnZTtcblxuXHR0cnkge1xuXHRcdGF3YWl0IEJCLmJvb3QoKTtcblxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXHR9XG5cdGNvbnN0IHtIdHRwTGlua30gOmFueSA9IGplc3QubW9jaygnYXBvbGxvLWxpbmstaHR0cCcpO1xuXHRCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIsSHR0cExpbmspO1xuXG5cdGV4cGVjdChtZXNzYWdlKS50b0JlKCdIVFRQIExpbmsgVVJJIG5vdCBwcm92aWRlZCB0IEFwb2xsbycpO1xufSk7XG5cbnRlc3QoJ1BsdWdpbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZCcsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0Y29uc3Qge0h0dHBMaW5rfSA6YW55ID0gamVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cdGF3YWl0IEJCLkZpbHRlcnMucnVuKFwiYmx1ZWJhc2UuYm9vdC5lbmRcIixIdHRwTGluayk7XG5cblx0Ly8gZXhwZWN0KCkudG9CZVRydXRoeSgpO1xuXG59KTtcblxuLy8gY2xhc3MgTW9ja0NsYXNzIHtcbi8vIFx0Y29uc3RydWN0b3IocHVibGljIGlucHV0KSB7XG5cbi8vIFx0fVxuLy8gfVxuXG4vLyBpbnN0YW5jZW9mLmlucHV0ID09PSBcblxubGV0IGNsaWVudDphbnk7XG50ZXN0KCdQbHVnaW4gc2hvdWxkIGJlIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0IFdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQgYXMgYW55KTtcbn0pO1xuXG4vLyBtaXNlKHJlc29sdmUgPT4gcmVzb2x2ZSgpKSk7XG5cbi8vIFx0Y29uc3Qgd3JhcHBlciA9IG1vdW50KFxuLy8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0gY29uZmlncz17eyAncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJzogeyB1cmk6ICd3d3cuZ1xuXG5kZXNjcmliZSgnQXBvbGxvIFBsdWdpbiB0ZXN0JywgKCkgPT4ge1xuXHRpdCgnVGVzdCB3aXRoIEFwb2xsbyBDb25maWcnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XHQvLyBBcG9sbG9QbHVnaW4uZ2V0Q2xpZW50KCk7XG5cdFx0Ly9jb25zdCBQbHVnaW5zID0gYXdhaXQgQkIuUGx1Z2lucy5oYXMoUGx1Z2luKTtcblx0XHRhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnLCB7IHVyaTogJ2h0dHA6Ly9ncmFwaHFsJyB9KTtcblxuXHRcdEJCLmJvb3QoKTtcblx0XHRjb25zb2xlLmxvZygnUGx1Z2lucz09PT0+JywgQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJykpO1xuXHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuXHRcdGV4cGVjdChodHRwTGlua09wdGlvbnMpLnRvRXF1YWwoe3VyaTogJ2h0dHA6Ly9ncmFwaHFsJ30pO1xuXG5cdH0pO1xufSk7XG5cbiJdLCJ2ZXJzaW9uIjozfQ==