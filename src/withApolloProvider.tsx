import { ApolloClient, ApolloProvider } from '@apollo/client';
import * as React from 'react';

export default (client: ApolloClient<{}>) => (App: React.ComponentType) => (props: any) => {
	return (
		<ApolloProvider client={client}>
			<App {...props} />
		</ApolloProvider>
	);
};
