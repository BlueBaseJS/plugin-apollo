import 'cross-fetch/polyfill';
import * as React from 'react';
import { BlueBase, BlueBaseApp } from '@bluebase/core';
import { HomeScreen } from '@bluebase/core/dist/components';
import Plugin from '../index';
import fetch from 'unfetch';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

// working and tested
test('Plugin correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);
	expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
});

// working httplink options
test('Test with Apollo Config', async () => {

	const BB = new BlueBase();

	await BB.Plugins.register(Plugin);
	await BB.Configs.setValue('plugins.apollo.httpLinkOptions', {
		httpLinkOptions: { uri: 'http://graphql', fetch: fetch },
	});

	const component = mount(
		<BlueBaseApp BB={BB} />
	);

	await waitForElement(component as any, HomeScreen);

	// expect(component).toMatchSnapshot();

	expect(component.find('ApolloProvider')).toHaveLength(1);

});

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
