import React, { useEffect, useState } from "react";
import "./App.css";
import Topbar from "./Components/Component/Header";
import BasicExample from "./Components/Pages/Country_Table";
import State_Table from "./Components/Pages/State_Table";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { getCookie } from "./Components/Library/Cookies";
import Login from "./Components/Component/Login";
import Product from "./Components/Pages/product";
import Generate_Token from "./Components/Pages/Generate_Token";
import Categories from "./Components/Pages/Categories";
import Order_Summary from "./Components/Pages/Order_Summary";
import "./global";
import { DATACONSTANT } from "./constants/data.constant";

function App() {
  const navigate = useNavigate();
  const [page, setPage] = useState(true);
  let x = getCookie(DATACONSTANT.SETCOOKIE);
  useEffect(() => {
    console.log(x);
    if (!getCookie(DATACONSTANT.SETCOOKIE)) {
      setPage(false);
      return navigate("/");
    } else {
      setPage(true);
      return navigate("/");
    }
  }, [page, x]);

  const location = useLocation();

  return (
    <div>
      {/* <Test data={{ Name: "Nikhil Chauhan", Age: 22, Hometown: "Aligarh" }} /> */}
      {page ? (
        <Routes>
          <Route exact path="/" element={<Topbar />} />
          <Route exact path="/country" element={<BasicExample />} />
          <Route exact path="/state" element={<State_Table />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/Category" element={<Categories />} />
          <Route exact path="/Order_Summary" element={<Order_Summary />} />
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
