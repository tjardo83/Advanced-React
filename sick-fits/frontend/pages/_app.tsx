import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { NextPageContext } from 'next';
import App, { AppContext, AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Page from '../components/Page';
import withData from '../lib/withData';

interface Props extends AppProps {
  apollo: ApolloClient<InMemoryCache>;
}

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps, apollo }: Props) => (
  <ApolloProvider client={apollo}>
    <Page>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </Page>
  </ApolloProvider>
);

type MyAppProps = AppContext & NextPageContext;

MyApp.getInitialProps = async ({ Component, ctx }: MyAppProps) => {
  let pageProps: { query?: NextPageContext['query'] } = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default withData(MyApp);
