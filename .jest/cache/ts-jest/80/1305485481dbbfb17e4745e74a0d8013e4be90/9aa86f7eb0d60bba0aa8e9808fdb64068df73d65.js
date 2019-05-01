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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBRXdCO0FBQ3hCLDZEQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsMERBQTBEO0FBQzFELDZCQUE2QjtBQUM3QixrQ0FBa0M7QUFDbEMseURBQXlEO0FBQ3ZELHVEQUE0QztBQUM5Qyw4Q0FBOEM7QUFDOUMseURBQXlEO0FBR3pELDJEQUEyRDtBQUUzRCxxQkFBcUI7QUFDckIsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLEVBQUMsUUFBUSxFQUFSLDJCQUFRLEVBQUMsQ0FBQyxDQUFBO0lBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLDJCQUFRLENBQUMsQ0FBQTtJQUVwQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUN0RCxDQUFDLENBQUMsQ0FBQztBQUVILDBCQUEwQjtBQUMxQixRQUFRLENBQUMsb0JBQW9CLEVBQUUsR0FBRyxFQUFFO0lBRW5DLEVBQUUsQ0FBQyx5QkFBeUIsRUFBRSxLQUFLLElBQUksRUFBRTtRQUV4QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO1FBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7UUFDbEMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLEdBQUcsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLENBQUM7UUFFdkYsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sZUFBZSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDOUUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLEdBQUcsRUFBRSxnQkFBZ0IsRUFBQyxDQUFDLENBQUM7SUFFMUQsQ0FBQyxDQUFDLENBQUM7SUFFSixxQkFBcUI7SUFDckIsSUFBSSxDQUFDLGtFQUFrRSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBRW5GLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7UUFFMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLE9BQU8sQ0FBQztRQUNaLElBQUk7WUFDSCxNQUFNLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUVoQjtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2YsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDeEI7UUFHRCxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFFOUQsQ0FBQyxDQUFDLENBQUM7SUFHSCxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzFCLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7UUFDMUIsTUFBTSxFQUFDLFFBQVEsRUFBQyxHQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUV0RCxPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQTtRQUUvQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFDLEVBQUMsUUFBUSxFQUFDLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7SUFFL0IsQ0FBQyxDQUFDLENBQUM7SUFHSCxrQkFBa0I7SUFDbEIsc0RBQXNEO0lBRXRELHdDQUF3QztJQUN4QyxNQUFNO0lBYU4sb0JBQW9CO0lBQ3BCLCtCQUErQjtJQUUvQixLQUFLO0lBQ0wsSUFBSTtJQUVKLHdCQUF3QjtJQUV4QiwrQkFBK0I7SUFFL0IsMEJBQTBCO0lBQzFCLCtGQUErRjtBQUcvRixDQUFDLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvaG9tZS9tdXp6YW1pbC9Eb2N1bWVudHMvYXBvbGxvL3BsdWdpbi1hcG9sbG8vc3JjL19fdGVzdHNfXy9pbmRleC50ZXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCbHVlQmFzZSwgXG5cdC8vIEJsdWVCYXNlQXBwIFxufSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uL2luZGV4Jztcbi8vIGltcG9ydCB7IFRleHQgfSBmcm9tICdyZWFjdC1uYXRpdmUnO1xuLy8gaW1wb3J0IFdpdGhBcG9sbG9Qcm92aWRlciBmcm9tICcuLi93aXRoQXBvbGxvUHJvdmlkZXInO1xuLy8gaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IG1vdW50IH0gZnJvbSAnZW56eW1lJztcbi8vIGltcG9ydCB7IHdhaXRGb3JFbGVtZW50IH0gZnJvbSAnZW56eW1lLWFzeW5jLWhlbHBlcnMnO1xuICBpbXBvcnQgeyBIdHRwTGluayB9IGZyb20gJ2Fwb2xsby1saW5rLWh0dHAnO1xuLy8gaW1wb3J0IHsgc2FtcGxlIH0gZnJvbSAnLi4vX19tb2Nrc19fL2luZGV4J1xuLy8gaW1wb3J0IHsgd2FpdEZvckVsZW1lbnQgfSBmcm9tICdlbnp5bWUtYXN5bmMtaGVscGVycyc7XG5cblxuLy8gY29uc3QgQ3VzdG9tVGV4dCA9ICgpID0+IDxUZXh0PkV2ZXJ5dGhpbmcgaXMgb2shPC9UZXh0PjtcblxuLy93b3JraW5nIGFuZCB0ZXN0aW5nXG50ZXN0KCdQbHVnaW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XG5cdGNvbnNvbGUubG9nKCdpbXBvcnRlZHt9PT09Picse0h0dHBMaW5rfSlcblx0Y29uc29sZS5sb2coJ2ltcG9ydGVkPT09PicsSHR0cExpbmspXG5cblx0ZXhwZWN0KEJCLlBsdWdpbnMuaGFzKCdwbHVnaW4tYXBvbGxvJykpLnRvQmVUcnV0aHkoKTtcbn0pO1xuXG4vL3dvcmtpbmcgaHR0cGxpbmsgb3B0aW9uc1xuZGVzY3JpYmUoJ0Fwb2xsbyBQbHVnaW4gdGVzdCcsICgpID0+IHtcblxuXHRpdCgnVGVzdCB3aXRoIEFwb2xsbyBDb25maWcnLCBhc3luYyAoKSA9PiB7XG5cblx0XHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRcdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0XHRhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnLCB7IHVyaTogJ2h0dHA6Ly9ncmFwaHFsJyB9KTtcblxuXHRcdEJCLmJvb3QoKTtcblx0XHRjb25zb2xlLmxvZygnUGx1Z2lucz09PT0+JywgQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJykpO1xuXHRcdGNvbnN0IGh0dHBMaW5rT3B0aW9ucyA9IEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpO1xuXHRcdGV4cGVjdChodHRwTGlua09wdGlvbnMpLnRvRXF1YWwoe3VyaTogJ2h0dHA6Ly9ncmFwaHFsJ30pO1xuXG5cdH0pO1xuXG4vL3dvcmtpbmcgYW5kIHRlc3RpbmdcbnRlc3QoJ1BsdWdpbiBzaG91bGQgdGhyb3cgZXJyb3IgaWYgaHR0cExpbmtPcHRpb25zIGNvbmZpZyBpcyBub3QgZ2l2ZW4nLCBhc3luYyAoKSA9PiB7XG5cblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblx0bGV0IG1lc3NhZ2U7XG5cdHRyeSB7XG5cdFx0YXdhaXQgQkIuYm9vdCgpO1xuXG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0bWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XG5cdH1cblxuXG5cdGV4cGVjdChtZXNzYWdlKS50b0JlKCdIVFRQIExpbmsgVVJJIG5vdCBwcm92aWRlZCB0byBBcG9sbG8nKTtcblxufSk7XG5cblxudGVzdCgnTW9ja2luZycsIGFzeW5jICgpID0+IHtcblx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcblx0Y29uc3Qge0h0dHBMaW5rfTphbnkgID0gamVzdC5tb2NrKCdhcG9sbG8tbGluay1odHRwJyk7XG5cblx0Y29uc29sZS5sb2coXCJtb2NrZWQgaHR0cGxpbms9PT09PiBcIix7SHR0cExpbmt9KVxuXHRcblx0YXdhaXQgQkIuRmlsdGVycy5ydW4oXCJibHVlYmFzZS5ib290LmVuZFwiLHtIdHRwTGlua30pO1xuXG5cdGV4cGVjdChIdHRwTGluaykudG9CZUNhbGxlZCgpO1xuXG59KTtcblxuXG4vLyBsZXQgY2xpZW50OmFueTtcbi8vIHRlc3QoJ1BsdWdpbiBhcG9sbG9Qcm92aWRlciB3b3JraW5nJywgYXN5bmMgKCkgPT4ge1xuXG4vLyBcdFx0IFdpdGhBcG9sbG9Qcm92aWRlcihjbGllbnQgYXMgYW55KTtcbi8vIH0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY2xhc3MgTW9ja0NsYXNzIHtcbi8vIFx0Y29uc3RydWN0b3IocHVibGljIGlucHV0KSB7XG5cbi8vIFx0fVxuLy8gfVxuXG4vLyBpbnN0YW5jZW9mLmlucHV0ID09PSBcblxuLy8gbWlzZShyZXNvbHZlID0+IHJlc29sdmUoKSkpO1xuXG4vLyBcdGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbi8vIFx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19IGNvbmZpZ3M9e3sgJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucyc6IHsgdXJpOiAnd3d3LmdcblxuXG59KTtcblxuIl0sInZlcnNpb24iOjN9