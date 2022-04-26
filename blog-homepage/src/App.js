import Article from './components/Article';
import articles from './data/your-articles.json';
import missedArticles from './data/missed-articles.json';

function App() {
  return (
    <>
      {/* rendering your-articles */}
      <div className='row'>
        {articles.map((article, index) =>
          // Use Article component to display data on HTML page
          <Article
            key={index}
            article = {article}
            columnClass = 'column'
            cardClass='card'
            classImg = 'image-container'
            classTextContainer='text-container'
          />
        )}
      </div>
      {/* Rendering missed-articles */}
      <h4>In case you missed it</h4>
      <hr/>
      <div className='row'>
        {missedArticles.map((article, index) =>
          <Article
            key={index}
            article = {article}
            columnClass = 'miss-column'
            cardClass='miss-card'
            classImg='miss-image'
            classTextContainer='miss-text-container'
          />
        )}
      </div>      
    </>
  );
}

export default App;
