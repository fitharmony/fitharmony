import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import data from "../../public/blogs.json";
import Footer from "../../components/Footer";
import PageIntro from "../../components/BlogIntro";
import AuthorDateCtr from "../../components/AuthorDateCtr";
import BlogList from "../../components/BlogList";
import Disclaimer from "../../components/Disclaimer";
import { useEffect, useState } from "react";

function BlogPage() {
  const router = useRouter();
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    if (!router.isReady) return;

    const title = router.query.title;
    const blog =
      data.blogList.find(
        (blog) =>
          encodeURIComponent(
            blog.title
              .replace(/\s+/g, "-") // Replace spaces with hyphens
              .replace(/:/g, "") // Remove colons
              .replace(/,/g, "") // Remove commas
              .toLowerCase() // Convert to lowercase
          ) === title
      ) || data.blogList[0];
    setSelectedBlog(blog);
  }, [router.isReady, router.query.title]);

  if (!selectedBlog) {
    return <div>Loading...</div>; // Or any other placeholder content
  }

  return (
    <main>
      <Head>
        <title>
          {`${selectedBlog.titleTag}` || "FitHarmony | Exercise Database"}
        </title>
        <meta name="description" content={selectedBlog.metaDescription} />
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800&family=Rubik:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout navTheme="white" showGradient={false}>
        <article>
          <PageIntro
            title={selectedBlog.title}
            category={selectedBlog.category}
            description={selectedBlog?.introParagraph}
            imageUrl={selectedBlog.imageUrl}
          />
          <AuthorDateCtr
            author={selectedBlog.author}
            date={selectedBlog["date-posted"]}
          />
          <Disclaimer />

          <div className="blog-content">
            {selectedBlog.content.map((content) => {
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

          <aside>
            <div className="container">
              <h3>[VIEW SIMILAR BLOGS]</h3>
              <BlogList
                variant="full"
                filterBlogs={selectedBlog.title}
                shuffleBlogs={true}
                count={4}
              />
            </div>
          </aside>
        </article>
      </Layout>
      <Footer />
    </main>
  );
}

export default BlogPage;
