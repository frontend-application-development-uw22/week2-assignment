import React, { useState } from "react";
import Image from "../Assets/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";

const PostByline = (props) => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <section class="byline">
      <Image src={props.image} />
      <section>
        <p>{props.name}</p>
        <p>
          {props.postedDate} - {props.minutesToRead} min to read
        </p>
      </section>
      {bookmarked ? (
        <FontAwesomeIcon icon={faBookmarkSolid} onClick={toggleBookmark} />
      ) : (
        <FontAwesomeIcon icon={faBookmark} onClick={toggleBookmark} />
      )}
    </section>
  );
};

export default PostByline;
