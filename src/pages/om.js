import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../assets/styles/Home.module.css";
import { Navbar, Footer } from "../components";
import Home from "../modules/Home";
import OptionsMultiplier from "../modules/Courses/OptionsMultiplier.js";

const inter = Inter({ subsets: ["latin"] });

export default function Course1() {
  return (
    <main className={styles.main}>
      <Navbar />
      <OptionsMultiplier/>
      <Footer />
    </main>
  );
}
