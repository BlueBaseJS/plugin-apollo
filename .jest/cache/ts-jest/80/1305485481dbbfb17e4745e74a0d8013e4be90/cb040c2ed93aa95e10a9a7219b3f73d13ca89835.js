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
        expect(HttpLink).toBeCalled();
    });
    // let client:any;
    // test('Plugin apolloProvider working', async () => {
    // 		 WithApolloProvider(client as any);
    // });
    // class MockClass {
    // 	constructor(public input) {
    // 	}
    // }
    // instanceof.input === 
    // mise(resolve => resolve()));
    // 	const wrapper = mount(
    // 		<BlueBaseApp plugins={[Plugin]} configs={{ 'plugins.apollo.httpLinkOptions': { uri: 'www.g
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsMERBQTBEO0FBQzFELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3ZELHVEQUE0QztBQUM5Qyw4Q0FBOEM7QUFDOUMseURBQXlEO0FBSXpELDJEQUEyRDtBQUUzRCxxQkFBcUI7QUFDckIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLEVBQUMsUUFBUSxFQUFSLDJCQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLDJCQUFRLENBQUMsQ0FBQTtJQUVwQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILDBCQUEwQjtBQUMxQixRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBRW5DLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUV4QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO1FBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7UUFDbEMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFdkYsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7SUFFMUQsQ0FBQyxDQUFDLENBQUM7SUFFSixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLGtFQUFrRSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRW5GLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7UUFFMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUk7WUFDSCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUVoQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2YsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDeEI7UUFHRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFFOUQsQ0FBQyxDQUFDLENBQUM7SUFHSCxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzFCLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7UUFDMUIsTUFBTSxFQUFDLFFBQVEsRUFBQyxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV0RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQTtRQUUvQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFL0IsQ0FBQyxDQUFDLENBQUM7SUFHSCxrQkFBa0I7SUFDbEIsc0RBQXNEO0lBRXRELHdDQUF3QztJQUN4QyxNQUFNO0lBYU4sb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUUvQixLQUFLO0lBQ0wsSUFBSTtJQUVKLHdCQUF3QjtJQUV4QiwrQkFBK0I7SUFFL0IsMEJBQTBCO0lBQzFCLCtGQUErRjtBQUcvRixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYXBvbGxvL3BsdWdpbi1hcG9sbG8vc3JjL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZSwgXG5cdC8vIEJsdWVCYXNlQXBwIFxufSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uL2luZGV4Jztcbi8vIGltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuLy8gaW1wb3J0IFdpdGhBcG9sbG9Qcm92aWRlciBmcm9tICcuLi93aXRoQXBvbGxvUHJvdmlkZXInO1xuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuICBpbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuLy8gaW1wb3J0IHsgc2FtcGxlIH0gZnJvbSAnLi4vX19tb2Nrc19fL2luZGV4J1xuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cblxuXG4vLyBjb25zdCBDdXN0b21UZXh0ID0gKCkgPT4gPFRleHQ+RXZlcnl0aGluZyBpcyBvayE8L1RleHQ+O1xuXG4vL3dvcmtpbmcgYW5kIHRlc3RpbmdcbnRlc3QoJ1BsdWdpbiBjb3JyZWN0bHkgcmVnaXN0ZXJlZCcsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXHRcblx0Y29uc29sZS5sb2coJ2ltcG9ydGVke309PT0+Jyx7SHR0cExpbmt9KVxuXHRjb25zb2xlLmxvZygnaW1wb3J0ZWQ9PT0+JyxIdHRwTGluaylcblxuXHRleHBlY3QoQkIuUGx1Z2lucy5oYXMoJ3BsdWdpbi1hcG9sbG8nKSkudG9CZVRydXRoeSgpO1xufSk7XG5cbi8vd29ya2luZyBodHRwbGluayBvcHRpb25zXG5kZXNjcmliZSgnQXBvbGxvIFBsdWdpbiB0ZXN0JywgKCkgPT4ge1xuXG5cdGl0KCdUZXN0IHdpdGggQXBvbGxvIENvbmZpZycsIGFzeW5jICgpID0+IHtcblxuXHRcdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdFx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXHRcdGF3YWl0IEJCLkNvbmZpZ3Muc2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycsIHsgdXJpOiAnaHR0cDovL2dyYXBocWwnIH0pO1xuXG5cdFx0QkIuYm9vdCgpO1xuXHRcdGNvbnNvbGUubG9nKCdQbHVnaW5zPT09PT4nLCBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKSk7XG5cdFx0Y29uc3QgaHR0cExpbmtPcHRpb25zID0gQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJyk7XG5cdFx0ZXhwZWN0KGh0dHBMaW5rT3B0aW9ucykudG9FcXVhbCh7dXJpOiAnaHR0cDovL2dyYXBocWwnfSk7XG5cblx0fSk7XG5cbi8vd29ya2luZyBhbmQgdGVzdGluZ1xudGVzdCgnUGx1Z2luIHNob3VsZCB0aHJvdyBlcnJvciBpZiBodHRwTGlua09wdGlvbnMgY29uZmlnIGlzIG5vdCBnaXZlbicsIGFzeW5jICgpID0+IHtcblxuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcblx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuXHRsZXQgbWVzc2FnZTtcblx0dHJ5IHtcblx0XHRhd2FpdCBCQi5ib290KCk7XG5cblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcblx0fVxuXG5cblx0ZXhwZWN0KG1lc3NhZ2UpLnRvQmUoJ0hUVFAgTGluayBVUkkgbm90IHByb3ZpZGVkIHRvIEFwb2xsbycpO1xuXG59KTtcblxuXG50ZXN0KCdNb2NraW5nJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRjb25zdCB7SHR0cExpbmt9OmFueSAgPSBqZXN0Lm1vY2soJ2Fwb2xsby1saW5rLWh0dHAnKTtcblxuXHRjb25zb2xlLmxvZyhcIm1vY2tlZCBodHRwbGluaz09PT0+IFwiLHtIdHRwTGlua30pXG5cdFxuXHRhd2FpdCBCQi5GaWx0ZXJzLnJ1bihcImJsdWViYXNlLmJvb3QuZW5kXCIse0h0dHBMaW5rfSk7XG5cblx0ZXhwZWN0KEh0dHBMaW5rKS50b0JlQ2FsbGVkKCk7XG5cbn0pO1xuXG5cbi8vIGxldCBjbGllbnQ6YW55O1xuLy8gdGVzdCgnUGx1Z2luIGFwb2xsb1Byb3ZpZGVyIHdvcmtpbmcnLCBhc3luYyAoKSA9PiB7XG5cbi8vIFx0XHQgV2l0aEFwb2xsb1Byb3ZpZGVyKGNsaWVudCBhcyBhbnkpO1xuLy8gfSk7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBjbGFzcyBNb2NrQ2xhc3Mge1xuLy8gXHRjb25zdHJ1Y3RvcihwdWJsaWMgaW5wdXQpIHtcblxuLy8gXHR9XG4vLyB9XG5cbi8vIGluc3RhbmNlb2YuaW5wdXQgPT09IFxuXG4vLyBtaXNlKHJlc29sdmUgPT4gcmVzb2x2ZSgpKSk7XG5cbi8vIFx0Y29uc3Qgd3JhcHBlciA9IG1vdW50KFxuLy8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0gY29uZmlncz17eyAncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJzogeyB1cmk6ICd3d3cuZ1xuXG5cbn0pO1xuXG4iXSwidmVyc2lvbiI6M30=