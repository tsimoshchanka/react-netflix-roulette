import App, { Container } from 'next/app';
import withRedux from 'next-redux-wrapper';
import { JssProvider, SheetsRegistry } from 'react-jss';
import configureStore from '../reduxSetup/configureStore';
import ProviderWrapper from '../reduxSetup/ProviderWrapper';

class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
        const pageProps = Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {};

        return { pageProps };
    }

    render() {
        const { Component, pageProps, store } = this.props;
        const sheets = new SheetsRegistry();

        return (
            <Container>
                <JssProvider registry={sheets}>
                    <ProviderWrapper store={store}>
                        <Component {...pageProps} />
                    </ProviderWrapper>
                </JssProvider>
            </Container>
        );
    }
}

export default withRedux(configureStore)(MyApp);
