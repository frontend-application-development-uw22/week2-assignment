import React from "react";
import Bookmark from "../UI/Bookmark";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

const dateHandler = (date) => {
  const newDate = new Date(date);
  return newDate.toDateString().slice(4, 11);
};

const Post = ({ type, data }) => {
  const newDate = dateHandler(data.postedDate);

  return (
    <article className={`post post-${type}`}>
      {/* Post details start */}
      <a href={data.link}>
        <img
          className={`post__image post-${type}__image`}
          src={data.image}
          alt=""
        />
      </a>
      <section className={`post-${type}__details`}>
        <div>
          {data.hasAudioAvailable && data.memberPreview ? (
            <p className={`post-${type}__info`}>
              <span className={`post-${type}__audio-available`}>
                <FontAwesomeIcon icon={faVolumeHigh} /> Audio available
              </span>
              <span className={`post-${type}__member-preview`}>&#9733;</span>
            </p>
          ) : (
            ""
          )}
          {!data.hasAudioAvailable && data.memberPreview ? (
            <p className={`post-${type}__member-preview`}>
              &#9733;
              <span className={`post-${type}__member-preview--text`}>
                &nbsp;Member preview
              </span>
            </p>
          ) : (
            ""
          )}
          <h4 className={`post-${type}__title`}>{data.title}</h4>
          <p className={`post-${type}__description`}>{data.description}</p>
        </div>
        {/* Post details end */}

        {/* Post byline start */}
        <div className="byline">
          <section className="byline">
            <img
              className={`byline__image ${
                data.author.isMediumMember ? "byline__image--member" : ""
              }`}
              src={data.author.image}
              alt=""
            />
            <section>
              <p>{data.author.name}</p>
              <p>
                {newDate} - {data.minutesToRead} min to read
              </p>
            </section>
          </section>
          {/* Post byline end */}

          <Bookmark />
        </div>
      </section>
    </article>
  );
};

Post.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired,
    author: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  }),
};

export default Post;
