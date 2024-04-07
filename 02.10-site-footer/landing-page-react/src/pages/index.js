import Head from "next/head"
import Menu from "@/components/Menu"
import HomeTop from "@/components/HomeTop"
import HomeServices from "@/components/HomeServices"
import HomePremium from "@/components/HomePremium"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>Neotech</title>
        <meta name="description" content="Landing page com React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <HomeTop />
        <HomeServices />
        <HomePremium />
      </main>
      <Footer />
    </>
  );
}
