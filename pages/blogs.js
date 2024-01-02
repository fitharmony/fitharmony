import Layout from "../components/Layout";
import Head from "next/head";
import Footer from "../components/Footer";
import PageIntro from "../components/BlogIntro";
import BlogList from "../components/BlogList";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";

function BlogPage() {
  return (
    <main>
      <Head>
        <title>Body Blogs</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Explore our wide range of fitness and wellness blogs covering various topics to help you on your wellness journey."
        />
      </Head>
      <Layout showGradient={false} navTheme="white">
        <PageIntro
          title="FitHarmony Blogs"
          description="Embark on a wellness journey with our collection of informative and engaging fitness blogs. Explore a wide range of topics, including holistic well-being, nutrition, mental health, exercise, and more. Find valuable insights and expert advice to guide you towards a healthier and happier life."
          variant="blogs"
        />
        {/* </Link>s */}
        <section>
          {/* Button to view random blog */}
          {/* <Link href="/blogs/[id]" as={`/blogs/${"randomBlogId"}`} className=""> */}
          <button className="dark-variant" style={{ marginBottom: "1em" }}>
            View Random Blog
            <FontAwesomeIcon icon={faDice} className="fa-icon" />
          </button>
          <BlogList variant="full" shuffleBlogs />
        </section>
      </Layout>
      <Footer />
    </main>
  );
}

export default BlogPage;
