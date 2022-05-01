import logo from './logo.svg';
import './App.css';
// import Pictures from "./Pictures";

import articles from './_data/your-articles.json'
import missedArticles from './_data/missed-articles.json'
import MyArticles from "./blogArticles/MyArticles";
import MissedArticles from "./blogArticles/MissedArticles";

function App() {
  return (
    <div>
      <h1>For You</h1>

      <hr />

      <MyArticles articles={articles}/>

      {/*<MyArticles articles={MyArticles} />*/}

      {/*<ul>*/}
      {/*  */}

      {/*  {articles.map(function (item, idx) {*/}
      {/*    const date = Date.parse(item.postedDate)*/}
      {/*    const dateObject = new Date(date)*/}

      {/*    return (*/}
      {/*      <li key={idx}>*/}
      {/*        <span>*/}
      {/*          <a href={item.link}>{item.title} </a>*/}
      {/*        </span>*/}
      {/*        <span>{item.author.name}</span>*/}
      {/*        <img src={item.image}/>*/}
      {/*        <p>{item.description}</p>*/}
      {/*        /!*<p>{item.postedDate}</p>*!/*/}

      {/*        <span>{dateObject.toLocaleString('en-US', {*/}
      {/*            day: 'numeric',*/}
      {/*            month: 'long',*/}
      {/*          })}</span>*/}
      {/*        <span> · </span>*/}
      {/*        <span>{item.minutesToRead} Minute Read</span>*/}
      {/*      </li>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</ul>*/}


      <h1>In Case You Missed It</h1>

      <hr />

      <MissedArticles missedArticles={missedArticles}/>


      <ul>


      </ul>

    </div>


  );
}

export default App;
