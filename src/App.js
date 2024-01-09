import React from "react";
import NewFeed from "./components/NewsFeed";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="app">
      <h1>Crypto Tracker</h1>
      <div className="app-wrapper">
        <CurrencyConverter />
        <NewFeed />
      </div>
    </div>
  );
}

export default App;
