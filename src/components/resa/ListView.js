import React from "react";

import "../../styles/global.css";
import "../../styles/listView.css";

const ListView = ({app}) => {
  return (
    <div id="listView">
      <div className="address">
        <div>{app.propertyaddress}</div>
        <div>{app.propertycity}, {app.propertystate} {app.propertyzip}</div>
      </div>
      <div className="stager">
        <div>{app.stagersfirstname} {app.stagerslastname}</div>
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
