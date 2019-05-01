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
//working and testing
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    // import { waitForElement } from 'enzyme-async-helpers';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELCtDQUErQztBQUMvQyw4Q0FBOEM7QUFHOUMsMkRBQTJEO0FBRzNELHFCQUFxQjtBQUNyQixJQUFJLENBQUMsNkJBQTZCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDOUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUMxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO0lBRW5DLHlEQUF5RDtJQUN4RCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILHFCQUFxQjtBQUNyQixJQUFJLENBQUMsa0VBQWtFLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFbkYsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO0lBQ2xDLElBQUksT0FBTyxDQUFDO0lBRVosSUFBSTtRQUNILE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0tBRWhCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUNELE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDdEQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFFN0MsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFDLFFBQVEsRUFBQyxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUN0RCxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRW5ELHlCQUF5QjtBQUUxQixDQUFDLENBQUMsQ0FBQztBQUVILG9CQUFvQjtBQUNwQiwrQkFBK0I7QUFFL0IsS0FBSztBQUNMLElBQUk7QUFFSix3QkFBd0I7QUFFeEIsSUFBSSxNQUFVLENBQUM7QUFDZixJQUFJLENBQUMsdUNBQXVDLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFdEQsNEJBQWtCLENBQUMsTUFBYSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCwrQkFBK0I7QUFFL0IsMEJBQTBCO0FBQzFCLCtGQUErRjtBQUUvRixRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBQ25DLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUV4QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO1FBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7UUFDbEMsNEJBQTRCO1FBQzVCLCtDQUErQztRQUMvQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUV2RixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDbkYsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5RSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLGdCQUFnQixFQUFDLENBQUMsQ0FBQztJQUUxRCxDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDIiwibmFtZXMiOltdLCJzb3VyY2VzIjpbIi9ob21lL211enphbWlsL0RvY3VtZW50cy9hcG9sbG8vcGx1Z2luLWFwb2xsby9zcmMvX190ZXN0c19fL2luZGV4LnRlc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJsdWVCYXNlLCBcblx0Ly8gQmx1ZUJhc2VBcHAgXG59IGZyb20gJ0BibHVlYmFzZS9jb3JlJztcbmltcG9ydCBQbHVnaW4gZnJvbSAnLi4vaW5kZXgnO1xuLy8gaW1wb3J0IHsgVGV4dCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5pbXBvcnQgV2l0aEFwb2xsb1Byb3ZpZGVyIGZyb20gJy4uL3dpdGhBcG9sbG9Qcm92aWRlcic7XG4vLyBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG4vLyBpbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuLy8gaW1wb3J0IHsgc2FtcGxlIH0gZnJvbSAnLi4vX19tb2Nrc19fL2luZGV4J1xuXG5cbi8vIGNvbnN0IEN1c3RvbVRleHQgPSAoKSA9PiA8VGV4dD5FdmVyeXRoaW5nIGlzIG9rITwvVGV4dD47XG5cblxuLy93b3JraW5nIGFuZCB0ZXN0aW5nXG50ZXN0KCdQbHVnaW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblxuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cdGV4cGVjdChCQi5QbHVnaW5zLmhhcygncGx1Z2luLWFwb2xsbycpKS50b0JlVHJ1dGh5KCk7XG59KTtcblxuLy93b3JraW5nIGFuZCB0ZXN0aW5nXG50ZXN0KCdQbHVnaW4gc2hvdWxkIHRocm93IGVycm9yIGlmIGh0dHBMaW5rT3B0aW9ucyBjb25maWcgaXMgbm90IGdpdmVuJywgYXN5bmMgKCkgPT4ge1xuXG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdFxuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cdGxldCBtZXNzYWdlO1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgQkIuYm9vdCgpO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdH1cblx0Y29uc3Qge0h0dHBMaW5rfSA6YW55ID0gamVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cdEJCLkZpbHRlcnMucnVuKFwiYmx1ZWJhc2UuYm9vdC5lbmRcIixIdHRwTGluayk7XG5cblx0ZXhwZWN0KG1lc3NhZ2UpLnRvQmUoJ0hUVFAgTGluayBVUkkgbm90IHByb3ZpZGVkIHRvIEFwb2xsbycpO1xufSk7XG5cbnRlc3QoJ1BsdWdpbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZCcsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0Y29uc3Qge0h0dHBMaW5rfSA6YW55ID0gamVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cdGF3YWl0IEJCLkZpbHRlcnMucnVuKFwiYmx1ZWJhc2UuYm9vdC5lbmRcIixIdHRwTGluayk7XG5cblx0Ly8gZXhwZWN0KCkudG9CZVRydXRoeSgpO1xuXG59KTtcblxuLy8gY2xhc3MgTW9ja0NsYXNzIHtcbi8vIFx0Y29uc3RydWN0b3IocHVibGljIGlucHV0KSB7XG5cbi8vIFx0fVxuLy8gfVxuXG4vLyBpbnN0YW5jZW9mLmlucHV0ID09PSBcblxubGV0IGNsaWVudDphbnk7XG50ZXN0KCdQbHVnaW4gc2hvdWxkIGJlIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0IFdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQgYXMgYW55KTtcbn0pO1xuXG4vLyBtaXNlKHJlc29sdmUgPT4gcmVzb2x2ZSgpKSk7XG5cbi8vIFx0Y29uc3Qgd3JhcHBlciA9IG1vdW50KFxuLy8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0gY29uZmlncz17eyAncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJzogeyB1cmk6ICd3d3cuZ1xuXG5kZXNjcmliZSgnQXBvbGxvIFBsdWdpbiB0ZXN0JywgKCkgPT4ge1xuXHRpdCgnVGVzdCB3aXRoIEFwb2xsbyBDb25maWcnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XHQvLyBBcG9sbG9QbHVnaW4uZ2V0Q2xpZW50KCk7XG5cdFx0Ly9jb25zdCBQbHVnaW5zID0gYXdhaXQgQkIuUGx1Z2lucy5oYXMoUGx1Z2luKTtcblx0XHRhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnLCB7IHVyaTogJ2h0dHA6Ly9ncmFwaHFsJyB9KTtcblxuXHRcdEJCLmJvb3QoKTtcblx0XHRjb25zb2xlLmxvZygnUGx1Z2lucz09PT0+JywgQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJykpO1xuXHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuXHRcdGV4cGVjdChodHRwTGlua09wdGlvbnMpLnRvRXF1YWwoe3VyaTogJ2h0dHA6Ly9ncmFwaHFsJ30pO1xuXG5cdH0pO1xufSk7XG5cbiJdLCJ2ZXJzaW9uIjozfQ==