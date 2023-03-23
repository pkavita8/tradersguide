import styles from "../assets/styles/Home.module.css";
import { Footer, Navbar } from "../components";
import About from "../modules/About.js";
import React from "react";

export default function AboutUs() {
  return (
    <main className={styles.main}>
      <Navbar />
      <About/>
      <Footer />
    </main>
  );
}
