import React from "react";
import ProductsList from "./productLis";

function ItemsContainer(props) {
  return (
    <div id="itemsArea" className="container">
      <ProductsList></ProductsList>
    </div>
  );
}
export default ItemsContainer;
