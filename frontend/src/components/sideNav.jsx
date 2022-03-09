import React, { Component } from "react";
import Button from "@mui/material/Button";
import BrandsFilter from "./brandFilter";
import ModelsFilter from "./modelsFilter";
import CategorysFilter from "./categorysFilter";
class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <form action="">
          <div className="form-group">
            <label>Brand</label>
            <BrandsFilter size="small"></BrandsFilter>
          </div>

          <div className="form-group">
            <label>Model</label>
            <ModelsFilter size="small"></ModelsFilter>
          </div>


          <div className="form-group">
            <label>Category</label>
            <CategorysFilter size="small"></CategorysFilter>
          </div>


          <div className="form-group">
            <label> Price</label>
            <div style={{ display: "flex" }}>
              <input type="number" min={1000} placeholder="MIN" />
              <input type="number" min={1000} placeholder="MAX" />
            </div>
          </div>
          {/* <Slider
          aria-label="Small"
          valueLabelDisplay="auto"
          step={1000}
          marks
          min={1000}
          max={100000}
        /> */}

          <Button
            style={{ margin: "auto", marginTop: "15px", display: "block" }}
            variant="contained"
            color="success"
            size="small"
          >
            search
          </Button>
        </form>
      </div>
    );
  }
}

export default SideNav;
