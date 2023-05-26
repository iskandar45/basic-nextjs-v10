import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Layout from "../components/Layout"

export default function Home() {
  return (
    <>
      <Layout pageTitle="HomePage">
        <h1>Welcome Iskandar</h1>
        <Image src="/br_icon.png" alt="image compress" width={200} height={200} />
        <img src="/br_icon.png" alt="image ori" width={200} height={200} />
        {/* lihat di console , maka image dari next js file nya lebih kecil jadi lebih cepat proces nya */}
        {/* ada fitur lazy load, jadi proses loading lebih cepat */}
      </Layout>
    </>
  )
}
