import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Welcome to the official ZaZa PlaZa&nbsp;
          <code className={styles.code}>server site</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://zazaplaza.vercel.app/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Server Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about our discord server.</p>
        </a>

        <a
          href="https://zazaplaza.vercel.app/rules"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Server Rules <span>-&gt;</span>
          </h2>
          <p>Make sure to read our server rules. Breaking one of our rules can lead into a&nbsp;ban!</p>
        </a>

        <a
          href="https://zazaplaza.vercel.app/informationserver/Server%20Economy"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Server Economy <span>-&gt;</span>
          </h2>
          <p>Explore all our economy system commands, and look what's in the server shop</p>
        </a>

        <a
          href="https://discord.com/invite/Yx75qwk2n9"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Discord <span>-&gt;</span>
          </h2>
          <p>
            Make sure to join our discord server! We have a lot of fun and cool stuff to do in our server!
          </p>
        </a>
      </div>
    </main>
  );
}
