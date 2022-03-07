import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import BrandInput from "./brandInput";
import CategoryInput from "./categoryInput";
import axios from "axios";
import Button from "@mui/material/Button";

const AddCar = (props) => {
  // let state = {
  //   brandName: "",
  //   model: "",
  //   price: 0,
  //   category: "",
  //   imageUrl: "",
  // };
  let [isEditing, setIsEditing] = useState(false);
  let history = useHistory();

  let handleChange = (evt) => {
    // const value = evt.target.value;
    // this.setState({ [evt.target.name]: value });
  };

  let handleSubmit = (evt) => {
    evt.preventDefault();
    setIsEditing(true);
    let brandName = evt.target.brandName.value;
    let model = evt.target.model.value;
    let price = evt.target.price.value;
    let category = evt.target.category.value;
    let imageUrl = evt.target.imageUrl.value;

    axios
      .post(
        "http://localhost:3002/products", {
          brandName,
          model,
          price,
          imageUrl,
          category,
        })
      .then((res) => {
        console.log(res);
        setIsEditing(false);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
    //Clear all form inputs field
    evt.target.reset();
  };

  return (
    <div className="side-nav">
      <h2 className="form-input"> {props.title}</h2>
      <form onSubmit={handleSubmit}>
        <BrandInput
          defaultOption={"select brand:"}
          handleChange={handleChange}
        ></BrandInput>

        <div className="form-input">
          <label htmlFor="name">Model:</label>
          <input
            name="model"
            type="text"
            placeholder="Enter model"
            required
            onChange={handleChange}
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
            onChange={handleChange}
          ></input>
        </div>
        <CategoryInput
          defaultOption={"select category"}
          handleChange={handleChange}
        ></CategoryInput>
        <div className="form-input">
          <label htmlFor="img-url">Image-URL:</label>
          <input
            name="imageUrl"
            type="text"
            placeholder="Enter URL"
            required
            onChange={handleChange}
          ></input>
        </div>
        {/* 
          <button id="addBtn" type="submit" className="btn btn-success">
            Add car
          </button> */}

        <Button
          id="addBtn"
          type="submit"
          variant="contained"
          size="small"
          color="success"
        >
          Add car
        </Button>
      </form>
    </div>
  );
};

export default AddCar;
