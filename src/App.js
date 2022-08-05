import React, { useEffect, useState } from "react";
import "./App.css";
import Topbar from "./Components/Component/Header";
import BasicExample from "./Components/Pages/Country_Table";
import State_Table from "./Components/Pages/State_Table";
import { Route, Routes, useNavigate } from "react-router-dom";
import { getCookie } from "./Components/Library/Cookies";
import Login from "./Components/Component/Login";
import Product from "./Components/Pages/product";
import Generate_Token from "./Components/Pages/Generate_Token";
import "./global";

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
          <Route exact path="/products" element={<Product />} />
          {/* <Route exact path="/Generate_Token" element={<Generate_Token />} /> */}
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Generate_Token />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
