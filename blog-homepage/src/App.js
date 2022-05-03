import './week2.css';
import yourArticles from './_data/your-articles.json';
import missedArticles from './_data/missed-articles.json';
import Section from './week2app/Section';
import Article from './week2app/Article';

function App()
{
  const forYouPrefix = 'fy'
  const missedItPrefix = 'mi'
  const containerClass = 'container'
  return (
    <div className="app">
      <Section sectionName={"For you"}  />
      <div className={`${forYouPrefix}${containerClass}`}>
        {yourArticles.map(article => (
          <Article cnamePrefix={"fy"} cname={"article"} article={article} />
        ))}
      </div>
      <Section sectionName={"In case you missed it"} />
      <div className={`${missedItPrefix}${containerClass}`}>
        {missedArticles.map(article => (
          <Article cnamePrefix={"mi"} cname={"article"} article={article} />
        ))}
      </div>
    </div>
  );
}

export default App;
