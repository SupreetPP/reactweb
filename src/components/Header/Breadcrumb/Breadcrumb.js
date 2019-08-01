import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";


class Breadcrumb extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {

    const { match, location, history } = this.props;


    return (
      <div>
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="./">Home</Link>
            </li>
            <li>{location.pathname}</li>
          </ul>
        </nav>
      </div>
    );
  }
}

const BreadcrumbWithRouter = withRouter(Breadcrumb);


export default BreadcrumbWithRouter;
