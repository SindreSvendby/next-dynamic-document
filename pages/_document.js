// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const page = ctx.renderPage();
    const simplePage = ctx && ctx.query && ctx.query.simple === "true";
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, simplePage };
  }

  render() {
    return (
      <html>
        {!this.props.simplePage && (
          <Head>
            <style>{`body { margin: 0 } /* custom! */`}</style>
          </Head>
        )}
        <body className="custom_class">
          <Main />
          {!this.props.simplePage && <NextScript />}
        </body>
      </html>
    );
  }
}
