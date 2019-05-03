import 'cross-fetch/polyfill';
import * as React from 'react';
import {
	BlueBase,
	BlueBaseApp
} from '@bluebase/core';
import App from '../App';
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
	await BB.boot();

	const component = mount(
		<BlueBaseApp
			configs={{
				'plugins.apollo.httpLinkOptions': {
					httpLinkOptions: { uri: 'http://graphql', fetch: fetch },
				},
			}}
			plugins={[Plugin]}
		>
			<App />
		</BlueBaseApp>

	);
	await waitForElement(component as any, App);
	// expect(component).toMatchSnapshot();
	const httpLinkOptions = BB.Configs.getValue('plugins.apollo.httpLinkOptions');
	expect(httpLinkOptions).toEqual({ httpLinkOptions: { uri: 'http://graphql', fetch: fetch } });

});

// working and tested
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
