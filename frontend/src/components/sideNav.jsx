import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SelectBrandFilter from "./selectBrandFilter";
import BrandInput from "./brandInput";
import CategoryInput from "./categoryInput";

const SideNav = () => {
  let [brandName, setBrand] = useState("");
  let [minPrice, setMinPrice] = useState(1000);
  let [maxPrice, setMaxPrice] = useState(1000000);
  let [category, setCategory] = useState("");

  let handleChange = (evt) => {
    let val = evt.target.value;
    let name = evt.target.name;

    switch (name) {
      case "min":
        setMinPrice(Number(val));
        break;
      case "max":
        setMaxPrice(Number(val));
        break;
      case "brandName":
        setBrand(val);
        break;
      case "category":
        setCategory(val);
        break;
      // eslint-disable-next-line no-fallthrough
      default:
        break;
    }
  };

  return (
    <div className="side-nav">
      <form>
        {/* <SelectBrandFilter></SelectBrandFilter> */}
        <div className="form-group">
          <BrandInput
            defaultOption={"Choose brand"}
            handleChange={handleChange}
          ></BrandInput>
        </div>

        {/* <div className="form-group">
          <label> Brand</label>
          <select className="form-select" aria-label="Default select example">
            <option>Choose brand</option>
          </select>
        </div> */}

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
              min={1000000}
              placeholder="MAX"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <CategoryInput
            defaultOption={"Choose category"}
            handleChange={handleChange}
          ></CategoryInput>
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
                brand: brandName,
                min: minPrice,
                max: maxPrice,
                category:category
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
