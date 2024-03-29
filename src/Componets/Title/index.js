import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron"

function Title() {
    return (
        <div>
          <Jumbotron className="jumbotron">
              <h1 className="title">workForceReady</h1>
              <p className="lead">Search for an employee by name, position, or country.</p>
          </Jumbotron>
        </div>
    );   
}

export default Title;