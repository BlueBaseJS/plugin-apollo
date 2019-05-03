"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_1 = require("@bluebase/core");
const index_1 = tslib_1.__importDefault(require("../index"));
const unfetch_1 = tslib_1.__importDefault(require("unfetch"));
const enzyme_async_helpers_1 = require("enzyme-async-helpers");
require("cross-fetch/polyfill");
const App_1 = tslib_1.__importDefault(require("../App"));
const React = tslib_1.__importStar(require("react"));
const enzyme_1 = require("enzyme");
// working and tested
test('Plugin correctly registered', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    expect(BB.Plugins.has('plugin-apollo')).toBeTruthy();
});
//working httplink options
test('Test with Apollo Config', async () => {
    const BB = new core_1.BlueBase();
    await BB.Plugins.register(index_1.default);
    await BB.Configs.setValue('plugins.apollo.httpLinkOptions', {
        httpLinkOptions: { uri: 'http://graphql', fetch: unfetch_1.default },
    });
    await BB.boot();
    const component = enzyme_1.mount(React.createElement(core_1.BlueBaseApp, { configs: {
            'plugins.apollo.httpLinkOptions': {
                httpLinkOptions: { uri: 'http://graphql', fetch: unfetch_1.default },
            },
        }, plugins: [index_1.default] },
        React.createElement(App_1.default, null)));
    await enzyme_async_helpers_1.waitForElement(component, App_1.default);
    // expect(component).toMatchSnapshot();
    const httpLinkOptions = BB.Configs.getValue('plugins.apollo.httpLinkOptions');
    expect(httpLinkOptions).toEqual({ httpLinkOptions: { uri: 'http://graphql', fetch: unfetch_1.default } });
});
// working and tested
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
