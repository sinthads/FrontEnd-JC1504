import React, { Component } from "react";
import { Route } from "react-router-dom";
// import Intro from "./Pages/Intro";
// import Method from "./Pages/Method";
// import DetailBuah from "./Pages/DetailBuah";
// import ComponentMap from "./Pages/ComponentMap";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Route path="/" exact component={Intro} />
        <Route path="/bebas" component={Method} />
        <Route path="/detail-buah" component={DetailBuah} />
        <Route path="/component-map" component={ComponentMap} /> */}
        <Route path="/" exact component={Home} />
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default App;
