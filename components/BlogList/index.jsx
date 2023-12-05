import React from "react";
import styles from "./BlogList.module.scss";
import Layout from "../Layout";
import BlogPost from "./BlogPreview";
import blogList from "../../public/blogs.json";

const BlogList = ({ variant }) => {
  return (
    <div className={`${styles.blogCtr}`}>
      <Layout showNav={false}>
        {/* <SectionSeparator title="BLOGS" /> */}
        <div className={styles.blogList}>
          {/* Iterate over bloglist */}
          {blogList.blogList.map((blogData) => (
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
