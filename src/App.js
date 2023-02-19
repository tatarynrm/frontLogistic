import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "./utils/axios";
import EditNote from "./pages/EditNote";
import Auth from "./auth/Auth";
function App() {
  const [auth, setAuth] = useState(false);
  const [table, setTable] = useState([]);
  const getTableData = async () => {
    const { data } = await api.get("/notes");
    const reverse = data.reverse();
    setTable(reverse);
  };
  useEffect(() => {
    getTableData();
  }, [table]);

  const isAuth = localStorage.getItem("pass");
  useEffect(() => {
    if (isAuth) {
      setAuth(true);
    }
  }, [table]);
  return (
    <div className="logistic">
      <div className="container">
        {auth ? (
          <Routes>
            <Route path="/" element={<Home data={table} />} />
            <Route path="/notes/:id" element={<EditNote data={table} />} />
          </Routes>
        ) : (
          <Auth auth={auth} setAuth={setAuth} />
        )}

        <button
          onClick={() => {
            localStorage.clear();
            setAuth(false);
          }}
          className="delete"
        >
          Вийти
        </button>
      </div>
    </div>
  );
}

export default App;
