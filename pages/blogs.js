import Layout from "../components/Layout";
import Head from "next/head";
import Footer from "../components/Footer";
import PageIntro from "../components/BlogIntro";
import BlogList from "../components/BlogList";
import blogList from "../public/blogs.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

function BlogPage() {
  return (
    <main>
      <Head>
        <title>Explore Our Fitness and Wellness Blogs - FitHarmony</title>
        <meta
          name="description"
          content="Explore a collection of fitness and wellness blogs at FitHarmony. Discover articles on nutrition, exercise, mental health, and more for a healthier lifestyle."
        />
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
          <RandomBlogButton blogList={blogList.blogList} />
          <BlogList variant="full" />
        </section>
      </Layout>
      <Footer />
    </main>
  );
}

function RandomBlogButton({ blogList }) {
  // Get the Next.js router object
  const router = useRouter();

  // Function to handle the "View Random Blog" button click
  const handleRandomBlogClick = () => {
    // Generate a random index within the range of the blogList array
    const randomIndex = Math.floor(Math.random() * blogList.length);

    // Get the title of the randomly selected blog
    const randomBlogTitle = encodeURIComponent(
      blogList[randomIndex].title
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/:/g, "") // Remove colons
        .replace(/,/g, "") // Remove commas
        .toLowerCase() // Convert to lowercase
    );

    // Navigate to the selected blog's page
    router.push(`/blog/${randomBlogTitle}`);
  };

  return (
    <button
      className="dark-variant"
      style={{ marginBottom: "1em" }}
      onClick={handleRandomBlogClick}
    >
      View Random Blog
      <FontAwesomeIcon icon={faDice} className="fa-icon" />
    </button>
  );
}

export default BlogPage;
