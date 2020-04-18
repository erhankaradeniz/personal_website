import React from "react"
import Head from "next/head"
import { DefaultSeo } from "next-seo"

import SEO from "../next-seo.config"

import "../public/css/global.css"

const App = ({ Component, pageProps }) => {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
