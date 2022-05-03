import React from "react";
import PostsContainer from "./Components/Posts/PostsContainer";
import MissedArticles from "./_data/missed-articles.json";
import YourArticles from "./_data/your-articles.json";

import "./App.css";

function App() {
  return (
    <main className="app-container">
      <section className="posts posts-new">
        <header className="header">
          <h3 className="header__text">For you</h3>
        </header>
        <PostsContainer type="new" data={YourArticles} />
      </section>
      <section className="posts posts-old">
        <header className="header">
          <h3 className="header__text">In case you missed it</h3>
        </header>
        <PostsContainer type="missed" data={MissedArticles} />
      </section>
    </main>
  );
}

export default App;
