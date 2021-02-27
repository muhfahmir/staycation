import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// toaster
import { ToastContainer } from "react-toastify";

import "assets/scss/style.scss";

import LandingPage from "pages/LandingPage";
import DetailsPage from "pages/DetailsPage";
import Checkout from "pages/Checkout";
import Example from "pages/Example";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LandingPage}></Route>
        <Route path="/properties/:id" exact component={DetailsPage}></Route>
        <Route path="/checkout" exact component={Checkout}></Route>
        <Route path="/example" exact component={Example}></Route>
      </Router>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
