import * as React from 'react';

import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';

export default (client: ApolloClient<{}>) => (App: React.ComponentType) => (props: any) => {
	return (
		<ApolloProvider client={client}>
			<App {...props} />
		</ApolloProvider>
	);
};
