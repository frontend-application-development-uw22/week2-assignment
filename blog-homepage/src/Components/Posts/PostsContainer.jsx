import React from "react";
import Post from "./Post";

const PostsContainer = (props) => {
  return (
    <section class="posts">
      {props.data.map((post) => {
        return <Post key={post.id} data={post} />;
      })}
    </section>
  );
};

export default PostsContainer;
