"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_apollo_1 = require("react-apollo");
exports.default = (client) => (App) => (props) => {
    return (React.createElement(react_apollo_1.ApolloProvider, { client: client },
        React.createElement(App, Object.assign({}, props))));
};
