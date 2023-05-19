import React from "react";
import "./App.css";
import "./Styles/common.scss";
import "./Styles/reset.scss";
import MainItems from "components/MainItems";
import Footer from "components/Footer/Footer";
import Header from "components/Header/Header";
import Main from "components/Main/Main";

function App() {
  return (
    <>
      <div className="container-doc">
        <Header />
        <Main/>
        <MainItems />
        <Footer />
      </div>
    </>
  );
}

export default App;
