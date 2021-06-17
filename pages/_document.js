import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <Script
            data-domain="nathanmayall.com"
            src="https://stats.nathanmayall.com/js/plausible.js"
          />
          <Script src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "1f4d556aff2e42429eb59b3ef770906f"}'
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body className="font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
