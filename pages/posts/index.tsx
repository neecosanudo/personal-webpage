import Heading from "@components/Title";
import type { NextPage } from "next";
import Head from "next/head";

const Posts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts" />
    </>
  );
};

export default Posts;
