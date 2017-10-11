import React, { Component } from 'react';

import ListView from "./stager/ListView";

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
    const stager_list_view = this.state.records.map((app) => {
      return (
        <ListView app={app} key={app.id} />
      )
    });
    return (
      <div id="container">
        <div className="smallStats">
          <div className="stadium"></div>
          <div className="stadium"></div>
          <div className="stadium"></div>
          <div className="stadium"></div>
        </div>
        <div id="listView">
          <div className="address header">Address</div>
          <div className="stager header">Stager</div>
          <div className="alp header">Above Listing Price</div>
          <div className="dom header">DOM</div>
        </div>
        {stager_list_view}
      </div>
    )
  }
}

export default ResaListView;
