import React, { useState } from "react";
import useFetch from "./useFetch";
import Product from "./product";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation } from "react-router-dom";

const ResultsPage = (props) => {
  let [selectedProduct, setSelectedProducts] = useState([]);
  let [canRemove, setCanRemove] = useState(false);
  const location = useLocation();
  const { brand } = location.state;
  const { min } = location.state;
  const { max } = location.state;
  const { category } = location.state;

  let {
    data: products,
    isPending,
    error,
  } = useFetch("http://localhost:3002/products");

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
          products
            .filter(
              (p) =>
                p.brandName === brand ||
                p.category === category ||
                (p.price >= min && p.price <= max && p.brandName === brand) ||
                (p.price >= min && p.price <= max && p.category === category)
            )
            .map((item) => {
              return (
                // {!item && (<div> <h1>nothing</h1> </div>)}

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

export default ResultsPage;
