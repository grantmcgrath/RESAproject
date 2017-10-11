import React from "react";

import "../../styles/global.css";
import "../../styles/listView.css";



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
