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
const apollo_link_http_1 = tslib_1.__importDefault(require("apollo-link-http"));
// import { sample } from '../__mocks__/index'
// import { waitForElement } from 'enzyme-async-helpers';
// const CustomText = () => <Text>Everything is ok!</Text>;
// import HttpLink from 'apollo-link-http';
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
    // const {HttpLink}  = jest.mock('apollo-link-http');
    const httpLink = new apollo_link_http_1.default.HttpLink;
    console.log('original===>', httpLink);
    await BB.Filters.run("bluebase.boot.end", [httpLink]);
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
