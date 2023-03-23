import styles from "../assets/styles/Home.module.css";
import { Footer, Navbar } from "../components";
import OptionsMultiplier from "../modules/Courses/OptionsMultiplier.js";
import React from "react";

export default function Course1() {
  return (
    <main className={styles.main}>
      <Navbar />
      <OptionsMultiplier />
      <Footer />
    </main>
  );
}
