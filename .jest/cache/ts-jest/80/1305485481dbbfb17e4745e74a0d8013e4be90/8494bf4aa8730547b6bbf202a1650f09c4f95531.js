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
//   import { HttpLink } from 'apollo-link-http';
// import { sample } from '../__mocks__/index'
// import { waitForElement } from 'enzyme-async-helpers';
// const CustomText = () => <Text>Everything is ok!</Text>;
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
    const BB = new core_1.BlueBase();
    const { HttpLink } = jest.mock('apollo-link-http');
    // console.log('original===>',HttpLink)
    await BB.Filters.run("bluebase.boot.end", { HttpLink });
    //  await BB.Filters.run("plugin.apollo.links",{HttpLink});
    expect(HttpLink).toBeCalled();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELGlEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMseURBQXlEO0FBQ3pELDJEQUEyRDtBQUkzRCxxQkFBcUI7QUFDckIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQywyQ0FBMkM7SUFDM0MsdUNBQXVDO0lBRXZDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBSSxNQUFVLENBQUM7QUFDZixJQUFJLENBQUMsK0JBQStCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFOUMsNEJBQWtCLENBQUMsTUFBYSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCwwQkFBMEI7QUFFekIsSUFBSSxDQUFDLHlCQUF5QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBRTFDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUNsQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztJQUV2RixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7SUFDbkYsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztJQUM5RSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLGdCQUFnQixFQUFDLENBQUMsQ0FBQztBQUUxRCxDQUFDLENBQUMsQ0FBQztBQUVKLHFCQUFxQjtBQUNyQixJQUFJLENBQUMsa0VBQWtFLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFbkYsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO0lBQ2xDLElBQUksT0FBTyxDQUFDO0lBQ1osSUFBSTtRQUNILE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0tBRWhCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztBQUU5RCxDQUFDLENBQUMsQ0FBQztBQUVILHdDQUF3QztBQUN4QyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFDM0MsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUMxQixNQUFNLEVBQUMsUUFBUSxFQUFDLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRXRELHVDQUF1QztJQUN2QyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztJQUVyRCwyREFBMkQ7SUFFM0QsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRS9CLENBQUMsQ0FBQyxDQUFDO0FBR0gsMEJBQTBCO0FBQzFCLGlEQUFpRDtBQUNqRCw4QkFBOEI7QUFDOUIsMERBQTBEO0FBRTFELDJDQUEyQztBQUUzQywyREFBMkQ7QUFFM0QsNkRBQTZEO0FBRzdELGtDQUFrQztBQUVsQyxNQUFNO0FBY04sb0JBQW9CO0FBQ3BCLCtCQUErQjtBQUUvQixLQUFLO0FBQ0wsSUFBSTtBQUVKLHdCQUF3QjtBQUV4QiwrQkFBK0I7QUFFL0IsMEJBQTBCO0FBQzFCLCtGQUErRiIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYXBvbGxvL3BsdWdpbi1hcG9sbG8vc3JjL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZSwgXG5cdC8vIEJsdWVCYXNlQXBwIFxufSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uL2luZGV4Jztcbi8vIGltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IFdpdGhBcG9sbG9Qcm92aWRlciBmcm9tICcuLi93aXRoQXBvbGxvUHJvdmlkZXInO1xuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuLy8gICBpbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuLy8gaW1wb3J0IHsgc2FtcGxlIH0gZnJvbSAnLi4vX19tb2Nrc19fL2luZGV4J1xuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG4vLyBjb25zdCBDdXN0b21UZXh0ID0gKCkgPT4gPFRleHQ+RXZlcnl0aGluZyBpcyBvayE8L1RleHQ+O1xuXG5cblxuLy93b3JraW5nIGFuZCB0ZXN0aW5nXG50ZXN0KCdQbHVnaW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XG5cdC8vIGNvbnNvbGUubG9nKCdpbXBvcnRlZHt9PT09Picse0h0dHBMaW5rfSlcblx0Ly8gY29uc29sZS5sb2coJ2ltcG9ydGVkPT09PicsSHR0cExpbmspXG5cblx0ZXhwZWN0KEJCLlBsdWdpbnMuaGFzKCdwbHVnaW4tYXBvbGxvJykpLnRvQmVUcnV0aHkoKTtcbn0pO1xuXG5cbmxldCBjbGllbnQ6YW55O1xudGVzdCgnUGx1Z2luIGFwb2xsb1Byb3ZpZGVyIHdvcmtpbmcnLCBhc3luYyAoKSA9PiB7XG5cblx0XHQgV2l0aEFwb2xsb1Byb3ZpZGVyKGNsaWVudCBhcyBhbnkpO1xufSk7XG5cbi8vd29ya2luZyBodHRwbGluayBvcHRpb25zXG5cblx0dGVzdCgnVGVzdCB3aXRoIEFwb2xsbyBDb25maWcnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XHRhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnLCB7IHVyaTogJ2h0dHA6Ly9ncmFwaHFsJyB9KTtcblxuXHRcdEJCLmJvb3QoKTtcblx0XHRjb25zb2xlLmxvZygnUGx1Z2lucz09PT0+JywgQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJykpO1xuXHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuXHRcdGV4cGVjdChodHRwTGlua09wdGlvbnMpLnRvRXF1YWwoe3VyaTogJ2h0dHA6Ly9ncmFwaHFsJ30pO1xuXG5cdH0pO1xuXG4vL3dvcmtpbmcgYW5kIHRlc3RpbmdcbnRlc3QoJ1BsdWdpbiBzaG91bGQgdGhyb3cgZXJyb3IgaWYgaHR0cExpbmtPcHRpb25zIGNvbmZpZyBpcyBub3QgZ2l2ZW4nLCBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0bGV0IG1lc3NhZ2U7XG5cdHRyeSB7XG5cdFx0YXdhaXQgQkIuYm9vdCgpO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdH1cblx0ZXhwZWN0KG1lc3NhZ2UpLnRvQmUoJ0hUVFAgTGluayBVUkkgbm90IHByb3ZpZGVkIHRvIEFwb2xsbycpO1xuXG59KTtcblxuLy9tb2NraW5nICsgYXBvbGxvIGxpbmtzICAgLy9ub3Qgd29ya2luZ1xudGVzdCgnTW9ja2luZyBhbmQgYXBvbGxvIGxpbmtzJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRjb25zdCB7SHR0cExpbmt9OmFueSAgPSBqZXN0Lm1vY2soJ2Fwb2xsby1saW5rLWh0dHAnKTtcblxuXHQvLyBjb25zb2xlLmxvZygnb3JpZ2luYWw9PT0+JyxIdHRwTGluaylcblx0YXdhaXQgQkIuRmlsdGVycy5ydW4oXCJibHVlYmFzZS5ib290LmVuZFwiLHtIdHRwTGlua30pO1xuXG5cdC8vICBhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcInBsdWdpbi5hcG9sbG8ubGlua3NcIix7SHR0cExpbmt9KTtcblxuXHRleHBlY3QoSHR0cExpbmspLnRvQmVDYWxsZWQoKTtcblxufSk7XG5cblxuLy8gLy9jaGVja2luZyBhcG9sbG8gY2FjaGVcbi8vIHRlc3QoJ01vY2tpbmcgYW5kIGFwb2xsbyBjYWNoZScsIGFzeW5jICgpID0+IHtcbi8vIFx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcbi8vIFx0Y29uc3Qge0h0dHBMaW5rfTphbnkgID0gamVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cbi8vIFx0Ly8gY29uc29sZS5sb2coJ29yaWdpbmFsPT09PicsSHR0cExpbmspXG5cdFxuLy8gXHQvL2F3YWl0IEJCLkZpbHRlcnMucnVuKFwiYmx1ZWJhc2UuYm9vdC5lbmRcIix7SHR0cExpbmt9KTtcblxuLy8gXHQgIGF3YWl0IEJCLkZpbHRlcnMucnVuKFwicGx1Z2luLmFwb2xsby5jYWNoZVwiLHtIdHRwTGlua30pO1xuXG5cbi8vIFx0ZXhwZWN0KEh0dHBMaW5rKS50b0JlQ2FsbGVkKCk7XG5cbi8vIH0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBjbGFzcyBNb2NrQ2xhc3Mge1xuLy8gXHRjb25zdHJ1Y3RvcihwdWJsaWMgaW5wdXQpIHtcblxuLy8gXHR9XG4vLyB9XG5cbi8vIGluc3RhbmNlb2YuaW5wdXQgPT09IFxuXG4vLyBtaXNlKHJlc29sdmUgPT4gcmVzb2x2ZSgpKSk7XG5cbi8vIFx0Y29uc3Qgd3JhcHBlciA9IG1vdW50KFxuLy8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0gY29uZmlncz17eyAncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJzogeyB1cmk6ICd3d3cuZ1xuXG5cblxuIl0sInZlcnNpb24iOjN9