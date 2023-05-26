import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Layout from "../components/Layout"
const Custom404 = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 2000)
  }, [])

  return (
    <Layout pageTitle="Not Found">
      <h1>Ooops....</h1>
      <div>Ooops.... Halaman tidak ditemukan</div>
    </Layout>
  )
}

export default Custom404
