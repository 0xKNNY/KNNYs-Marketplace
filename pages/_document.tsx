import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        {/* Must  */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Reservoir" />
        <meta name="keywords" content="nft, ethereum, protocol" />
        <link rel="shortcut icon" type="image/svg" href="/reservoir.svg" />
        <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
        <title>
          The permissionless, self-deployed KNNY market.
        </title>
        <meta
          name="description"
          content="The permissionless, self-deployed KNNY market."
        />
        <meta name="keywords" content="NFT, API, Protocol" />
        {/* Twitter */}
        {/* The optimal size is 1200 x 630 (1.91:1 ratio). */}
        <meta
          name="twitter:image"
          content="https://freight.cargo.site/t/original/i/f9491b8f8f2cd2e5cf692b1756958c3340b6f3b81701f5216551bffa862f9eab/Untitled_Artwork-69.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site:domain"
          content="http://knny.vercel.app"
        />
        <meta name="twitter:url" content="http://knny.vercel.app" />
        {/* should be between 30-60 characters, with a maximum of 70 */}
        <meta
          name="twitter:title"
          content="The permissionless, self-deployed KNNY market."
        />
        {/* should be between 55 and 200 characters long */}
        <meta
          name="twitter:description"
          content="The Permissionless, self-deployed KNNY market."
        />
        <meta name="twitter:site" content="@0xKNNY" />

        {/* OG - https://ogp.me/ */}
        {/* https://www.opengraph.xyz/ */}
        {/* should be between 30-60 characters, with a maximum of 90 */}
        <meta
          name="og:title"
          content="The permissionless, self-deployed KNNY market."
        />
        <meta property="og:type" content="website" />
        <meta property="og:determiner" content="the" />
        <meta property="og:locale" content="en" />
        {/* Make sure the important part of your description is within the first 110 characters, so it doesn't get cut off on mobile. */}
        <meta
          property="og:description"
          content="The permissionless, self-deployed KNNY market."
        />
        <meta property="og:site_name" content="KNNY Market" />
        <meta property="og:url" content="https://www.knny.vercel.app/" />
        {/* The optimal size is 1200 x 630 (1.91:1 ratio). */}
        <meta
          property="og:image"
          content="https://freight.cargo.site/t/original/i/f9491b8f8f2cd2e5cf692b1756958c3340b6f3b81701f5216551bffa862f9eab/Untitled_Artwork-69.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="KNNY Market banner" />
        <body className="bg-[#121212] text-neutral-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
