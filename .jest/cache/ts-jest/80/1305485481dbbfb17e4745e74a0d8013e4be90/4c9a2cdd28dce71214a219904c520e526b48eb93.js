"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const index_1 = tslib_1.__importDefault(require("../index"));
const react_native_1 = require("react-native");
// import WithApolloProvider from '../withApolloProvider';
const react_1 = tslib_1.__importDefault(require("react"));
const enzyme_1 = require("enzyme");
// import { waitForElement } from 'enzyme-async-helpers';
const CustomText = () => react_1.default.createElement(react_native_1.Text, null, "Everything is ok!");
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
});
test('Plugin should throw error if httpLinkOptions config is not given', (done) => {
    const wrapper = enzyme_1.mount(react_1.default.createElement(core_1.BlueBaseApp, { plugins: [index_1.default] },
        react_1.default.createElement(CustomText, null)));
    setTimeout(() => {
        expect(wrapper).toMatchSnapshot();
        done();
    });
});
// test('Plugin correctly registered', async () => {
// 	const wrapper = mount(
// 		<BlueBaseApp plugins={[Plugin]}>
// 			<CustomText />
// 		</BlueBaseApp>
// 	);
// 	await waitForElement(wrapper, CustomText);
// 	expect(wrapper).toMatchSnapshot();
// });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUNBQXVEO0FBQ3ZELDZEQUE4QjtBQUM5QiwrQ0FBb0M7QUFDcEMsMERBQTBEO0FBQzFELDBEQUEwQjtBQUMxQixtQ0FBK0I7QUFDL0IseURBQXlEO0FBRXpELE1BQU0sVUFBVSxHQUFHLEdBQUcsRUFBRSxDQUFDLDhCQUFDLG1CQUFJLDRCQUF5QixDQUFDO0FBRXhELElBQUksQ0FBQyw2QkFBNkIsRUFBRSxLQUFLLElBQUksRUFBRTtJQUM5QyxNQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDO0lBQzFCLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsZUFBTSxDQUFDLENBQUM7SUFFbEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDdEQsQ0FBQyxDQUFDLENBQUM7QUFHSCxJQUFJLENBQUMsa0VBQWtFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtJQUVqRixNQUFNLE9BQU8sR0FBRyxjQUFLLENBQ3BCLDhCQUFDLGtCQUFXLElBQUMsT0FBTyxFQUFFLENBQUMsZUFBTSxDQUFDO1FBQzdCLDhCQUFDLFVBQVUsT0FBRyxDQUNELENBQ2QsQ0FBQztJQUVGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7UUFDZixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDbEMsSUFBSSxFQUFFLENBQUM7SUFFUixDQUFDLENBQUMsQ0FBQztBQUNKLENBQUMsQ0FBQyxDQUFDO0FBR0gsb0RBQW9EO0FBRXBELDBCQUEwQjtBQUMxQixxQ0FBcUM7QUFDckMsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQixNQUFNO0FBR04sOENBQThDO0FBQzlDLHNDQUFzQztBQUN0QyxNQUFNO0FBR04sa0JBQWtCO0FBQ2xCLDhEQUE4RDtBQUU5RCx3Q0FBd0M7QUFDeEMsTUFBTTtBQU1OLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFFL0MsK0JBQStCO0FBQy9CLHVDQUF1QztBQUN2QyxpQ0FBaUM7QUFDakMsa0RBQWtEO0FBQ2xELDRGQUE0RjtBQUU1Rix5QkFBeUI7QUFDekIsK0JBQStCO0FBQy9CLDhCQUE4QjtBQUU5QixlQUFlO0FBQ2Ysd0ZBQXdGO0FBQ3hGLG1GQUFtRjtBQUNuRiw4REFBOEQ7QUFFOUQsT0FBTztBQUNQLE1BQU0iLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL2hvbWUvbXV6emFtaWwvRG9jdW1lbnRzL2Fwb2xsby9wbHVnaW4tYXBvbGxvL3NyYy9fX3Rlc3RzX18vaW5kZXgudGVzdC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmx1ZUJhc2UsIEJsdWVCYXNlQXBwIH0gZnJvbSAnQGJsdWViYXNlL2NvcmUnO1xuaW1wb3J0IFBsdWdpbiBmcm9tICcuLi9pbmRleCc7XG5pbXBvcnQgeyBUZXh0IH0gZnJvbSAncmVhY3QtbmF0aXZlJztcbi8vIGltcG9ydCBXaXRoQXBvbGxvUHJvdmlkZXIgZnJvbSAnLi4vd2l0aEFwb2xsb1Byb3ZpZGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG4vLyBpbXBvcnQgeyB3YWl0Rm9yRWxlbWVudCB9IGZyb20gJ2VuenltZS1hc3luYy1oZWxwZXJzJztcblxuY29uc3QgQ3VzdG9tVGV4dCA9ICgpID0+IDxUZXh0PkV2ZXJ5dGhpbmcgaXMgb2shPC9UZXh0PjtcblxudGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRjb25zdCBCQiA9IG5ldyBCbHVlQmFzZSgpO1xuXHRhd2FpdCBCQi5QbHVnaW5zLnJlZ2lzdGVyKFBsdWdpbik7XG5cblx0ZXhwZWN0KEJCLlBsdWdpbnMuaGFzKCdwbHVnaW4tYXBvbGxvJykpLnRvQmVUcnV0aHkoKTtcbn0pO1xuXG4gXG50ZXN0KCdQbHVnaW4gc2hvdWxkIHRocm93IGVycm9yIGlmIGh0dHBMaW5rT3B0aW9ucyBjb25maWcgaXMgbm90IGdpdmVuJywgKGRvbmUpID0+IHtcblx0XG5cdGNvbnN0IHdyYXBwZXIgPSBtb3VudChcblx0XHQ8Qmx1ZUJhc2VBcHAgcGx1Z2lucz17W1BsdWdpbl19PlxuXHRcdFx0PEN1c3RvbVRleHQgLz5cblx0XHQ8L0JsdWVCYXNlQXBwPlxuXHQpO1xuXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKTtcblx0XHRkb25lKCk7XG5cdFx0XG5cdH0pO1xufSk7XG5cblxuLy8gdGVzdCgnUGx1Z2luIGNvcnJlY3RseSByZWdpc3RlcmVkJywgYXN5bmMgKCkgPT4ge1xuXHRcbi8vIFx0Y29uc3Qgd3JhcHBlciA9IG1vdW50KFxuLy8gXHRcdDxCbHVlQmFzZUFwcCBwbHVnaW5zPXtbUGx1Z2luXX0+XG4vLyBcdFx0XHQ8Q3VzdG9tVGV4dCAvPlxuLy8gXHRcdDwvQmx1ZUJhc2VBcHA+XG4vLyBcdCk7XG5cblx0XG4vLyBcdGF3YWl0IHdhaXRGb3JFbGVtZW50KHdyYXBwZXIsIEN1c3RvbVRleHQpO1xuLy8gXHRleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KCk7XG4vLyB9KTtcblxuXG4vLyBsZXQgY2xpZW50OmFueTtcbi8vIHRlc3QoJ1BsdWdpbiBzaG91bGQgYmUgY29ycmVjdGx5IHJlZ2lzdGVyZWQnLCBhc3luYyAoKSA9PiB7XG5cdCBcbi8vIFx0XHQgV2l0aEFwb2xsb1Byb3ZpZGVyKGNsaWVudCBhcyBhbnkpO1xuLy8gfSk7XG5cblxuXG5cblxuLy8gZGVzY3JpYmUoJ0Fwb2xsbyBQbHVnaW4gdGVzdCcsICgpID0+IHtcbi8vIFx0aXQoJ1Rlc3Qgd2l0aCBBcG9sbG8gQ29uZmlnJywgYXN5bmMgKCkgPT4ge1xuXHRcdFxuLy8gXHRcdGNvbnN0IEJCID0gbmV3IEJsdWVCYXNlKCk7XG4vLyBcdFx0YXdhaXQgQkIuUGx1Z2lucy5yZWdpc3RlcihQbHVnaW4pO1xuLy8gXHRcdC8vIEFwb2xsb1BsdWdpbi5nZXRDbGllbnQoKTtcbi8vIFx0XHRjb25zdCBQbHVnaW5zID0gYXdhaXQgQkIuUGx1Z2lucy5oYXMoUGx1Z2luKTtcbi8vIFx0XHRhd2FpdCBCQi5Db25maWdzLnNldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnLCB7IHVyaTogJ2h0dHA6Ly9ncmFwaHFsJyB9KTtcblxuLy8gXHRcdC8vIHJlbmRlcmVyLmNyZWF0ZSAoXG4vLyBcdFx0Ly8gXHQ8QkIuQ29tcG9uZW50cy5RdWVyeT4pXG4vLyBcdFx0Ly8gPC9CQi5Db21wb25lbnRzLlF1ZXJ5PlxuXG4vLyBcdFx0QkIuYm9vdCgpO1xuLy8gXHRcdGNvbnNvbGUubG9nKCdQbHVnaW5zPT09PT4nLCBCQi5Db25maWdzLmdldFZhbHVlKCdwbHVnaW5zLmFwb2xsby5odHRwTGlua09wdGlvbnMnKSk7XG4vLyBcdFx0Y29uc3QgaHR0cExpbmtPcHRpb25zID0gQkIuQ29uZmlncy5nZXRWYWx1ZSgncGx1Z2lucy5hcG9sbG8uaHR0cExpbmtPcHRpb25zJyk7XG4vLyBcdFx0ZXhwZWN0KGh0dHBMaW5rT3B0aW9ucykudG9FcXVhbCh7dXJpOiAnaHR0cDovL2dyYXBocWwnfSk7XG5cdFx0XG4vLyBcdH0pO1xuLy8gfSk7XG5cbiJdLCJ2ZXJzaW9uIjozfQ==