import React, { Component } from 'react';

import ListView from "./ListView";

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
    .then(response => response.json())
    .then(data => {
      console.log(data);
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
      <div>
        {resa_list_view}
        <p>Hello List View</p>
      </div>
    )
  }
}

export default ResaListView;
