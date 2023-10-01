import React from "react";
import styles from "./BlogList.module.scss";
import Layout from "../Layout";
import BlogPost from "./BlogPreview";

const BlogList = () => {
  return (
    <div className={styles.blogCtr}>
      <Layout showNav={false}>
        <div className={styles.blogList}>
          {/* TODO: Add from files. Add see all button (need all blogs page) */}
          <BlogPost />
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
      </Layout>
    </div>
  );
};

export default BlogList;
