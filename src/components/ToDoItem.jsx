import React from "react";
import garbageCan from "./delete.png";

function ToDoItem(props) {
  function handleClick() {
    //when garbage can is clicked
    //deleteItem() function is called within app.jsx
    //pass the function the index of the item pressed
    props.onChecked(props.id);
  }

  return (
    <div>
      <li>
        {props.item} {"   "}
        <img onClick={handleClick} src={garbageCan} width="20px" />
      </li>
    </div>
  );
}

export default ToDoItem;
