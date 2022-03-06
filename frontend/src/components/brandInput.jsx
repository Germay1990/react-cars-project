import React, { Component } from "react";
import { brands_ar } from "../data/brandsLis";

class BrandInput extends Component {
  state = { brands_arr: brands_ar };

  //   componentDidMount() {
  //     fetch(url)
  //       .then((req) => req.json())
  //       .then((data) => this.setState({ food_ar: data }));
  //   }

  render() {
    return (
      <div className="form-input">
        <label htmlFor="brand">Brand:</label>
        <select
          id="brandSelect"
          name="brandName"
          className="form-select form-input"
          aria-label="Default select example"
          required
          onChange={(evt)=>{
            this.props.handleChange(evt)
          }}
        >
          <option>{this.props.defaultOption}</option>

          {this.state.brands_arr.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default BrandInput;
