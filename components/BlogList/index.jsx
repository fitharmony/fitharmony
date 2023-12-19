import React from "react";
import styles from "./BlogList.module.scss";
import Layout from "../Layout";
import BlogPost from "./BlogPreview";
import blogList from "../../public/blogs.json";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const BlogList = ({ variant, shuffleBlogs = false, filterBlogs = null }) => {
  let blogsToIterate = [...blogList.blogList];

  // Shuffle the blogs if shuffleBlogs is true
  if (shuffleBlogs) {
    blogsToIterate = shuffleArray(blogsToIterate);
  }

  // Filter out blogs with a title that matches filterBlogs
  if (filterBlogs) {
    blogsToIterate = blogsToIterate.filter(
      (blog) => blog.title !== filterBlogs
    );
  }

  return (
    <div className={`${styles.blogCtr}`}>
      <Layout showNav={false}>
        {/* <SectionSeparator title="BLOGS" /> */}
        <div className={styles.blogList}>
          {/* Iterate over bloglist */}
          {blogsToIterate.map((blogData) => (
            <BlogPost
              blogData={blogData}
              variant={variant}
              key={blogData.title}
              isTrending={blogData.trending || false}
            />
          ))}
        </div>
      </Layout>
    </div>
  );
};

export default BlogList;
