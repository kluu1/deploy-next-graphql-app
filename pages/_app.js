import App from "next/app";
import { ApolloProvider } from '@apollo/react-hooks';
import withData from '../utils/apollo-client';

class MyApp extends App {
  render() {
    const { Component, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component />
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
