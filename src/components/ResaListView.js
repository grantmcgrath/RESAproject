import React, { Component } from 'react';

import ListView from "./resa/ListView";

import "../styles/global.css";
import "../styles/resaListView.css";

class ResaListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

componentDidMount() {
  fetch("https://stagehandapi.herokuapp.com/resa/")
    .then(results => results.json())
    .then(data => {
      console.log(data.data);
      this.setState({data: data.data});
    })
    .catch((error) => {console.log(error);
    })
};

  render() {
    const resa_list_view = this.state.data.map((datum) => {
      return (
        <ListView app={datum} key={datum.id} />
      )
    });
    return (
      <div id="container">
        <div className="smallStats">
          <div className="stadium">Average Days on Market<br />69</div>
          <div className="stadium">Average Days on Market with Staging<br />16</div>
          <div className="stadium">Average Price Sold Above Listing Price<br />$26,462</div>
          <div className="stadium">Average Percentafe Sold Above Listing Price<br />107.23%</div>
        </div>
        <div id="listView">
          <div className="address header">Address</div>
          <div className="stager header">Stager</div>
          <div className="alp header">Above Listing Price</div>
          <div className="dom header">DOM</div>
        </div>
        {resa_list_view}
      </div>
    )
  }
}

export default ResaListView;
