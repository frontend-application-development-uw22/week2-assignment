// import PropTypes from 'prop-types';
// import missedArticles from './missed-articles.json';
// import yourArticles from './your-articles.json';
import './App.css';
import ForYou from './ForYou';
import Missed from './Missed';

function App() {
  // return (
  //   <div>
  //     <ForYou />
  //     <Missed />
  //   </div>
  // )
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-2 g-4">
      <ForYou />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <Missed />
      </div>
    </div>
  )
}

export default App;
