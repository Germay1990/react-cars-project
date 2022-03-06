import React, { Component } from "react";
import { category_ar } from "../data/categoriesLis";

class CategoryInput extends Component {
  state = { category_arr: category_ar };

  //   componentDidMount() {
  //     fetch(url)
  //       .then((req) => req.json())
  //       .then((data) => this.setState({ food_ar: data }));
  //   }

  render() {
    return (
      <div className="form-input">
        <label htmlFor="category">Category:</label>
        <select
          id="categorySelect"
          name="category"
          className="form-select form-input"
          aria-label="Default select example"
          required
          onChange={(evt)=>{
            this.props.handleChange(evt)
          }}
        >
          <option>{this.props.defaultOption}</option>
          {this.state.category_arr.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CategoryInput;
