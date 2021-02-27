import React, { Component } from "react";

// import { InputDate } from "elements/Form";
// import Breadcrumb from "elements/Breadcrumb";

import { InputNumber } from "elements/Form";

export default class Example extends Component {
  // inputnumber
  state = {
    value: "1",
  };

  // inputDate
  // state = {
  //   value: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    // breadcrumb
    // const breadcrumbList = [
    //   { pageTitle: "Home", pageHref: "" },
    //   { pageTitle: "House Details", pageHref: "" },
    // ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col-auto">
            <InputNumber
              max={30}
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
              suffix=" night"
              isSuffixPlural
            />
          </div>
        </div>
      </div>
    );
  }
}
