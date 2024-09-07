import Style from "@/styles/Home.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fake Post</title>
      </Head>
      <h1 className={Style.text}>WELCOME TO MY FIRST FAKE POST</h1>
    </>
  );
}
