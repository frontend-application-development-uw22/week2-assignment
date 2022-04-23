import React, { useState } from "react";
import Image from "../Assets/Image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";

const dateHandler = (date) => {
  const newDate = new Date(date);
  return newDate.toDateString().slice(4, 11);
};

const PostByline = (props) => {
  const newDate = dateHandler(props.postedDate);

  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <>
      <section class="byline">
        <Image src={props.image} />
        <section>
          <p>{props.name}</p>
          <p>
            {newDate} - {props.minutesToRead} min to read
          </p>
        </section>
      </section>
      <div className="bookMark">
        {bookmarked ? (
          <FontAwesomeIcon icon={faBookmarkSolid} onClick={toggleBookmark} />
        ) : (
          <FontAwesomeIcon icon={faBookmark} onClick={toggleBookmark} />
        )}
      </div>
    </>
  );
};

export default PostByline;
