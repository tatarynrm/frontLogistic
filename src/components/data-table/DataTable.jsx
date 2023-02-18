import React, { useEffect, useState } from "react";
import api from "../../utils/axios";
import DataRow from "./DataRow";

const DataTable = ({ data }) => {
  const [filter, setFilter] = useState("date");
  return (
    <div className="table">
      {data.map((note, idx) => (
        <DataRow key={idx} note={note} />
      ))}
    </div>
  );
};

export default DataTable;
