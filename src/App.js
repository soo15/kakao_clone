import React from "react";
import "./App.css";
import "./Styles/common.scss";
import "./Styles/reset.scss";
import Header from "components/Header/Header";
import Mainbanner from "components/Mainbanner/Mainbanner";
import Shorcut from "components/Shortcut/Shorcut";
import Newproducts from "components/Newproducts/Newproducts";
import Beltbanner from "components/Beltbanner/Beltbanner";
import Bestproduets from "components/Bestproducts/Bestproduets";
import Themeproduct from './components/Themeproduct/Themeproduct';
import Recommanditem from "components/Recommanditem/Recommanditem";
import Charactetbest from "components/Charactetbest/Charactetbest";
import Widevideo from "components/Widevideo/Widevideo";

function App() {
  return (
    <>
      <div className="container-doc">
        <Header />
        <Mainbanner/>
        <Shorcut/>
        <Newproducts/>
        <Beltbanner/>
        <Bestproduets/>
        <Themeproduct/>
        <Recommanditem/>
        <Charactetbest/>
        <Widevideo/>
      </div>
    </>
  );
}

export default App;
