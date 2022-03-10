import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SelectFilter from "./selectFilter"
const SideNav = () => {
  let [minPrice, setMinPrice] = useState(1000);
  let [maxPrice, setMaxPrice] = useState(1000000);

  let handleChange = (evt) => {
    let val = evt.target.value;
    let name = evt.target.name;

    switch (name) {
      case "min":
        setMinPrice(val);
        break;
      case "max":
        setMaxPrice(val);
      // eslint-disable-next-line no-fallthrough
      default:
        break;
    }
  };

  return (
    <div className="side-nav">
      <form>
        <SelectFilter></SelectFilter>

        <div className="form-group">
          <label> Brand</label>
          <select class="form-select" aria-label="Default select example">
            <option>Choose brand</option>
          </select>
        </div>
        <div className="form-group">
          <label> Model</label>
          <select class="form-select" aria-label="Default select example">
            <option>Choose model</option>
          </select>
        </div>
        <div className="form-group">
          <label> Price</label>
          <div style={{ display: "flex" }}>
            <input
              name="min"
              type="number"
              min={1000}
              placeholder="MIN"
              onChange={handleChange}
            />
            <input
              name="max"
              type="number"
              min={1000}
              placeholder="MAX"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label> Category</label>
          <select class="form-select" aria-label="Default select example">
            <option>Choose category</option>
          </select>
        </div>

        <Button
          style={{ margin: "auto", marginTop: "15px", display: "block" }}
          variant="contained"
          color="success"
        >
          <Link
            to={{
              pathname: "/results",
              state: {
                min: minPrice,
                max: maxPrice,
              },
            }}
          >
            <SearchIcon />
          </Link>
        </Button>
      </form>
    </div>
  );
};

export default SideNav;
