import styles from "../assets/styles/Home.module.css";
import { Footer, Navbar } from "../components";
import CoursesMain from "../modules/Courses";
import React from "react";

export default function Courses() {
  return (
    <main className={styles.main}>
      <Navbar />
      <CoursesMain/>
      <Footer />
    </main>
  );
}
