// import logo from './logo.svg';
import './App.css';
import missedArticles from './missed-articles.json';
import yourArticles from './your-articles.json';
import Image from './Image'
import Titles from './Titles';
import Byline from './Byline';
import MissedImage from './missed-image';
import MissedByline from './missed-article-byline';


function App() {


  return (
    <div className="container">

      <div className="header">For You</div>
      <div className="main-articles-container">
      {yourArticles.map((article) => {
      return <div className ="articles-container">
        <Image src={article.image} />
        <Titles title={article.title} subtitle={article.description} audio={article.hasAudioAvailable}/>
        <Byline authorName={article.author.name} date={article.postedDate} readTime={article.minutesToRead} authorImg={article.author.image} isMember={article.author.isMediumMember}/>
        
        </div>})} 
        </div>

        <div className="header">Incase You Missed It</div>
        <div className="missed-articles-main-container">
        {missedArticles.map((article) => {
          return <div className ="missed-articles-container">
            <MissedImage src={article.image} />
            <Titles title={article.title} subtitle={article.description}/>
            <MissedByline authorName={article.author.name} date={article.postedDate} readTime={article.minutesToRead} authorImg={article.author.image} isMember={article.author.isMediumMember}/>
          </div>
        })}
        </div>
    </div>
  );
}

export default App;
