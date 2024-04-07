import Head from "next/head";
import Menu from "@/components/Menu";

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
        <h1>Bem-vindo!</h1>
      </main>
    </>
  );
}
