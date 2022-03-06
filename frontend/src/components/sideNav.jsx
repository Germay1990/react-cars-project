import React, { Component } from "react";
import BrandInput from "./brandInput";
import CategoryInput from "./categoryInput";
import axios from "axios";
import Button from "@mui/material/Button";

class SideNav extends Component {
  state = {
    brandName: "",
    model: "",
    price: 0,
    category: "",
    imageUrl: "",
  };

  handleChange = (evt) => {
    const value = evt.target.value;
    this.setState({ [evt.target.name]: value });
  };

  handleSave = (evt) => {
    evt.preventDefault();
    this.setState({ isPending: true });

    axios
      .post("http://localhost:3002/products", this.state)
      .then((res) => {
        console.log(res);
        this.setState({ isPending: false });
        console.log(this.state.isPending);
      })
      .catch((err) => {
        console.log(err);
      });
    //Clear all form inputs field
    evt.target.reset();
  };

  render() {
    return (
      <div className="side-nav">
        <h2 className="form-input"> {this.props.title}</h2>
        <form onSubmit={this.handleSave}>
          <BrandInput
            defaultOption={"select brand:"}
            handleChange={this.handleChange}
          ></BrandInput>

          <div className="form-input">
            <label htmlFor="name">Model:</label>
            <input
              name="model"
              type="text"
              placeholder="Enter model"
              required
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="form-input">
            <label htmlFor="price">Price:</label>
            <input
              name="price"
              type="number"
              placeholder="Enter price"
              min="1000"
              max="1000000"
              required
              onChange={this.handleChange}
            ></input>
          </div>
          <CategoryInput
            defaultOption={"select category"}
            handleChange={this.handleChange}
          ></CategoryInput>
          <div className="form-input">
            <label htmlFor="img-url">Image-URL:</label>
            <input
              name="imageUrl"
              type="text"
              placeholder="Enter URL"
              required
              onChange={this.handleChange}
            ></input>
          </div>
          {/* 
          <button id="addBtn" type="submit" className="btn btn-success">
            Add car
          </button> */}

          <Button id="addBtn" type="submit" variant="contained" size="small" color="success">
            Add car
          </Button>
        </form>
      </div>
    );
  }
}

export default SideNav;
