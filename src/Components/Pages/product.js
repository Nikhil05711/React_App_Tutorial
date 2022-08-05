import React, { useState } from "react";
import Leftbar from "./Leftbar";
import Rightbar from "./Rightbar";
import Navbar from "./Navbar";
import "./State_Table.css";
import { Button } from "react-bootstrap";
import Product_Modal from "./Product_Modal";

function Product() {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const tableHead = [
    { title: "id", width: "5%" },
    { title: "Category_Name", width: "25%" },
    { title: "Product_Name", width: "35%" },
    { title: "MRP", width: "10" },
    { title: "Selling_Price", width: "15" },
    { title: "image", width: "5" },
    { title: "action", width: "5" },
  ];
  return (
    <div>
      <header id="topnav">
        <div className="topbar-main">
          <div className="container-fluid">
            {/* <!-- Logo container--> */}
            <Leftbar />
            {/* <!-- End Logo container--> */}
            <Rightbar />
            {/* <!-- end menu-extras --> */}
            <div className="clearfix"></div>
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end topbar-main --> */}
        {/* <!-- MENU Start --> */}
        <Navbar />
        {/* <!-- end navbar-custom --> */}
      </header>
      <div className="container-fluid py-5 cus-top">
        <div className="row">
          <div className="col-lg-12 bg-white rounded shadow">
            <div className="d-flex pt-2 pb-2 right">
              <Button className="btn btn-danger" onClick={() => setShow(true)}>
                New
              </Button>
            </div>
            {show && (
              <Product_Modal
                setData={setData}
                show={show}
                onClose={() => setShow(false)}
                closeModal={setShow}
              />
            )}
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    {tableHead.map((data, index) => {
                      return (
                        <th
                          scope="col"
                          className=""
                          style={{ width: data.width }}
                        >
                          {data.title}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {data.map((data, index) => {
                    return (
                      <tr key={index}>
                        <th scope="row">{data.id}</th>
                        <td>{data.Category_Name}</td>
                        <td className="">{data.Product_Name}</td>
                        <td className="">{data.MRP}</td>
                        <td className="">{data.Selling_Price}</td>
                        <td className="">{data.image}</td>
                        <td className="">{data.action}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
