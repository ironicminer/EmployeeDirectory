import axios from "axios";
import React from "react";

function TableHeader(props) {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>First</th>
        <th>Last</th>
        <th>Email</th>
        <th>Photo</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
