import { BlueBase } from '@bluebase/core';
import Plugin from '../index';
// import WithApolloProvider from '../withApolloProvider';
  
test('Plugin correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);

	expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
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

