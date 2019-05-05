import 'cross-fetch/polyfill';
import * as React from 'react';
import { BlueBase, BlueBaseApp } from '@bluebase/core';
import { HomeScreen } from '@bluebase/core/dist/components';
import Plugin from '../index';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

test('Plugin correctly registered', async () => {
	const BB = new BlueBase();
	await BB.Plugins.register(Plugin);
	expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
});

test('Test with Apollo Config', async () => {

	const component = mount(
		<BlueBaseApp plugins={[Plugin]} />
	);

	await waitForElement(component as any, HomeScreen);

	expect(component.find('ApolloProvider')).toHaveLength(1);
});
