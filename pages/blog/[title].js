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
      data.blogList.find((blog) => blog.title === title) || data.blogList[0];
    setSelectedBlog(blog);
  }, [router.isReady, router.query.title]);

  if (!selectedBlog) {
    return <div>Loading...</div>; // Or any other placeholder content
  }

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
      <Layout navTheme="white" showGradient={false}>
        <article>
          <PageIntro
            title={selectedBlog.title}
            category={selectedBlog.category}
            description={selectedBlog.description}
            imageUrl={selectedBlog.imageUrl}
          />
          <AuthorDateCtr />
          <Disclaimer />

          <section className="blog-content">
            <p>
              In commodo lectus molestie massa aliquam vulputate. Pellentesque
              nec cursus ipsum, at malesuada enim. Nam hendrerit convallis nunc.
              Fusce sollicitudin ipsum sem, et dignissim tortor euismod id. In
              hac habitasse platea dictumst. Quisque ornare mi a justo pretium,
              in pretium metus cursus. Curabitur rutrum enim sit amet mi
              egestas, id efficitur ante cursus. Ut dignissim maximus tortor, in
              elementum lacus condimentum id. Integer vestibulum ornare massa,
              at venenatis ligula fermentum id. Integer a luctus enim. In
              commodo lectus molestie massa aliquam vulputate. Pellentesque nec
              cursus ipsum, at malesuada enim. Nam hendrerit convallis nunc.{" "}
              Fusce sollicitudin ipsum sem, et dignissim tortor euismod id. In
              hac habitasse platea dictumst. Quisque ornare mi a justo pretium,
              in pretium metus cursus. Curabitur rutrum enim sit amet mi
              egestas, id efficitur ante cursus. Ut dignissim maximus tortor, in
              elementum lacus condimentum id. Integer vestibulum ornare massa,
              at venenatis ligula fermentum id. Integer a luctus enim.
            </p>
            <br></br>
            <p>
              In commodo lectus molestie massa aliquam vulputate. Pellentesque
              nec cursus ipsum, at malesuada enim. Nam hendrerit convallis nunc.
              Fusce sollicitudin ipsum sem, et dignissim tortor euismod id. In
              hac habitasse platea dictumst. Quisque ornare mi a justo pretium,
              in pretium metus cursus. Curabitur rutrum enim sit amet mi
              egestas, id efficitur ante cursus. Ut dignissim maximus tortor, in
              elementum lacus condimentum id. Integer vestibulum ornare massa,
              at venenatis ligula fermentum id. Integer a luctus enim. In
              commodo lectus molestie massa aliquam vulputate. Pellentesque nec
              cursus ipsum, at malesuada enim. Nam hendrerit convallis nunc.{" "}
              Fusce sollicitudin ipsum sem, et dignissim tortor euismod id. In
              hac habitasse platea dictumst. Quisque ornare mi a justo pretium,
              in pretium metus cursus. Curabitur rutrum enim sit amet mi
              egestas, id efficitur ante cursus. Ut dignissim maximus tortor, in
              elementum lacus condimentum id. Integer vestibulum ornare massa,
              at venenatis ligula fermentum id. Integer a luctus enim.
            </p>
          </section>

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
