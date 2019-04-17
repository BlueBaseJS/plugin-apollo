"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const index_1 = tslib_1.__importDefault(require("../index"));
// import WithApolloProvider from '../withApolloProvider';
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    expect(BB.Plugins.has('@bluebase/plugin-apollo')).toBeTruthy();
});
// let client:any;
// test('Plugin should be correctly registered', async () => {
// 		 WithApolloProvider(client as any);
// });
// describe('Apollo Plugin test', () => {
// 	it('Test with Apollo Config', async () => {
// 		const BB = new BlueBase();
// 		await BB.Plugins.register(Plugin);
// 		// ApolloPlugin.getClient();
// 		const Plugins = await BB.Plugins.has(Plugin);
// 		await BB.Configs.setValue('plugins.apollo.httpLinkOptions', { uri: 'http://graphql' });
// 		// renderer.create (
// 		// 	<BB.Components.Query>)
// 		// </BB.Components.Query>
// 		BB.boot();
// 		console.log('Plugins====>', BB.Configs.getValue('plugins.apollo.httpLinkOptions'));
// 		const httpLinkOptions = BB.Configs.getValue('plugins.apollo.httpLinkOptions');
// 		expect(httpLinkOptions).toEqual({uri: 'http://graphql'});
// 	});
// });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQTBDO0FBQzFDLDZEQUE4QjtBQUM5QiwwREFBMEQ7QUFFMUQsSUFBSSxDQUFDLDZCQUE2QixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQzlDLE1BQU0sRUFBRSxHQUFHLElBQUksZUFBUSxFQUFFLENBQUM7SUFDMUIsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxlQUFNLENBQUMsQ0FBQztJQUVsQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2hFLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWtCO0FBQ2xCLDhEQUE4RDtBQUU5RCx3Q0FBd0M7QUFDeEMsTUFBTTtBQU9OLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFFL0MsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QyxpQ0FBaUM7QUFDakMsa0RBQWtEO0FBQ2xELDRGQUE0RjtBQUU1Rix5QkFBeUI7QUFDekIsK0JBQStCO0FBQy9CLDhCQUE4QjtBQUU5QixlQUFlO0FBQ2Ysd0ZBQXdGO0FBQ3hGLG1GQUFtRjtBQUNuRiw4REFBOEQ7QUFFOUQsT0FBTztBQUNQLE1BQU0iLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2UgfSBmcm9tICdAYmx1ZWJhc2UvY29yZSc7XG5pbXBvcnQgUGx1Z2luIGZyb20gJy4uL2luZGV4Jztcbi8vIGltcG9ydCBXaXRoQXBvbGxvUHJvdmlkZXIgZnJvbSAnLi4vd2l0aEFwb2xsb1Byb3ZpZGVyJztcbiAgXG50ZXN0KCdQbHVnaW4gY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG5cdGF3YWl0IEJCLlBsdWdpbnMucmVnaXN0ZXIoUGx1Z2luKTtcblxuXHRleHBlY3QoQkIuUGx1Z2lucy5oYXMoJ0BibHVlYmFzZS9wbHVnaW4tYXBvbGxvJykpLnRvQmVUcnV0aHkoKTtcbn0pO1xuXG4vLyBsZXQgY2xpZW50OmFueTtcbi8vIHRlc3QoJ1BsdWdpbiBzaG91bGQgYmUgY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdCBcbi8vIFx0XHQgV2l0aEFwb2xsb1Byb3ZpZGVyKGNsaWVudCBhcyBhbnkpO1xuLy8gfSk7XG5cblxuXG5cblxuXG4vLyBkZXNjcmliZSgnQXBvbGxvIFBsdWdpbiB0ZXN0JywgKCkgPT4ge1xuLy8gXHRpdCgnVGVzdCB3aXRoIEFwb2xsbyBDb25maWcnLCBhc3luYyAoKSA9PiB7XG5cdFx0XG4vLyBcdFx0Y29uc3QgQkIgPSBuZXcgQmx1ZUJhc2UoKTtcbi8vIFx0XHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG4vLyBcdFx0Ly8gQXBvbGxvUGx1Z2luLmdldENsaWVudCgpO1xuLy8gXHRcdGNvbnN0IFBsdWdpbnMgPSBhd2FpdCBCQi5QbHVnaW5zLmhhcyhQbHVnaW4pO1xuLy8gXHRcdGF3YWl0IEJCLkNvbmZpZ3Muc2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycsIHsgdXJpOiAnaHR0cDovL2dyYXBocWwnIH0pO1xuXG4vLyBcdFx0Ly8gcmVuZGVyZXIuY3JlYXRlIChcbi8vIFx0XHQvLyBcdDxCQi5Db21wb25lbnRzLlF1ZXJ5Pilcbi8vIFx0XHQvLyA8L0JCLkNvbXBvbmVudHMuUXVlcnk+XG5cbi8vIFx0XHRCQi5ib290KCk7XG4vLyBcdFx0Y29uc29sZS5sb2coJ1BsdWdpbnM9PT09PicsIEJCLkNvbmZpZ3MuZ2V0VmFsdWUoJ3BsdWdpbnMuYXBvbGxvLmh0dHBMaW5rT3B0aW9ucycpKTtcbi8vIFx0XHRjb25zdCBodHRwTGlua09wdGlvbnMgPSBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKTtcbi8vIFx0XHRleHBlY3QoaHR0cExpbmtPcHRpb25zKS50b0VxdWFsKHt1cmk6ICdodHRwOi8vZ3JhcGhxbCd9KTtcblx0XHRcbi8vIFx0fSk7XG4vLyB9KTtcblxuIl0sInZlcnNpb24iOjN9