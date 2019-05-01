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
const apollo_link_http_1 = require("apollo-link-http");
// import { sample } from '../__mocks__/index'
// import { waitForElement } from 'enzyme-async-helpers';
// const CustomText = () => <Text>Everything is ok!</Text>;
//working and testing
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    console.log('imported{}===>', { HttpLink: apollo_link_http_1.HttpLink });
    console.log('imported===>', apollo_link_http_1.HttpLink);
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
    console.log("mocked httplink====> ", { HttpLink });
    await BB.Filters.run("bluebase.boot.end", { HttpLink });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsdUZBQXVEO0FBQ3ZELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3ZELHVEQUE0QztBQUM5Qyw4Q0FBOEM7QUFDOUMseURBQXlEO0FBSXpELDJEQUEyRDtBQUUzRCxxQkFBcUI7QUFDckIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLEVBQUMsUUFBUSxFQUFSLDJCQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLDJCQUFRLENBQUMsQ0FBQTtJQUVwQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILHFCQUFxQjtBQUNyQixJQUFJLENBQUMsa0VBQWtFLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFbkYsTUFBTSxFQUFFLEdBQUcsSUFBSSxlQUFRLEVBQUUsQ0FBQztJQUUxQixNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGVBQU0sQ0FBQyxDQUFDO0lBQ2xDLElBQUksT0FBTyxDQUFDO0lBRVosSUFBSTtRQUNILE1BQU0sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO0tBRWhCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZixPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQztLQUN4QjtJQUVELE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDckQsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUMsUUFBUSxDQUFDLENBQUM7SUFFOUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0FBRTlELENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLElBQUksRUFBRTtJQUMxQixNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBQyxRQUFRLEVBQUMsR0FBUSxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFFdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUE7SUFFL0MsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBQyxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFFckQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBRS9CLENBQUMsQ0FBQyxDQUFDO0FBR0gsSUFBSSxNQUFVLENBQUM7QUFDZixJQUFJLENBQUMsK0JBQStCLEVBQUUsS0FBSyxJQUFJLEVBQUU7SUFFOUMsNEJBQWtCLENBQUMsTUFBYSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDLENBQUM7QUFhSCxvQkFBb0I7QUFDcEIsK0JBQStCO0FBRS9CLEtBQUs7QUFDTCxJQUFJO0FBRUosd0JBQXdCO0FBRXhCLCtCQUErQjtBQUUvQiwwQkFBMEI7QUFDMUIsK0ZBQStGO0FBRS9GLFFBQVEsQ0FBQyxvQkFBb0IsRUFBRSxHQUFHLEVBQUU7SUFFbkMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLEtBQUssSUFBSSxFQUFFO1FBRXhDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7UUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztRQUNsQyw0QkFBNEI7UUFDNUIsK0NBQStDO1FBQy9DLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLEVBQUUsRUFBRSxHQUFHLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO1FBRXZGLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUNuRixNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQzlFLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxHQUFHLEVBQUUsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFDO0lBRTFELENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2UsIFxuXHQvLyBCbHVlQmFzZUFwcCBcbn0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi9pbmRleCc7XG4vLyBpbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbmltcG9ydCBXaXRoQXBvbGxvUHJvdmlkZXIgZnJvbSAnLi4vd2l0aEFwb2xsb1Byb3ZpZGVyJztcbi8vIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG4vLyBpbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcbiAgaW1wb3J0IHsgSHR0cExpbmsgfSBmcm9tICdhcG9sbG8tbGluay1odHRwJztcbi8vIGltcG9ydCB7IHNhbXBsZSB9IGZyb20gJy4uL19fbW9ja3NfXy9pbmRleCdcbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuXG5cblxuLy8gY29uc3QgQ3VzdG9tVGV4dCA9ICgpID0+IDxUZXh0PkV2ZXJ5dGhpbmcgaXMgb2shPC9UZXh0PjtcblxuLy93b3JraW5nIGFuZCB0ZXN0aW5nXG50ZXN0KCdQbHVnaW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XG5cdGNvbnNvbGUubG9nKCdpbXBvcnRlZHt9PT09Picse0h0dHBMaW5rfSlcblx0Y29uc29sZS5sb2coJ2ltcG9ydGVkPT09PicsSHR0cExpbmspXG5cblx0ZXhwZWN0KEJCLlBsdWdpbnMuaGFzKCdwbHVnaW4tYXBvbGxvJykpLnRvQmVUcnV0aHkoKTtcbn0pO1xuXG4vL3dvcmtpbmcgYW5kIHRlc3RpbmdcbnRlc3QoJ1BsdWdpbiBzaG91bGQgdGhyb3cgZXJyb3IgaWYgaHR0cExpbmtPcHRpb25zIGNvbmZpZyBpcyBub3QgZ2l2ZW4nLCBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0bGV0IG1lc3NhZ2U7XG5cblx0dHJ5IHtcblx0XHRhd2FpdCBCQi5ib290KCk7XG5cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcblx0fVxuXG5cdGNvbnN0IHtIdHRwTGlua30gOmFueSA9IGplc3QubW9jaygnYXBvbGxvLWxpbmstaHR0cCcpO1xuXHRcdEJCLkZpbHRlcnMucnVuKFwiYmx1ZWJhc2UuYm9vdC5lbmRcIixIdHRwTGluayk7XG5cblx0ZXhwZWN0KG1lc3NhZ2UpLnRvQmUoJ0hUVFAgTGluayBVUkkgbm90IHByb3ZpZGVkIHRvIEFwb2xsbycpO1xuXG59KTtcblxuXG50ZXN0KCdNb2NraW5nJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRjb25zdCB7SHR0cExpbmt9OmFueSAgPSBqZXN0Lm1vY2soJ2Fwb2xsby1saW5rLWh0dHAnKTtcblxuXHRjb25zb2xlLmxvZyhcIm1vY2tlZCBodHRwbGluaz09PT0+IFwiLHtIdHRwTGlua30pXG5cdFxuXHRhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIse0h0dHBMaW5rfSk7XG5cblx0ZXhwZWN0KEh0dHBMaW5rKS50b0JlQ2FsbGVkKCk7XG5cbn0pO1xuXG5cbmxldCBjbGllbnQ6YW55O1xudGVzdCgnUGx1Z2luIGFwb2xsb1Byb3ZpZGVyIHdvcmtpbmcnLCBhc3luYyAoKSA9PiB7XG5cblx0XHQgV2l0aEFwb2xsb1Byb3ZpZGVyKGNsaWVudCBhcyBhbnkpO1xufSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBjbGFzcyBNb2NrQ2xhc3Mge1xuLy8gXHRjb25zdHJ1Y3RvcihwdWJsaWMgaW5wdXQpIHtcblxuLy8gXHR9XG4vLyB9XG5cbi8vIGluc3RhbmNlb2YuaW5wdXQgPT09IFxuXG4vLyBtaXNlKHJlc29sdmUgPT4gcmVzb2x2ZSgpKSk7XG5cbi8vIFx0Y29uc3Qgd3JhcHBlciA9IG1vdW50KFxuLy8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0gY29uZmlncz17eyAncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJzogeyB1cmk6ICd3d3cuZ1xuXG5kZXNjcmliZSgnQXBvbGxvIFBsdWdpbiB0ZXN0JywgKCkgPT4ge1xuXG5cdGl0KCdUZXN0IHdpdGggQXBvbGxvIENvbmZpZycsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdFx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXHRcdC8vIEFwb2xsb1BsdWdpbi5nZXRDbGllbnQoKTtcblx0XHQvL2NvbnN0IFBsdWdpbnMgPSBhd2FpdCBCQi5QbHVnaW5zLmhhcyhQbHVnaW4pO1xuXHRcdGF3YWl0IEJCLkNvbmZpZ3Muc2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycsIHsgdXJpOiAnaHR0cDovL2dyYXBocWwnIH0pO1xuXG5cdFx0QkIuYm9vdCgpO1xuXHRcdGNvbnNvbGUubG9nKCdQbHVnaW5zPT09PT4nLCBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKSk7XG5cdFx0Y29uc3QgaHR0cExpbmtPcHRpb25zID0gQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJyk7XG5cdFx0ZXhwZWN0KGh0dHBMaW5rT3B0aW9ucykudG9FcXVhbCh7dXJpOiAnaHR0cDovL2dyYXBocWwnfSk7XG5cblx0fSk7XG59KTtcblxuIl0sInZlcnNpb24iOjN9