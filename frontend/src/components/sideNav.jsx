import React, { Component } from "react";
import Button from "@mui/material/Button";
import MultipleSelectCheckmarks from "./brandFilter";
class SideNav extends Component {
  render() {
    return (
      <div className="side-nav">
        <form action="">
          <div className="form-group" style={{ display: "flex" }}>
            <label> Price</label>
            <input type="number" min={1000} placeholder="MIN" />
            <input type="number" min={1000} placeholder="MAX" />
          </div>

          <div className="form-group" style={{ display: "flex" }}>
            <label> Year</label>
            <select>
              <option>From</option>
            </select>
            <select>
              <option>To</option>
            </select>
          </div>
          {/* <Slider
          aria-label="Small"
          valueLabelDisplay="auto"
          step={1000}
          marks
          min={1000}
          max={100000}
        /> */}

          <div className="form-group" style={{ display: "inline-flex" }}>
            <label>Brand</label>
            <MultipleSelectCheckmarks></MultipleSelectCheckmarks>
          </div>
          <Button
            style={{ margin: "auto", marginTop: "15px", display: "block" }}
            variant="contained"
            color="success"
            size="small"
          >
            search
          </Button>
          {/* <Slider
          aria-label="Small"
          valueLabelDisplay="auto"
          step={1000}
          marks
          min={1000}
          max={100000}
        /> */}
        </form>
      </div>
    );
  }
}

export default SideNav;
