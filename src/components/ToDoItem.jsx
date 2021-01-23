import React from "react";

function Item(props) {
  //const [isCrossed, setCrossed] = React.useState(false);

  // function handleClick() {
  //   //isCrossed ? setCrossed(false) : setCrossed(true);
  //   //setCrossed((prevVal) => !prevVal);
  // }

  return (
    <li
      // onClick={handleClick}
      // style={{ textDecoration: isCrossed ? "line-through" : "none" }}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.item}{" "}
    </li>
  );
}

export default Item;
