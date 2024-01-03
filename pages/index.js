import Head from "next/head";
import Layout from "../components/Layout";
import HomeIntro from "../components/HomeIntro";
import BlogList from "../components/BlogList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Head>
        <title>FitHarmony | Your Source for Wellness and Fitness</title>
        <meta
          name="description"
          content="Discover a world of wellness and fitness at FitHarmony. Explore articles, tips, and insights on nutrition, exercise, mental health, and more for a healthier life."
        />
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
        {/* <HomeExerciseList /> */}
      </Layout>

      <BlogList />
      <Footer />
    </main>
  );
}
