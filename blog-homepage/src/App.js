import './App.css';
import PropTypes from 'prop-types';
import articles from './_data/your-articles.json';
import missedArticles from './_data/missed-articles.json';
import MyArticles from './blogArticles/MyArticles';

import MissedArticles from './blogArticles/MissedArticles';

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div>

      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <div>
        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <h1>For You</h1>

        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <hr />

        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <MyArticles articles={articles}/>

      </div>

      {/* eslint-disable-next-line react/react-in-jsx-scope */}
      <div>

        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <h1>In Case You Missed It</h1>

        {/* eslint-disable-next-line react/react-in-jsx-scope */}
        <hr />

        {/* eslint-disable-next-line react/react-in-jsx-scope */}
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

  })),
};

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

  })),
};

export default App;
