import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import data from "../../public/blogs.json";
import Link from "next/link";
import Footer from "../../components/Footer";
import BlogIntro from "../../components/BlogIntro";

function BlogPage() {
  const router = useRouter();
  const { title } = router.query;

  // Fetch the specific blog data
  const selectedBlog =
    data.blogList.find((blog) => blog.title === title) || data.blogList[0];

  return (
    <main>
      <Head>
        <title>{selectedBlog.title || "BodyBits | Exercise Database"}</title>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout showNav={true} navTheme="white">
        <BlogIntro blogData={selectedBlog} />
      </Layout>
      <Footer />
    </main>
  );
}

export default BlogPage;
