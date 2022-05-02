import logo from './logo.svg';
import './App.css';

import articles from './_data/your-articles.json'
import missedArticles from './_data/missed-articles.json'
import MyArticles from "./blogArticles/MyArticles";
import MissedArticles from "./blogArticles/MissedArticles";
import PropTypes from "prop-types";

function App() {
  return (
    <div>

      <div>
        <h1>For You</h1>

        <hr />

        <MyArticles articles={articles}/>

      </div>

      <div>

        <h1>In Case You Missed It</h1>

        <hr />

        <MissedArticles missedArticles={missedArticles}/>

      </div>

    </div>

  );
}
App.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired,
    hasAudioAvailable: PropTypes.bool.isRequired,
    memberPreview: PropTypes.bool.isRequired,

  }))
}

App.propTypes = {
  missedArticles: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    postedDate: PropTypes.string.isRequired,
    minutesToRead: PropTypes.number.isRequired,
    hasAudioAvailable: PropTypes.bool.isRequired,
    memberPreview: PropTypes.bool.isRequired,

  }))
}

export default App;
