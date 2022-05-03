import React from "react";
// My Components
import MissedArticles from "./modules/missedArticles";

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
    <div className="missedSection">
      <h1 className="missedSectionTitleDecoration">In case you missed it</h1>
      <MissedArticles />
    </div>
  );
};

export default App;
