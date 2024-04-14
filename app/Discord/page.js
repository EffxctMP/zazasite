import Image from "next/image";
import styles from "./page.module.css";

export default function DiscordS() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Discord Server
        </p>
        <div>
          <a
            href="https://discord.gg/Yx75qwk2n9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/zazalogo.png"
              alt="ZaZa Logo"
              className={styles.zazalogo}
              width={100}
              height={40}
              priority
            />
          </a>
        </div>
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
