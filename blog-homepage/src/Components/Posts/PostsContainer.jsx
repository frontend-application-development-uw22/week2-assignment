import React from "react";
import Post from "./Post";
import classes from "./PostsContainer.module.css";

const PostsContainer = ({ type, data }) => {
  return (
    <section className="posts-list">
      {data.length ? (
        data.map((post) => <Post type={type} key={post.id} data={post} />)
      ) : (
        <h2>No blog posts at this time</h2>
      )}
    </section>
  );
};

export default PostsContainer;
