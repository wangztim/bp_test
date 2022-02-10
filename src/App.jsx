import "./App.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CommitteePage from "./pages/CommitteePage/CommitteePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import NavBar from "./components/NavBar/NavBar";
import FAQPage from "./pages/FAQPage/FAQPage";
import Sort from "./components/testSort";
import LoginPage from "./pages/LoginPage/LoginPage";
import { LoginContext } from "./LoginContext";

function Index() {
  return (
    <div id="indexheader">
      <NavBar />
      <header className="App-header">
        <HomePage />
        <AboutPage />
      </header>
    </div>
  );
}

function FAQ() {
  return (
    <div id="indexheader">
      <NavBar />
      <header className="App-header">
        <FAQPage />
      </header>
    </div>
  );
}

function Contact() {
  return (
    <div id="indexheader">
      <NavBar />
      <header className="App-header">
        <ContactPage />
      </header>
    </div>
  );
}

function Committee() {
  return (
    <div id="indexheader">
      <NavBar />
      <header className="App-header">
        <CommitteePage />
      </header>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="/committees" element={<Committee />} />
        <Route
          path="/dashboard"
          element={
            <div>
              <LoginContext.Provider
                value={{ loggedIn, setLoggedIn }}
                className="App"
              >
                {loggedIn ? <Sort /> : <LoginPage />}
              </LoginContext.Provider>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
