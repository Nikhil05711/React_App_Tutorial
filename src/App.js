import React, { useEffect, useState } from "react";
import "./App.css";
import Topbar from "./Components/Component/Header";
import BasicExample from "./Components/Pages/Country_Table";
import State_Table from "./Components/Pages/State_Table";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getCookie } from "./Components/Library/Cookies";
import Login from "./Components/Component/Login";
import Test from "./Components/Pages/Test";

function App() {
  const navigate = useNavigate();
  const [page, setPage] = useState(true);
  let x = getCookie(".milkyfie_user");
  useEffect(() => {
    console.log(x);
    if (!getCookie(".milkyfie_user")) {
      setPage(false);
      return navigate("/");
    } else {
      return setPage(true);
    }
  }, [page, x]);

  return (
    <div>
      {/* <Test data={{ Name: "Nikhil Chauhan", Age: 22, Hometown: "Aligarh" }} /> */}
      {page ? (
        <Routes>
          <Route exact path="/" element={<Topbar />} />
          <Route exact path="/country" element={<BasicExample />} />
          <Route exact path="/state" element={<State_Table />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
