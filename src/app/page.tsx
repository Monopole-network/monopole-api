import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Logo"
          width={180}
          height={37}
          priority
        />
        <div className={styles.boxlogo}>
          <Image src="/boxlogo.svg" alt="13" width={40} height={31} priority />
        </div>
      </div>
      <a
        href="https://docs.monopole.network/"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Docs <span>-&gt;</span>
        </h2>
        <p className={inter.className}>Access to Monopole API.</p>
      </a>
    </main>
  );
}
