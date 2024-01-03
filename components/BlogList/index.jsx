import React, { useEffect, useState } from "react";
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

const BlogList = ({
  variant,
  shuffleBlogs = false,
  filterBlogsByTitle = null,
  filterBlogsByTitleAndCategory = null,
  count = blogList.blogList.length,
}) => {
  const [shuffledBlogs, setShuffledBlogs] = useState([]);

  useEffect(() => {
    let blogsToIterate = [...blogList.blogList];

    // Shuffle the blogs if shuffleBlogs is true
    if (shuffleBlogs) {
      blogsToIterate = shuffleArray(blogsToIterate);
    }

    // Filter out blogs with a title that matches filterBlogs
    if (filterBlogsByTitle) {
      blogsToIterate = blogsToIterate.filter(
        (blog) => blog.title !== filterBlogsByTitle
      );
    }

    // Filter out blogs with a title and category that matches filterBlogs
    if (filterBlogsByTitleAndCategory) {
      blogsToIterate = blogsToIterate.filter(
        (blog) =>
          blog.title !== filterBlogsByTitleAndCategory.title &&
          blog.category == filterBlogsByTitleAndCategory.category
      );
      // If there are no blogs left after filtering, return filter blogs by title only.
      if (blogsToIterate.length === 0) {
        blogsToIterate = [...blogList.blogList].filter(
          (blog) => blog.title !== filterBlogsByTitleAndCategory.title
        );
      }
    }

    // Limit the number of blogs based on the count prop
    blogsToIterate = blogsToIterate.slice(0, count);

    setShuffledBlogs(blogsToIterate);
  }, [shuffleBlogs, filterBlogsByTitle, filterBlogsByTitleAndCategory, count]);

  return (
    <div className={`${styles.blogCtr}`}>
      <Layout showNav={false} variant={variant}>
        {/* <SectionSeparator title="BLOGS" /> */}
        <div className={styles.blogList}>
          {/* Iterate over bloglist */}
          {shuffledBlogs.map((blogData) => (
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
