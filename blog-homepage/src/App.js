import React from "react";
// My Components
import MissedArticles from "./modules/missedArticles";
import YourArticles from "./modules/yourArticles";

// My CSS
import "./App.css";
// BootStrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// BootStrap Components
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Card";

// import "./App.css";

function App() {
;
  return (
    <div className="main">
      <div className="forYouSection">
        <h1 className="forYouHead">For You</h1>
        <YourArticles />
      </div>
      <div className="missedSection">
        <div className="missedSectionTitleDecoration"></div>
          <h1 id="missedHead">In case you missed it</h1>
          <MissedArticles />
      </div>
    </div>
  );
};

export default App;
