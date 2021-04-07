import Title from "../components/Title";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nathan Mayall's Portfolio. Hi!</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Title />
      <Body />
      <Footer />
    </>
  );
}
