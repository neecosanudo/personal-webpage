import Heading from "@components/Title";
import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nicolás Sañudo</title>
      </Head>
      <Heading text="Home Page" />
    </div>
  );
};

export default Home;
