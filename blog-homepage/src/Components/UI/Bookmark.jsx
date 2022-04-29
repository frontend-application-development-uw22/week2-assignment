import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as faBookmarkSolid } from "@fortawesome/free-solid-svg-icons";

const Bookmark = () => {
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    /* Bookmark start */
    <div className="bookMark">
      {bookmarked ? (
        <FontAwesomeIcon icon={faBookmarkSolid} onClick={toggleBookmark} />
      ) : (
        <FontAwesomeIcon icon={faBookmark} onClick={toggleBookmark} />
      )}
    </div>
    /* Bookmark end */
  );
};

export default Bookmark;
