import Head from "next/head"
import Menu from "@/components/Menu"
import AboutContent from "@/components/AboutContent"

export default function About() {
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
        <AboutContent />
      </main>
    </>
  );
}
