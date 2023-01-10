import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../assets/styles/Home.module.css";
import { Navbar, Footer } from "../components";
import Home from "../modules/Home";

const inter = Inter({ subsets: ["latin"] });

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Stock Market Advisory | Traders Guide</title>
        <meta
          name="description"
          content="stock market advisory,  traders guide"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Home/>
        <Footer/>
      </main>
    </>
  );
}
