import React, { Component } from 'react';

import ListView from "./resa/ListView";

import "../styles/global.css";
import "../styles/resaListView.css";

class ResaListView extends Component {
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

  render() {
    const resa_list_view = this.state.records.map((app) => {
      return (
        <ListView app={app} key={app.id} />
      )
    });
    return (
      <div id="container">
        <div id="listView">
          <div className="listItem">Stager's Name</div>
          <div className="listItem">Property Addess</div>
          <div className="listItem">Date Listed</div>
          <div className="listItem">Date Sold</div>
          <div className="listItem">List Price</div>
          <div className="listItem">Sold Price</div>
          <div className="listItem">Listing Price Range</div>
          <div className="listItem">Service Provided</div>
        </div>
        {resa_list_view}
      </div>
    )
  }
}

export default ResaListView;
