import React from "react"
import { NextSeo } from "next-seo"

const IndexPage = () => {
  return (
    <>
      <NextSeo
        title={`Erhan Karadeniz`}
        description={`Personal website of Erhan Karadeniz here I blog and share tips about React.js, Next.js, Tailwindcss and more..`}
        canonical={`https://www.erhankaradeniz.com`}
      />
      <div className="flex flex-row max-w-screen-lg mx-auto mt-12 md:mt-48 px-4 md:px-0 mb-20">
        <div className="hidden md:block w-1/4"></div>
        <div className="w-full md:w-3/4">
          <h1 className="text-3xl font-bold">Erhan Karadeniz</h1>
          <h2 className="text-yellow-500 font-sans uppercase text-sm">
            Full Stack Engineer - The Netherlands
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold leading-tight py-12">
            Helping to push brands towards industry leadership by developing
            products and experiences that combine functionality with striking
            aesthetics.
          </h3>
          <p className="mb-8">
            Choosing the right partner can be a defining decision in the success
            of a company. With over 10 years of hands on experience and
            dedication have resulted in practice to develop award-winning,
            extensible websites. By combining skills as diverse as creative
            direction and user experience design with interactive designs, I am
            able to offer a fundamentally different web development service; one
            that is inherently ergonomic, and more user-efficient.
          </p>
          <p className="mb-8"></p>
          <p className="mb-8">
            I run an independent web design/development "studio", and as such,
            my success is dependent upon the success of my clients. I try to
            form tight relationships with organizations that partner with me and
            repay their trust with my expertise, consistency and operational
            flexibility.
          </p>

          <p>You can find me on the internet:</p>
          <ul>
            <li>
              <span>LinkedIn — </span>
              <a
                href="https://www.linkedin.com/in/erhankaradeniz/"
                target="_blank"
                rel="noopener"
                className="text-yellow-500 no-underline hover:underline"
                title="Erhan Karadeniz on LinkedIn"
              >
                in/erhankaradeniz/
              </a>
            </li>
            <li>
              <span>Twitter — </span>
              <a
                href="https://www.twitter.com/erhankaradeniz"
                target="_blank"
                rel="noopener"
                className="text-yellow-500 no-underline hover:underline"
                title="Erhan Karadeniz on Twitter"
              >
                @erhankaradeniz
              </a>
            </li>
            <li>
              <span>Github — </span>
              <a
                href="https://github.com/erhankaradeniz"
                target="_blank"
                rel="noopener"
                className="text-yellow-500 no-underline hover:underline"
                title="Erhan Karadeniz on Github"
              >
                erhankaradeniz
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto px-4 md:px-0 mb-12">
        <div className="w-full md:w-1/4">
          <span className="text-yellow-500 font-sans font-bold text-sm">
            CLIENT EXPERIENCE
          </span>
        </div>
        <div className="w-full md:w-3/4 flex flex-row">
          <div className="w-1/3">
            <ul className="text-sm leading-loose">
              <li>CZ Zorgzverzekeraar</li>
              <li>Supertrash</li>
              <li>Blink Educatie</li>
              <li>Serkan Aktürk</li>
              <li>Derya Açıkgöz</li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul className="text-sm leading-loose">
              <li>RTL Nederland</li>
              <li>Ay Yapim</li>
              <li>GNL Entertainment</li>
              <li>WRI.io</li>
              <li>Levent Dörter</li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul className="text-sm leading-loose">
              <li>Achmea</li>
              <li>Aegon</li>
              <li>DAO Group</li>
              <li>Hadise</li>
              <li>Videoland</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto px-4 md:px-0 mb-12">
        <div className="w-full md:w-1/4">
          <span className="text-yellow-500 font-sans font-bold text-sm">
            DEV TIPS
          </span>
        </div>
        <div className="w-full md:w-3/4">
          I try to tweet daily tips about{" "}
          <a
            href="https://nextjs.org"
            rel="noopener"
            title="Next.js Framework"
            target="_blank"
            className="text-yellow-500 no-underline hover:underline"
          >
            Next.js
          </a>
          . <br />
          You can find those tips on my{" "}
          <a
            href="https://twitter.com/erhankaradeniz"
            rel="noopener"
            target="_blank"
            title="Erhan Karadeniz on Twitter"
            className="text-yellow-500 no-underline hover:underline"
          >
            Twitter
          </a>{" "}
          account account, those tweets / tips can also be found on{" "}
          <a
            href="https://nextjstips.com/?ref=erhankaradeniz"
            rel="noopener"
            target="_blank"
            title="Next.js daily tips by Erhan Karadeniz"
            className="text-yellow-500 no-underline hover:underline"
          >
            nextjstips.com
          </a>
          .
        </div>
      </div>
      <div className="flex flex-col md:flex-row max-w-screen-lg mx-auto px-4 md:px-0 mb-12">
        <div className="w-full md:w-1/4">
          <span className="text-yellow-500 font-sans font-bold text-sm">
            BLOG
          </span>
        </div>
        <div className="w-full md:w-3/4 flex flex-row">
          Blog articles coming soon.. Stay tuned!
        </div>
      </div>
    </>
  )
}

export default IndexPage
