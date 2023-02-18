import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./utils/axios";
import EditNote from "./pages/EditNote";
function App() {
  const arr = [];
  const [table, setTable] = useState([]);
  const getTableData = async () => {
    const { data } = await api.get("/notes");
    setTable(data.reverse());
  };
  useEffect(() => {
    getTableData();
  }, [table]);
  return (
    <div className="logistic">
      <div className="container">
        <Routes>
          <Route path="/" element={<Home data={table} />} />
          <Route path="/notes/:id" element={<EditNote data={table} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
