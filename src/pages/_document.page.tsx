import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&family=Spectral&display=swap"
            rel="stylesheet"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://i.imgur.com/mzVNiHV.png"
          />
        </Head>
        <Main />
        <NextScript />
      </Html>
    )
  }
}

export default MyDocument
