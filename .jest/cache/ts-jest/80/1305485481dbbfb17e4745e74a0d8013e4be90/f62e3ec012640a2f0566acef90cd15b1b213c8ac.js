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
// import { sample } from '../__mocks__/index'
// import { waitForElement } from 'enzyme-async-helpers';
// const CustomText = () => <Text>Everything is ok!</Text>;
//  import {HttpLink} from 'apollo-link-http';
//working and testing
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    // console.log('imported{}===>',{HttpLink})
    // console.log('imported===>',HttpLink)
    expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
});
let client;
test('Plugin apolloProvider working', async () => {
    withApolloProvider_1.default(client);
});
//working httplink options
test('Test with Apollo Config', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    await BB.Configs.setValue('plugins.apollo.httpLinkOptions', { uri: 'http://graphql' });
    BB.boot();
    console.log('Plugins====>', BB.Configs.getValue('plugins.apollo.httpLinkOptions'));
    const httpLinkOptions = BB.Configs.getValue('plugins.apollo.httpLinkOptions');
    expect(httpLinkOptions).toEqual({ uri: 'http://graphql' });
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
    expect(message).toBe('HTTP Link URI not provided to Apollo');
});
//mocking + apollo links   //not working
test('Mocking and apollo links', async () => {
    // const BB = new BlueBase();
    // const {HttpLink}  = jest.mock('apollo-link-http');
    // const MockHttpLink=new HttpLink("");
    // await BB.Filters.run("bluebase.boot.end",[MockHttpLink]);
    //  await BB.Filters.run("plugin.apollo.links",{HttpLink});
    //expect(HttpLink).toBeCalled();
});
// //checking apollo cache
// test('Mocking and apollo cache', async () => {
// 	const BB = new BlueBase();
// 	const {HttpLink}:any  = jest.mock('apollo-link-http');
// 	// console.log('original===>',HttpLink)
// 	//await BB.Filters.run("bluebase.boot.end",{HttpLink});
// 	  await BB.Filters.run("plugin.apollo.cache",{HttpLink});
// 	expect(HttpLink).toBeCalled();
// });
// class MockClass {
// 	constructor(public input) {
// 	}
// }
// instanceof.input === 
// mise(resolve => resolve()));
// 	const wrapper = mount(
// 		<BlueBaseApp plugins={[Plugin]} configs={{ 'plugins.apollo.httpLinkOptions': { uri: 'www.g
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELDhDQUE4QztBQUM5Qyx5REFBeUQ7QUFDekQsMkRBQTJEO0FBQzNELDhDQUE4QztBQUc5QyxxQkFBcUI7QUFDckIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBRTlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQywyQ0FBMkM7SUFDM0MsdUNBQXVDO0lBRXZDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBSSxNQUFVLENBQUM7QUFDZixJQUFJLENBQUMsK0JBQStCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFOUMsNEJBQWtCLENBQUMsTUFBYSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCwwQkFBMEI7QUFDekIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBRTFDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUNsQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUV2RixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7SUFDbkYsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLGdCQUFnQixFQUFDLENBQUMsQ0FBQztBQUUxRCxDQUFDLENBQUMsQ0FBQztBQUVKLHFCQUFxQjtBQUNyQixJQUFJLENBQUMsa0VBQWtFLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFbkYsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO0lBQ2xDLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSTtRQUNILE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0tBRWhCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUU5RCxDQUFDLENBQUMsQ0FBQztBQUVILHdDQUF3QztBQUN4QyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDM0MsNkJBQTZCO0lBQzdCLHFEQUFxRDtJQUVyRCx1Q0FBdUM7SUFFdkMsNERBQTREO0lBRTVELDJEQUEyRDtJQUUzRCxnQ0FBZ0M7QUFFakMsQ0FBQyxDQUFDLENBQUM7QUFnQkgsMEJBQTBCO0FBQzFCLGlEQUFpRDtBQUNqRCw4QkFBOEI7QUFDOUIsMERBQTBEO0FBRTFELDJDQUEyQztBQUUzQywyREFBMkQ7QUFFM0QsNkRBQTZEO0FBRzdELGtDQUFrQztBQUVsQyxNQUFNO0FBY04sb0JBQW9CO0FBQ3BCLCtCQUErQjtBQUUvQixLQUFLO0FBQ0wsSUFBSTtBQUVKLHdCQUF3QjtBQUV4QiwrQkFBK0I7QUFFL0IsMEJBQTBCO0FBQzFCLCtGQUErRiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYXBvbGxvL3BsdWdpbi1hcG9sbG8vc3JjL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZSwgXG5cdC8vIEJsdWVCYXNlQXBwIFxufSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uL2luZGV4Jztcbi8vIGltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IFdpdGhBcG9sbG9Qcm92aWRlciBmcm9tICcuLi93aXRoQXBvbGxvUHJvdmlkZXInO1xuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuLy8gaW1wb3J0IHsgc2FtcGxlIH0gZnJvbSAnLi4vX19tb2Nrc19fL2luZGV4J1xuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG4vLyBjb25zdCBDdXN0b21UZXh0ID0gKCkgPT4gPFRleHQ+RXZlcnl0aGluZyBpcyBvayE8L1RleHQ+O1xuLy8gIGltcG9ydCB7SHR0cExpbmt9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuXG5cbi8vd29ya2luZyBhbmQgdGVzdGluZ1xudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXHRcblx0Ly8gY29uc29sZS5sb2coJ2ltcG9ydGVke309PT0+Jyx7SHR0cExpbmt9KVxuXHQvLyBjb25zb2xlLmxvZygnaW1wb3J0ZWQ9PT0+JyxIdHRwTGluaylcblxuXHRleHBlY3QoQkIuUGx1Z2lucy5oYXMoJ3BsdWdpbi1hcG9sbG8nKSkudG9CZVRydXRoeSgpO1xufSk7XG5cbmxldCBjbGllbnQ6YW55O1xudGVzdCgnUGx1Z2luIGFwb2xsb1Byb3ZpZGVyIHdvcmtpbmcnLCBhc3luYyAoKSA9PiB7XG5cblx0XHQgV2l0aEFwb2xsb1Byb3ZpZGVyKGNsaWVudCBhcyBhbnkpO1xufSk7XG5cbi8vd29ya2luZyBodHRwbGluayBvcHRpb25zXG5cdHRlc3QoJ1Rlc3Qgd2l0aCBBcG9sbG8gQ29uZmlnJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cdFx0YXdhaXQgQkIuQ29uZmlncy5zZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJywgeyB1cmk6ICdodHRwOi8vZ3JhcGhxbCcgfSk7XG5cblx0XHRCQi5ib290KCk7XG5cdFx0Y29uc29sZS5sb2coJ1BsdWdpbnM9PT09PicsIEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpKTtcblx0XHRjb25zdCBodHRwTGlua09wdGlvbnMgPSBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKTtcblx0XHRleHBlY3QoaHR0cExpbmtPcHRpb25zKS50b0VxdWFsKHt1cmk6ICdodHRwOi8vZ3JhcGhxbCd9KTtcblxuXHR9KTtcblxuLy93b3JraW5nIGFuZCB0ZXN0aW5nXG50ZXN0KCdQbHVnaW4gc2hvdWxkIHRocm93IGVycm9yIGlmIGh0dHBMaW5rT3B0aW9ucyBjb25maWcgaXMgbm90IGdpdmVuJywgYXN5bmMgKCkgPT4ge1xuXG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdFxuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cdGxldCBtZXNzYWdlO1xuXHR0cnkge1xuXHRcdGF3YWl0IEJCLmJvb3QoKTtcblxuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlO1xuXHR9XG5cdGV4cGVjdChtZXNzYWdlKS50b0JlKCdIVFRQIExpbmsgVVJJIG5vdCBwcm92aWRlZCB0byBBcG9sbG8nKTtcblxufSk7XG5cbi8vbW9ja2luZyArIGFwb2xsbyBsaW5rcyAgIC8vbm90IHdvcmtpbmdcbnRlc3QoJ01vY2tpbmcgYW5kIGFwb2xsbyBsaW5rcycsIGFzeW5jICgpID0+IHtcblx0Ly8gY29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0Ly8gY29uc3Qge0h0dHBMaW5rfSAgPSBqZXN0Lm1vY2soJ2Fwb2xsby1saW5rLWh0dHAnKTtcblxuXHQvLyBjb25zdCBNb2NrSHR0cExpbms9bmV3IEh0dHBMaW5rKFwiXCIpO1xuXHRcblx0Ly8gYXdhaXQgQkIuRmlsdGVycy5ydW4oXCJibHVlYmFzZS5ib290LmVuZFwiLFtNb2NrSHR0cExpbmtdKTtcblx0XG5cdC8vICBhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcInBsdWdpbi5hcG9sbG8ubGlua3NcIix7SHR0cExpbmt9KTtcblxuXHQvL2V4cGVjdChIdHRwTGluaykudG9CZUNhbGxlZCgpO1xuXG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIC8vY2hlY2tpbmcgYXBvbGxvIGNhY2hlXG4vLyB0ZXN0KCdNb2NraW5nIGFuZCBhcG9sbG8gY2FjaGUnLCBhc3luYyAoKSA9PiB7XG4vLyBcdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG4vLyBcdGNvbnN0IHtIdHRwTGlua306YW55ICA9IGplc3QubW9jaygnYXBvbGxvLWxpbmstaHR0cCcpO1xuXG4vLyBcdC8vIGNvbnNvbGUubG9nKCdvcmlnaW5hbD09PT4nLEh0dHBMaW5rKVxuXHRcbi8vIFx0Ly9hd2FpdCBCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIse0h0dHBMaW5rfSk7XG5cbi8vIFx0ICBhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcInBsdWdpbi5hcG9sbG8uY2FjaGVcIix7SHR0cExpbmt9KTtcblxuXG4vLyBcdGV4cGVjdChIdHRwTGluaykudG9CZUNhbGxlZCgpO1xuXG4vLyB9KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY2xhc3MgTW9ja0NsYXNzIHtcbi8vIFx0Y29uc3RydWN0b3IocHVibGljIGlucHV0KSB7XG5cbi8vIFx0fVxuLy8gfVxuXG4vLyBpbnN0YW5jZW9mLmlucHV0ID09PSBcblxuLy8gbWlzZShyZXNvbHZlID0+IHJlc29sdmUoKSkpO1xuXG4vLyBcdGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbi8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19IGNvbmZpZ3M9e3sgJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucyc6IHsgdXJpOiAnd3d3LmdcblxuXG5cbiJdLCJ2ZXJzaW9uIjozfQ==