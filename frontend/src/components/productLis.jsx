import React, { useState, useEffect } from "react";
import Product from "./product";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

const ProductsList = () => {
  let [data, setData] = useState(null);
  let [isPending, setIsPending] = useState(true);
  let [error, setError] = useState(null);

  let [selectedProduct, setSelectedProducts] = useState([]);
  let [canRemove, setCanRemove] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();
    fetch("http://localhost:3002/products", { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => abortCont.abort();
  }, [data]);

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
        {data &&
          data.map((item) => {
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
