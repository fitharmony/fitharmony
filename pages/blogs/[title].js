import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import Head from "next/head";
import data from "../../public/blogs.json";
import Link from "next/link";
import Footer from "../../components/Footer";
import BlogIntro from "../../components/BlogIntro";
import AuthorDateCtr from "../../components/AuthorDateCtr";
import BlogList from "../../components/BlogList";

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
      <Layout navTheme="white">
        {/* Intro */}
        <BlogIntro blogData={selectedBlog} />
        {/* Author, Date */}
        <AuthorDateCtr />
        {/* Blog Content */}
        <div className="blog-content">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor fermentum nisl eget semper. Sed leo sem, tincidunt eu
            dolor vitae, porta eleifend diam. Fusce scelerisque scelerisque
            ligula, non placerat nulla tincidunt nec. Mauris erat risus,
            condimentum id diam sit amet, vulputate bibendum velit. Donec
            molestie suscipit faucibus. Curabitur sed posuere ante. Nulla
            ultrices cursus eleifend. In sodales varius ipsum, sit amet ultrices
            felis laoreet varius. Nulla in blandit lectus. Aenean accumsan orci
            ligula, non convallis lacus cursus at. Nunc ipsum quam, ultricies
            scelerisque leo nec, sodales convallis ipsum. Sed id congue nibh, at
            mattis sapien.
          </p>
          <br></br>
          <p>
            Aliquam et quam convallis, commodo nibh eu, laoreet dui. Sed ac leo
            nec nisl tristique viverra. Maecenas sit amet ullamcorper diam, at
            aliquet ligula. Quisque eget augue ut turpis maximus vestibulum non
            et sapien. Sed dignissim sollicitudin mauris, a condimentum nisi
            suscipit eget. Pellentesque tellus libero, bibendum in pharetra
            vitae, congue quis ipsum. Aenean luctus turpis eu sapien iaculis,
            vel commodo sem sollicitudin. Sed eu rhoncus ex, in dapibus lectus.
          </p>
          <br></br>
          <p>
            In commodo lectus molestie massa aliquam vulputate. Pellentesque nec
            cursus ipsum, at malesuada enim. Nam hendrerit convallis nunc. Fusce
            sollicitudin ipsum sem, et dignissim tortor euismod id. In hac
            habitasse platea dictumst. Quisque ornare mi a justo pretium, in
            pretium metus cursus. Curabitur rutrum enim sit amet mi egestas, id
            efficitur ante cursus. Ut dignissim maximus tortor, in elementum
            lacus condimentum id. Integer vestibulum ornare massa, at venenatis
            ligula fermentum id. Integer a luctus enim.
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            porttitor fermentum nisl eget semper. Sed leo sem, tincidunt eu
            dolor vitae, porta eleifend diam. Fusce scelerisque scelerisque
            ligula, non placerat nulla tincidunt nec. Mauris erat risus,
            condimentum id diam sit amet, vulputate bibendum velit. Donec
            molestie suscipit faucibus. Curabitur sed posuere ante. Nulla
            ultrices cursus eleifend. In sodales varius ipsum, sit amet ultrices
            felis laoreet varius. Nulla in blandit lectus. Aenean accumsan orci
            ligula, non convallis lacus cursus at. Nunc ipsum quam, ultricies
            scelerisque leo nec, sodales convallis ipsum. Sed id congue nibh, at
            mattis sapien.
          </p>
        </div>
        {/* More Blogs */}
        {/* <BlogList /> */}
      </Layout>
      <Footer />
    </main>
  );
}

export default BlogPage;
