import React from "react";
import "./App.css";
import "bulma/css/bulma.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navbar, BreadcrumbWithRouter } from "./components/Header/index";
import { Homepage, About, Card, Modal, Contact, Login } from "./containers/index";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <BreadcrumbWithRouter />

        <section className="section">
          <div className="container">

            <Route path="/" exact component={Homepage} />
            <Route path="/about" component={About} />
            <Route path="/card" component={Card} />
            <Route path="/modal" component={Modal} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />

          </div>
        </section>
      </Router >
    );
  }
}
export default App;
