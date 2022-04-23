import React from "react";
import Header from "./Components/UI/Header";
import PostsContainer from "./Components/Posts/PostsContainer";
import MissedArticles from "./_data/missed-articles.json";
import YourArticles from "./_data/your-articles.json";

import "./App.css";

function App() {
  return (
    <main>
      <section>
        <Header title="For you" />
        <PostsContainer data={YourArticles} />
      </section>
      <section>
        <Header title="In case you missed it" />
        <PostsContainer data={MissedArticles} />
      </section>
    </main>
  );
}

export default App;
