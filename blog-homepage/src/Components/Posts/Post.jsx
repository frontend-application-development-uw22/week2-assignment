import React from "react";
import Image from "../Assets/Image";
import PostTitle from "./PostTitle";
import PostSummary from "./PostSummary";
import PostByline from "./PostByline";

const Post = (props) => {
  return (
    <article>
      <Image class="postImage" src={props.data.image} alt={""} />
      <section className="postDetails">
        <div className="post">
          <PostTitle content={props.data.title} />
          <PostSummary content={props.data.description} />
        </div>
        <div className="byline">
          <PostByline
            image={props.data.author.image}
            name={props.data.author.name}
            postedDate={props.data.postedDate}
            minutesToRead={props.data.minutesToRead}
          />
        </div>
      </section>
    </article>
  );
};

export default Post;
