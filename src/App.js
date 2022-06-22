import logo from "./logo.svg";
import "./App.css";
import Topbar from "./Components/Component/Header";
import BasicExample from "./Components/Pages/Country_Table";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Topbar />} />
      <Route exact path="/country" element={<BasicExample />} />
    </Routes>
  );
}

export default App;
