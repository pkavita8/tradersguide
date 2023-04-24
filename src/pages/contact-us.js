import { Inter } from "@next/font/google";
import styles from "../assets/styles/Home.module.css";
import { Footer, Navbar } from "../components";
import Contact from "../modules/Contact";

const inter = Inter({ subsets: ["latin"] });

export default function ContactUs() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Contact/>
      <Footer />
    </main>
  );
}
