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
//working httplink options
describe('Apollo Plugin test', () => {
    it('Test with Apollo Config', async () => {
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
    test('Mocking', async () => {
        const BB = new core_1.BlueBase();
        const { HttpLink } = jest.mock('apollo-link-http');
        console.log("mocked httplink====> ", { HttpLink });
        await BB.Filters.run("bluebase.boot.end", { HttpLink });
        await BB.Filters.run("plugin.apollo.cache", { HttpLink });
        expect(HttpLink).toBeCalled();
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
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELGlEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMseURBQXlEO0FBQ3pELDJEQUEyRDtBQUkzRCxxQkFBcUI7QUFDckIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQywyQ0FBMkM7SUFDM0MsdUNBQXVDO0lBRXZDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBRUgsMEJBQTBCO0FBQzFCLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7SUFFbkMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBRXhDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7UUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztRQUNsQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxFQUFFLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQztRQUV2RixFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7UUFDbkYsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUM5RSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsR0FBRyxFQUFFLGdCQUFnQixFQUFDLENBQUMsQ0FBQztJQUUxRCxDQUFDLENBQUMsQ0FBQztJQUVKLHFCQUFxQjtJQUNyQixJQUFJLENBQUMsa0VBQWtFLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFbkYsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztRQUUxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO1FBQ2xDLElBQUksT0FBTyxDQUFDO1FBQ1osSUFBSTtZQUNILE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1NBRWhCO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN4QjtRQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUU5RCxDQUFDLENBQUMsQ0FBQztJQUdILElBQUksQ0FBQyxTQUFTLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDMUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztRQUMxQixNQUFNLEVBQUMsUUFBUSxFQUFDLEdBQVEsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRXRELE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFBO1FBRS9DLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBRXhELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUUvQixDQUFDLENBQUMsQ0FBQztJQUdILElBQUksTUFBVSxDQUFDO0lBQ2YsSUFBSSxDQUFDLCtCQUErQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBRTlDLDRCQUFrQixDQUFDLE1BQWEsQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBYUgsb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUUvQixLQUFLO0lBQ0wsSUFBSTtJQUVKLHdCQUF3QjtJQUV4QiwrQkFBK0I7SUFFL0IsMEJBQTBCO0lBQzFCLCtGQUErRjtBQUcvRixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYXBvbGxvL3BsdWdpbi1hcG9sbG8vc3JjL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZSwgXG5cdC8vIEJsdWVCYXNlQXBwIFxufSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uL2luZGV4Jztcbi8vIGltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuaW1wb3J0IFdpdGhBcG9sbG9Qcm92aWRlciBmcm9tICcuLi93aXRoQXBvbGxvUHJvdmlkZXInO1xuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuLy8gICBpbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuLy8gaW1wb3J0IHsgc2FtcGxlIH0gZnJvbSAnLi4vX19tb2Nrc19fL2luZGV4J1xuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG4vLyBjb25zdCBDdXN0b21UZXh0ID0gKCkgPT4gPFRleHQ+RXZlcnl0aGluZyBpcyBvayE8L1RleHQ+O1xuXG5cblxuLy93b3JraW5nIGFuZCB0ZXN0aW5nXG50ZXN0KCdQbHVnaW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XG5cdC8vIGNvbnNvbGUubG9nKCdpbXBvcnRlZHt9PT09Picse0h0dHBMaW5rfSlcblx0Ly8gY29uc29sZS5sb2coJ2ltcG9ydGVkPT09PicsSHR0cExpbmspXG5cblx0ZXhwZWN0KEJCLlBsdWdpbnMuaGFzKCdwbHVnaW4tYXBvbGxvJykpLnRvQmVUcnV0aHkoKTtcbn0pO1xuXG4vL3dvcmtpbmcgaHR0cGxpbmsgb3B0aW9uc1xuZGVzY3JpYmUoJ0Fwb2xsbyBQbHVnaW4gdGVzdCcsICgpID0+IHtcblxuXHRpdCgnVGVzdCB3aXRoIEFwb2xsbyBDb25maWcnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XHRhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnLCB7IHVyaTogJ2h0dHA6Ly9ncmFwaHFsJyB9KTtcblxuXHRcdEJCLmJvb3QoKTtcblx0XHRjb25zb2xlLmxvZygnUGx1Z2lucz09PT0+JywgQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJykpO1xuXHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuXHRcdGV4cGVjdChodHRwTGlua09wdGlvbnMpLnRvRXF1YWwoe3VyaTogJ2h0dHA6Ly9ncmFwaHFsJ30pO1xuXG5cdH0pO1xuXG4vL3dvcmtpbmcgYW5kIHRlc3RpbmdcbnRlc3QoJ1BsdWdpbiBzaG91bGQgdGhyb3cgZXJyb3IgaWYgaHR0cExpbmtPcHRpb25zIGNvbmZpZyBpcyBub3QgZ2l2ZW4nLCBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0bGV0IG1lc3NhZ2U7XG5cdHRyeSB7XG5cdFx0YXdhaXQgQkIuYm9vdCgpO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdH1cblx0ZXhwZWN0KG1lc3NhZ2UpLnRvQmUoJ0hUVFAgTGluayBVUkkgbm90IHByb3ZpZGVkIHRvIEFwb2xsbycpO1xuXG59KTtcblxuXG50ZXN0KCdNb2NraW5nJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRjb25zdCB7SHR0cExpbmt9OmFueSAgPSBqZXN0Lm1vY2soJ2Fwb2xsby1saW5rLWh0dHAnKTtcblxuXHRjb25zb2xlLmxvZyhcIm1vY2tlZCBodHRwbGluaz09PT0+IFwiLHtIdHRwTGlua30pXG5cdFxuXHRhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIse0h0dHBMaW5rfSk7XG5cdCBhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcInBsdWdpbi5hcG9sbG8uY2FjaGVcIix7SHR0cExpbmt9KTtcblxuXHRleHBlY3QoSHR0cExpbmspLnRvQmVDYWxsZWQoKTtcblxufSk7XG5cblxubGV0IGNsaWVudDphbnk7XG50ZXN0KCdQbHVnaW4gYXBvbGxvUHJvdmlkZXIgd29ya2luZycsIGFzeW5jICgpID0+IHtcblxuXHRcdCBXaXRoQXBvbGxvUHJvdmlkZXIoY2xpZW50IGFzIGFueSk7XG59KTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGNsYXNzIE1vY2tDbGFzcyB7XG4vLyBcdGNvbnN0cnVjdG9yKHB1YmxpYyBpbnB1dCkge1xuXG4vLyBcdH1cbi8vIH1cblxuLy8gaW5zdGFuY2VvZi5pbnB1dCA9PT0gXG5cbi8vIG1pc2UocmVzb2x2ZSA9PiByZXNvbHZlKCkpKTtcblxuLy8gXHRjb25zdCB3cmFwcGVyID0gbW91bnQoXG4vLyBcdFx0PEJsdWVCYXNlQXBwIHBsdWdpbnM9e1tQbHVnaW5dfSBjb25maWdzPXt7ICdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnOiB7IHVyaTogJ3d3dy5nXG5cblxufSk7XG5cbiJdLCJ2ZXJzaW9uIjozfQ==