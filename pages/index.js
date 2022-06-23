import dynamic from "next/dynamic";

const Title = dynamic(() => import("../components/Title"), { ssr: false });

import Body from "../components/Body";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nathan {"Mayall's"} Portfolio. Hi!</title>
      </Head>
      <Title />
      <Body />
      <Footer />
    </>
  );
}
