import React from "react";

import "../styles/global.css";
import "../styles/listView.css";

const ListView = ({app}) => {
  return (
    <div id="listView">
      <div className="listItem">{app.stagersFirstName}</div>
      <div className="listItem">{app.stagersLastName}</div>
      <div className="listItem">{app.listingRealtor}</div>
      <div className="listItem">{app.propertyAddress}</div>
      <div className="listItem">{app.dateListed}</div>
      <div className="listItem">{app.dateFirstOffer}</div>
      <div className="listItem">{app.dateUnderContract}</div>
      <div className="listItem">{app.dateSold}</div>
      <div className="listItem">{app.listPrice}</div>
      <div className="listItem">{app.soldPrice}</div>
      <div className="listItem">{app.aboveListPrice}</div>
      <div className="listItem">{app.listingPriceRange}</div>
      <div className="listItem">{app.serviceProvided}</div>
      <div className="listItem">{app.homeOwnersName}</div>
    </div>
  )
}

export default ListView;
