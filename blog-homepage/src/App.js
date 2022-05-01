import logo from './logo.svg';
import './App.css';

import articles from './_data/your-articles.json'
import missedArticles from './_data/missed-articles.json'
import MyArticles from "./blogArticles/MyArticles";
import MissedArticles from "./blogArticles/MissedArticles";

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

export default App;
