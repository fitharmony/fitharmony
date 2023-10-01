import Head from "next/head";
import Layout from "../components/Layout";
import HomeIntro from "../components/HomeIntro";
import HomeExerciseList from "../components/HomeExerciseList";
import BlogList from "../components/BlogList";

export default function Home() {
  return (
    <main>
      <Head>
        <title>BodyBits | Exercise Database</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <HomeIntro />
        <HomeExerciseList />
      </Layout>

      <BlogList />
    </main>
  );
}
