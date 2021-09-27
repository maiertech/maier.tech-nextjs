import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="text-text-default bg-background">
          <Main />
          <NextScript />
          <script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon='{"token": "a5e48e0b3ccc47cdb9f9f26b192affa0"}'
          ></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
