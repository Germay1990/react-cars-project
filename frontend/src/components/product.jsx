import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Product(props) {
  let [item, setItem] = useState(null);

  useEffect(() => {
    setItem(props.productData);
    //  eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let handleDelete = () => {
    fetch("http://localhost:3002/products/" + item._id, {
      method: "DELETE",
    });
  };

  return (
    <div className="col-3 border ">
      {item && (
        <div className="div-item">
          <div className="itemButtons">
            <Link
              to={`/editProduct/${item._id}`}
              className="btn btn-info btn-sm rounded-0"
              type="button"
              data-toggle="tooltip"
              data-placement="top"
              title="Edit"
            >
              <i className="fa fa-edit"></i>
            </Link>

            <button
              className="btn btn-danger btn-sm rounded-0"
              type="button"
              data-toggle="tooltip"
              data-placement="top"
              title="Delete"
              onClick={handleDelete}
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
          <div>
            <div className="img-checkbox-area">
              <img src={item.imageUrl} alt="" className="itemImage" />
              <input
                type="checkbox"
                onChange={(eve) => {
                  // props.funcHandleSelect();
                  if (eve.target.checked) {
                    props.funcSelect(item._id);
                  } else {
                    props.funcUnSelect(item._id);
                  }
                }}
              />
            </div>
            <h4>{item.brandName}</h4>
            <h4>{item.model}</h4>
            <div>Price: {item.price}</div>
            <div>Category: {item.category}</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Product;
