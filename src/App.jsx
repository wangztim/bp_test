import "./App.css";
import React from "react";
import { Route } from "wouter";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CommitteePage from "./pages/CommitteePage/CommitteePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NavBar from "./components/NavBar/NavBar";
import FAQPage from "./pages/FAQPage/FAQPage";
import testSort from "./components/testSort";
import LoginPage from "./pages/LoginPage/LoginPage";
import { LoginContext } from "./LoginContext";

function Index() {
  return (
    <div id="indexheader">
      <HomePage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

function MainPages() {
  return (
    <div>
      <NavBar />
      <header className="App-header">
        <Route path="/" component={Index} />
        <Route path="/faq" component={FAQPage} />
        <Route path="/committees" component={CommitteePage} />
      </header>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }} className="App">
      <MainPages />c
      {loggedIn ? (
        <Route path="/dashboard" component={testSort} />
      ) : (
        <Route path="/dashboard" component={LoginPage} />
      )}
    </LoginContext.Provider>
  );
}

export default App;
