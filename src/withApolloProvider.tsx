import * as React from 'react';

import { ApolloClient, ApolloProvider } from '@apollo/client';

export default (client: ApolloClient<{}>) => (App: React.ComponentType) => (props: any) => {
	return (
		<ApolloProvider client={client}>
			<App {...props} />
		</ApolloProvider>
	);
};
