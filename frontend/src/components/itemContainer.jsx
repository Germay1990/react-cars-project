import React from "react";
import ProductsList from "./productLis";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

function ItemsContainer(props) {
  return (
    // <div id="itemsArea" className="container">
    <div className="container">
      <ProductsList></ProductsList>
      
      <div>
        <Button style={{ marginTop:"10px" }} variant="contained">
          <Link to="/addCar">
            <AddIcon />
          </Link>
        </Button>
      </div>
    </div>
  );
}
export default ItemsContainer;
