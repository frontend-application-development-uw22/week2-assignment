import logo from './logo.svg';
import './App.css';
import './missed-articles.json';
import './your-articles.json'

class Article extends React.Component {
  render() {
    return (
      <div className="Article">
        <SearchBar />
        <ArticleImage />
        <ArticleAudioAvailable />
        <ArticleMemberPreview />
        <ArticleTitle />
        <ArticleDescription />
        <ArticleAuthor />
        <ArticleDate />
        <ArticleLength />
        <ArticleBookmark />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <div id="for-you">
        <h2>
          <em>For you</em>
        </h2>
      </div>
      <div id="in-case-you-missed-it">
        <h2>
          <em>In case you missed it</em>
        </h2>
      </div>
    </div>
  );
}

export default App;
