import React from "react";

function SortBtn(props) {
  return (
    <div>
      <button onClick={() => props.id}>Sort</button>
    </div>
  );
}

export default SortBtn;
