// pages/blog/[title].js

import Layout from "../../components/Layout";
import Head from "next/head";
import data from "../../public/blogs.json";
import Footer from "../../components/Footer";
import PageIntro from "../../components/BlogIntro";
import AuthorDateCtr from "../../components/AuthorDateCtr";
import BlogList from "../../components/BlogList";
import Disclaimer from "../../components/Disclaimer";
import SocialsShare from "../../components/SocialsShare";

function BlogPage({ blog }) {
  // Modified to receive blog data as a prop
  // Remove the useEffect and router logic for fetching blog data
  // Test.

  return (
    <main>
      <Head>
        <title>{`${blog.titleTag}` || "FitHarmony | Exercise Database"}</title>
        <meta name="description" content={blog.metaDescription} />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KE9GPRXLWN"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              window.dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-KE9GPRXLWN");
          `,
          }}
        />
      </Head>
      <Layout navTheme="white" showGradient={false}>
        <article aria-labelledby="fitness-blog">
          <PageIntro
            title={blog.title}
            category={blog.category}
            description={blog?.introParagraph}
            imageUrl={blog.imageUrl}
          />
          <AuthorDateCtr author={blog.author} date={blog["date-posted"]} />
          <SocialsShare blogTitle={blog.title} />
          <Disclaimer />
          <div className="blog-content">
            {blog.content.map((content) => {
              return (
                <section key={content.subtitle}>
                  <h2>{content.subtitle}</h2>
                  {content.paragraphs.map((paragraph) => {
                    return <p>{paragraph}</p>;
                  })}
                  {content?.list && (
                    <ul>
                      {content.list.map((item) => {
                        return <li>{item}</li>;
                      })}
                    </ul>
                  )}
                </section>
              );
            })}
          </div>

          <aside className="container">
            <h3>[VIEW SIMILAR BLOGS]</h3>
            <BlogList
              variant="full"
              filterBlogsByTitleAndCategory={{
                title: blog.title,
                category: blog.category,
              }}
              count={4}
            />
          </aside>
        </article>
      </Layout>
      <Footer />
    </main>
  );
}

export async function getStaticPaths() {
  // Generate paths for all blog pages
  const paths = data.blogList.map((blog) => ({
    params: {
      title: encodeURIComponent(
        blog.title
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/:/g, "") // Remove colons
          .replace(/,/g, "") // Remove commas
          .toLowerCase() // Convert to lowercase
      ),
    },
  }));

  return {
    paths,
    fallback: false, // Show 404 for pages that don't match
  };
}

export async function getStaticProps({ params }) {
  // Fetch the specific blog data using params.title
  const blog = data.blogList.find(
    (blog) =>
      encodeURIComponent(
        blog.title
          .replace(/\s+/g, "-") // Replace spaces with hyphens
          .replace(/:/g, "") // Remove colons
          .replace(/,/g, "") // Remove commas
          .toLowerCase() // Convert to lowercase
      ) === params.title
  );
  return {
    props: { blog },
  };
}

export default BlogPage;
