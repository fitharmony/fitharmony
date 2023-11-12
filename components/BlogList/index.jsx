import React from "react";
import styles from "./BlogList.module.scss";
import Layout from "../Layout";
import BlogPost from "./BlogPreview";
import blogList from "../../public/blogs.json";

const BlogList = () => {
  return (
    <div className={styles.blogCtr}>
      <Layout showNav={false}>
        {/* <SectionSeparator title="BLOGS" /> */}
        <div className={styles.blogList}>
          {/* TODO: Add from files. Add see all button (need all blogs page) */}
          <BlogPost blogData={blogList.blogList[0]} />
          <BlogPost blogData={blogList.blogList[0]} />
          <BlogPost blogData={blogList.blogList[0]} />
          <BlogPost blogData={blogList.blogList[0]} />
          <BlogPost blogData={blogList.blogList[0]} />
          <BlogPost blogData={blogList.blogList[0]} />
        </div>
      </Layout>
    </div>
  );
};

export default BlogList;
