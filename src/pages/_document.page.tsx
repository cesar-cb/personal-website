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
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://cesarboaventura.dev/" />
          <meta property="og:title" content="Cesar Boaventura" />
          <meta
            property="og:description"
            content="Cesar Boaventura, Front-End Engineer"
          />
          <meta property="og:image" content="https://i.imgur.com/m7tdsRY.png" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://cesarboaventura.dev/" />
          <meta property="twitter:title" content="Cesar Boaventura" />
          <meta
            property="twitter:description"
            content="Cesar Boaventura, Front-End Engineer"
          />
          <meta
            property="twitter:image"
            content="https://i.imgur.com/m7tdsRY.png"
          />
          <link
            rel="icon"
            type="image/png"
            href="https://i.imgur.com/mzVNiHV.png"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;1,400&family=Nunito:wght@600;700&display=swap"
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
