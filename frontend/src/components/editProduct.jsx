import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import BrandInput from "./brandInput";
import CategoryInput from "./categoryInput";
import useFetch from "./useFetch";
import axios from "axios";
import Button from "@mui/material/Button";

const EditProduct = () => {
  let { id } = useParams();
  let [isEditing, setIsEditing] = useState(false);
  let history = useHistory();

  let {
    data: productDetails,
    isPending,
    error,
  } = useFetch("http://localhost:3002/products/" + id);

  const handleChange = (evt) => {};

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsEditing(true);
    let brandName = evt.target.brandName.value;
    let model = evt.target.model.value;
    let price = evt.target.price.value;
    let category = evt.target.category.value;
    let imageUrl = evt.target.imageUrl.value;
    axios
      .put("http://localhost:3002/products/" + id, {
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
  };

  return (
    <div className=" edit-form">
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      <h2 className="form-input"> Edit product</h2>

      {productDetails &&
        productDetails.map((field) => (
          <form key={field._id} onSubmit={handleSubmit}>
            <BrandInput
              defaultOption={field.brandName}
              handleChange={handleChange}
            ></BrandInput>

            <div className="form-input">
              <label htmlFor="model">Model:</label>
              <input
                defaultValue={field.model}
                name="model"
                type="text"
                placeholder="Enter model"
                required
              ></input>
            </div>
            <div className="form-input">
              <label htmlFor="price">Price:</label>
              <input
                defaultValue={field.price}
                name="price"
                type="number"
                placeholder="Enter price"
                min="1000"
                max="1000000"
                required
              ></input>
            </div>
            <CategoryInput
              defaultOption={field.category}
              handleChange={handleChange}
            ></CategoryInput>
            <div className="form-input">
              <label htmlFor="img-url">Image-URL:</label>
              <input
                defaultValue={field.imageUrl}
                name="imageUrl"
                type="text"
                placeholder="Enter URL"
                required
              ></input>
            </div>
            {!isEditing && (
              <Button
                id="addBtn"
                type="submit"
                variant="contained"
                color="info"
                size="small"
              >
                Update 
              </Button>
              // <button id="addBtn" type="submit" className="btn btn-success">
              //   Save
              // </button>
            )}

            {isEditing && (
              <button
                id="addBtn"
                type="submit"
                className="btn btn-success"
                disabled
              >
                Edit car...
              </button>
            )}
          </form>
        ))}
    </div>
  );
};

export default EditProduct;
