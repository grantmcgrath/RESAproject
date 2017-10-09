import React from "react";

import "../../styles/global.css";
import "../../styles/listView.css";

const ListView = ({app}) => {
  return (
    <div id="listView">
      <div className="listItem">{app.stagersFirstName} {app.stagersLastName}</div>
      <div className="listItem">{app.propertyAddress}</div>
      <div className="listItem">{app.dateListed}</div>
      <div className="listItem">{app.dateSold}</div>
      <div className="listItem">{app.listPrice}</div>
      <div className="listItem">{app.soldPrice}</div>
      <div className="listItem">{app.listingPriceRange}</div>
      <div className="listItem">{app.serviceProvided}</div>
    </div>
  )
}

export default ListView;
