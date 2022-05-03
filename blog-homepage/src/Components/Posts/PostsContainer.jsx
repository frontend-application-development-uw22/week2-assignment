import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

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

PostsContainer.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default PostsContainer;
