import { BlueBase, 
	// BlueBaseApp 
} from '@bluebase/core';
import Plugin from '../index';
// import { Text } from 'react-native';
import WithApolloProvider from '../withApolloProvider';
// import React from 'react';
// import { mount } from 'enzyme';
// import { waitForElement } from 'enzyme-async-helpers';
// import { sample } from '../__mocks__/index'
// import { waitForElement } from 'enzyme-async-helpers';
// const CustomText = () => <Text>Everything is ok!</Text>;
//  import {HttpLink} from 'apollo-link-http';


//working and tested
test('Plugin correctly registered', async () => {
	
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);
	
	// console.log('imported{}===>',{HttpLink})
	// console.log('imported===>',HttpLink)

	expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
});

let client:any;
test('Plugin apolloProvider working', async () => {

		 WithApolloProvider(client as any);
});

//working httplink options
	test('Test with Apollo Config', async () => {

		const BB = new BlueBase();
		await BB.Plugins.register(Plugin);
		await BB.Configs.setValue('plugins.apollo.httpLinkOptions', { uri: 'http://graphql' });

		BB.boot();
		console.log('Plugins====>', BB.Configs.getValue('plugins.apollo.httpLinkOptions'));
		const httpLinkOptions = BB.Configs.getValue('plugins.apollo.httpLinkOptions');
		expect(httpLinkOptions).toEqual({uri: 'http://graphql'});

	});

//working and tested
test('Plugin should throw error if httpLinkOptions config is not given', async () => {

	const BB = new BlueBase();
	
	await BB.Plugins.register(Plugin);
	let message;
	try {
		await BB.boot();

	} catch (error) {
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



