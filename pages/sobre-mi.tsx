import Heading from "@components/Title";
import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sobre Mí - Nicolás Sañudo</title>
      </Head>
      <Heading text="Sobre mí" />
    </>
  );
};

export default About;
