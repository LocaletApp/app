import { Head as BlitzHead } from "blitz"
import { theme } from "../../theme"

export interface HeadProps {
  title?: string
}

const DEFAULT_TITLE = "Localet App"
const DEFAULT_DESC = "Buy and Sell Locally from the comfort of your mobile phone or computer."

export const Head = ({ title = DEFAULT_TITLE }: HeadProps) => (
  <BlitzHead>
    <title>{title}</title>

    <meta charSet="utf-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="theme-color" content={theme.colors.brand.primary["100"]} />
    <meta name="mobile-web-app-capable" content="no" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <meta name="twitter:title" content={title} />
    <meta name="og:title" content={title} />

    <meta name="description" content={DEFAULT_DESC} />
    <meta name="twitter:description" content={DEFAULT_DESC} />
    <meta name="og:description" content={DEFAULT_DESC} />

    <meta name="twitter:site" content="@LocaletApp" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:image" content="/social-preview.png" />
    <meta property="og:image" content="/social-preview.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/png" />

    <meta name="og:type" content="website" />
    <meta name="og:url" content="https://localet.app" />
    <meta name="og:site_name" content="Localet.app" />
  </BlitzHead>
)
