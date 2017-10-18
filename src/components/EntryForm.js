import React, { Component } from 'react';

import "../styles/global.css";
import "../styles/entryForm.css";


class EntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stagersFirstName: "",
      stagersLastName: "",
      listingRealtor: "",
      propertyAddress: "",
      propertyCity: "",
      propertyState: "",
      propertyZip: "",
      dateListed: "",
      dateFirstOffer: "",
      dateUnderContract: "",
      dateSold: "",
      listPrice: "",
      soldPrice: "",
      serviceDate: "",
      listingPriceRange: "",
      serviceProvided: "",
      homeOwnersName: ""
    }

    this.handleNameChange = this.handleNameChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
}

  handleNameChange = (event) => {
    this.setState({name: event.target.value});
  };





  render() {
    return (
      <div>
        <form id="entry_form">
          <div>
            <input type="text" name="stagersFirstName" placeholder="First Name" required />
            <input type="text" name="stagersLastName" placeholder="Last Name" required />
          </div>
          <div>
            <input type="text" name="propertyAddress" placeholder="Street Address" required />
          </div>
          <div>
            <input type="text" name="propertyCity" placeholder="City" required />
            <input type="text" name="propertyState" placeholder="State" required />
            <input type="text" name="propertyZip" placeholder="Zip" required />
          </div>
          <div>
            <p>Date Listed</p>
            <input type="date" name="dateListed" placeholder="Date Listed" />
            <p>Date of First Offer</p>
            <input type="date" name="dateFirstOffer" placeholder="Date of First Offer" />
            <p>Date Under Contract</p>
            <input type="date" name="dateUnderContract" placeholder="Date Under Contract" />
          </div>
          <div>
            <p>Date Sold</p>
            <input type="date" name="dateSold" placeholder="Date Sold" />
            <input type="text" name="listPrice" placeholder="Listed Price" />
            <input type="text" name="soldPrice" placeholder="Sold Price" />
          </div>
          <div>
            <p>Service Date</p>
            <input type="date" name="serviceDate" placeholder="Service Date" required />
            <input type="text" name="listingPriceRange" placeholder="Price Range" />
            <input type="text" name="serviceProvided" placeholder="Service Provided" required />
          </div>
          <div>
            <input type="text" name="homeOwnersName" placeholder="Home Owner's Name" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default EntryForm;
