import React, { ReactNode } from "react"
import Header from "../Header"
import Footer from "../Footer"
import Head from "next/head"

interface LayoutProps {
  children: ReactNode
  pageTitle: string
}
const Layout = (props: LayoutProps) => {
  const { children, pageTitle } = props
  return (
    <>
      <Head>
        <title>NextJS Basic | {pageTitle}</title>
        <meta name="description" content="Website NextJS" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
