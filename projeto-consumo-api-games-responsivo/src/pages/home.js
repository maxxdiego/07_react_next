import Head from "next/head";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";
import Container from "@/components/Container";
import Menu from "@/components/Menu";
import HomeContent from "@/components/HomeContent";
import Footer from "@/components/Footer";

export default function Homepage() {
  const { isAuthenticated } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Head>
        <title>The Games &copy; 2024</title>
        <meta
          name="description"
          content="Consumo em React de uma API de Games"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <Container>
          <HomeContent />
        </Container>
      </main>
      <Footer />
    </>
  );
}
