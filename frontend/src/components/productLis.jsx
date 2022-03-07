import React, { useState } from "react";
import Product from "./product";
import useFetch from "./useFetch";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductsList = () => {
  let {
    data: products,
    isPending,
    error,
  } = useFetch("http://localhost:3002/products");

  let [selectedProduct, setSelectedProducts] = useState([]);
  let [canRemove, setCanRemove] = useState(false);

  let onProductSelect = (productId) => {
    setCanRemove(true);

    let newList = [];
    selectedProduct.push(productId);
    newList = selectedProduct;
    setSelectedProducts(newList);
  };

  let onProductUnSelect = (productId) => {
    let newList = [];
    let index = selectedProduct.indexOf(productId);
    selectedProduct.splice(index, 1);
    newList = selectedProduct;
    setSelectedProducts(newList);

    if (selectedProduct.length === 0) {
      setCanRemove(false);
    }
  };

  let handleRemoveSelectedProducts = () => {
    selectedProduct.map((pId) =>
      fetch("http://localhost:3002/products/" + pId, {
        method: "DELETE",
      })
    );
  };

  return (
    <div>
      <div className="row">
        {error && <div>{error}</div>}
        {isPending && <h2>Loading...</h2>}
        {products &&
          products.map((item) => {
            return (
              <Product
                key={item._id}
                productData={item}
                funcSelect={onProductSelect}
                funcUnSelect={onProductUnSelect}
              />
            );
          })}
      </div>

      {canRemove && (
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={handleRemoveSelectedProducts}
        >
          Delete
          <DeleteIcon />
        </Button>
      )}
    </div>
  );
};

export default ProductsList;
