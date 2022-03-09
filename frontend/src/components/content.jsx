import React from "react";
import SideNav from "./sideNav";
import ItemContainer from "./itemContainer";

function Content(props) {
  return (
    <div className="contant">
      <SideNav></SideNav>
      <ItemContainer></ItemContainer>
    </div>
  );
}

export default Content;
