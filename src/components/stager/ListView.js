import React from "react";
import {Link} from "react-router-dom";

import "../../styles/global.css";
import "../../styles/listView.css";

constructor(props) {
  super(props);
  this.state = {
    records: []
  }
}

componentDidMount() {
  fetch("https://demo3459648.mockable.io/api")
    .then(results => results.json())
    .then(data => {
      console.log(data.results);
      this.setState({records: data.results});
    })
    .catch((error) => {console.log(error);
    })
};

const ListView = ({app}) => {
  return (
    <div id="listView">
      <div className="address">
        <div>{app.propertyAddress}</div>
        <div>{app.propertyCity}, {app.propertyState} {app.propertyZip}</div>
      </div>
      <div className="stager">
        <div>{app.stagersFirstName} {app.stagersLastName}</div>
      </div>
      <div className="alp">
        {app.aboveListPrice}
      </div>
      <div className="dom">
        <div>{app.dom}</div>
      </div>
    </div>
  )
}

export default ListView;
