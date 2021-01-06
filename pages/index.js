import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Testing of git images goes here.</h1>
      <div
        style={{
          width: "500px",
          height: "500px",
          backgroundColor: "orange",
          position: "relative",
          borderRadius: "20px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/image.jpg"
          layout="fill"
          // loading="lazy"
          alt="Picture of scene"
          priority={true}
        />
      </div>
    </div>
  );
}
