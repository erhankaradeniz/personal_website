import React from "react"
import { NextSeo } from "next-seo"

const IndexPage = () => {
  return (
    <>
      <NextSeo
        title={`Erhan Karadeniz`}
        description={`Personal website of Erhan Karadeniz where I showcase my project and blog about React.js, Next.js and more..`}
        canonical={`https://www.erhankaradeniz.com`}
      />
      <div>Erhan Karadeniz</div>
    </>
  )
}

export default IndexPage
