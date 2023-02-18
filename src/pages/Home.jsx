import React, { useEffect } from "react";
import { useState } from "react";
import DataTable from "../components/data-table/DataTable";
import Header from "../components/header/Header";
import api from "../utils/axios";
const Home = ({ data }) => {
  return (
    <div>
      <Header />
      <DataTable data={data} />
    </div>
  );
};

export default Home;
