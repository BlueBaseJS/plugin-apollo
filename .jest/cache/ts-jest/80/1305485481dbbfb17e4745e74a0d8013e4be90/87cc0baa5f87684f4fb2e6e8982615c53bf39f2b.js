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
    //mocking + apollo links
    test('Mocking and apollo links', async () => {
        const BB = new core_1.BlueBase();
        const { HttpLink } = jest.mock('apollo-link-http');
        // console.log('original===>',HttpLink)
        await BB.Filters.run("bluebase.boot.end", { HttpLink });
        //  await BB.Filters.run("plugin.apollo.links",{HttpLink});
        expect(HttpLink).toBeCalled();
    });
    //checking apollo cache
    test('Mocking and apollo cache', async () => {
        const BB = new core_1.BlueBase();
        const { HttpLink } = jest.mock('apollo-link-http');
        // console.log('original===>',HttpLink)
        //await BB.Filters.run("bluebase.boot.end",{HttpLink});
        await BB.Filters.run("plugin.apollo.cache", { HttpLink });
        expect(HttpLink).toBeCalled();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3pELGlEQUFpRDtBQUNqRCw4Q0FBOEM7QUFDOUMseURBQXlEO0FBQ3pELDJEQUEyRDtBQUkzRCxxQkFBcUI7QUFDckIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQywyQ0FBMkM7SUFDM0MsdUNBQXVDO0lBRXZDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3RELENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBSSxNQUFVLENBQUM7QUFDZixJQUFJLENBQUMsK0JBQStCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFOUMsNEJBQWtCLENBQUMsTUFBYSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFFSCwwQkFBMEI7QUFDMUIsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtJQUVuQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFFeEMsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztRQUMxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBRXZGLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUNuRixNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO0lBRTFELENBQUMsQ0FBQyxDQUFDO0lBRUoscUJBQXFCO0lBQ3JCLElBQUksQ0FBQyxrRUFBa0UsRUFBRSxLQUFLLElBQUksRUFBRTtRQUVuRixNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO1FBRTFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxPQUFPLENBQUM7UUFDWixJQUFJO1lBQ0gsTUFBTSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7U0FFaEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNmLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3hCO1FBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBRTlELENBQUMsQ0FBQyxDQUFDO0lBRUgsd0JBQXdCO0lBQ3hCLElBQUksQ0FBQywwQkFBMEIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUMzQyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO1FBQzFCLE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFdEQsdUNBQXVDO1FBQ3ZDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBRXJELDJEQUEyRDtRQUMzRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFL0IsQ0FBQyxDQUFDLENBQUM7SUFHSCx1QkFBdUI7SUFDdkIsSUFBSSxDQUFDLDBCQUEwQixFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzNDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7UUFDMUIsTUFBTSxFQUFDLFFBQVEsRUFBQyxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV0RCx1Q0FBdUM7UUFFdkMsdURBQXVEO1FBRXJELE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUMsRUFBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDO1FBR3pELE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUUvQixDQUFDLENBQUMsQ0FBQztJQWNILG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFFL0IsS0FBSztJQUNMLElBQUk7SUFFSix3QkFBd0I7SUFFeEIsK0JBQStCO0lBRS9CLDBCQUEwQjtJQUMxQiwrRkFBK0Y7QUFHL0YsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2UsIFxuXHQvLyBCbHVlQmFzZUFwcCBcbn0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi9pbmRleCc7XG4vLyBpbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBXaXRoQXBvbGxvUHJvdmlkZXIgZnJvbSAnLi4vd2l0aEFwb2xsb1Byb3ZpZGVyJztcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG4vLyBpbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcbi8vICAgaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbi8vIGltcG9ydCB7IHNhbXBsZSB9IGZyb20gJy4uL19fbW9ja3NfXy9pbmRleCdcbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuLy8gY29uc3QgQ3VzdG9tVGV4dCA9ICgpID0+IDxUZXh0PkV2ZXJ5dGhpbmcgaXMgb2shPC9UZXh0PjtcblxuXG5cbi8vd29ya2luZyBhbmQgdGVzdGluZ1xudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cdFxuXHQvLyBjb25zb2xlLmxvZygnaW1wb3J0ZWR7fT09PT4nLHtIdHRwTGlua30pXG5cdC8vIGNvbnNvbGUubG9nKCdpbXBvcnRlZD09PT4nLEh0dHBMaW5rKVxuXG5cdGV4cGVjdChCQi5QbHVnaW5zLmhhcygncGx1Z2luLWFwb2xsbycpKS50b0JlVHJ1dGh5KCk7XG59KTtcblxuXG5sZXQgY2xpZW50OmFueTtcbnRlc3QoJ1BsdWdpbiBhcG9sbG9Qcm92aWRlciB3b3JraW5nJywgYXN5bmMgKCkgPT4ge1xuXG5cdFx0IFdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQgYXMgYW55KTtcbn0pO1xuXG4vL3dvcmtpbmcgaHR0cGxpbmsgb3B0aW9uc1xuZGVzY3JpYmUoJ0Fwb2xsbyBQbHVnaW4gdGVzdCcsICgpID0+IHtcblxuXHRpdCgnVGVzdCB3aXRoIEFwb2xsbyBDb25maWcnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XHRhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnLCB7IHVyaTogJ2h0dHA6Ly9ncmFwaHFsJyB9KTtcblxuXHRcdEJCLmJvb3QoKTtcblx0XHRjb25zb2xlLmxvZygnUGx1Z2lucz09PT0+JywgQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJykpO1xuXHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuXHRcdGV4cGVjdChodHRwTGlua09wdGlvbnMpLnRvRXF1YWwoe3VyaTogJ2h0dHA6Ly9ncmFwaHFsJ30pO1xuXG5cdH0pO1xuXG4vL3dvcmtpbmcgYW5kIHRlc3RpbmdcbnRlc3QoJ1BsdWdpbiBzaG91bGQgdGhyb3cgZXJyb3IgaWYgaHR0cExpbmtPcHRpb25zIGNvbmZpZyBpcyBub3QgZ2l2ZW4nLCBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0bGV0IG1lc3NhZ2U7XG5cdHRyeSB7XG5cdFx0YXdhaXQgQkIuYm9vdCgpO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdH1cblx0ZXhwZWN0KG1lc3NhZ2UpLnRvQmUoJ0hUVFAgTGluayBVUkkgbm90IHByb3ZpZGVkIHRvIEFwb2xsbycpO1xuXG59KTtcblxuLy9tb2NraW5nICsgYXBvbGxvIGxpbmtzXG50ZXN0KCdNb2NraW5nIGFuZCBhcG9sbG8gbGlua3MnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGNvbnN0IHtIdHRwTGlua306YW55ICA9IGplc3QubW9jaygnYXBvbGxvLWxpbmstaHR0cCcpO1xuXG5cdC8vIGNvbnNvbGUubG9nKCdvcmlnaW5hbD09PT4nLEh0dHBMaW5rKVxuXHRhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIse0h0dHBMaW5rfSk7XG5cblx0Ly8gIGF3YWl0IEJCLkZpbHRlcnMucnVuKFwicGx1Z2luLmFwb2xsby5saW5rc1wiLHtIdHRwTGlua30pO1xuXHRleHBlY3QoSHR0cExpbmspLnRvQmVDYWxsZWQoKTtcblxufSk7XG5cblxuLy9jaGVja2luZyBhcG9sbG8gY2FjaGVcbnRlc3QoJ01vY2tpbmcgYW5kIGFwb2xsbyBjYWNoZScsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0Y29uc3Qge0h0dHBMaW5rfTphbnkgID0gamVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cblx0Ly8gY29uc29sZS5sb2coJ29yaWdpbmFsPT09PicsSHR0cExpbmspXG5cdFxuXHQvL2F3YWl0IEJCLkZpbHRlcnMucnVuKFwiYmx1ZWJhc2UuYm9vdC5lbmRcIix7SHR0cExpbmt9KTtcblxuXHQgIGF3YWl0IEJCLkZpbHRlcnMucnVuKFwicGx1Z2luLmFwb2xsby5jYWNoZVwiLHtIdHRwTGlua30pO1xuXG5cblx0ZXhwZWN0KEh0dHBMaW5rKS50b0JlQ2FsbGVkKCk7XG5cbn0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBjbGFzcyBNb2NrQ2xhc3Mge1xuLy8gXHRjb25zdHJ1Y3RvcihwdWJsaWMgaW5wdXQpIHtcblxuLy8gXHR9XG4vLyB9XG5cbi8vIGluc3RhbmNlb2YuaW5wdXQgPT09IFxuXG4vLyBtaXNlKHJlc29sdmUgPT4gcmVzb2x2ZSgpKSk7XG5cbi8vIFx0Y29uc3Qgd3JhcHBlciA9IG1vdW50KFxuLy8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0gY29uZmlncz17eyAncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJzogeyB1cmk6ICd3d3cuZ1xuXG5cbn0pO1xuXG4iXSwidmVyc2lvbiI6M30=