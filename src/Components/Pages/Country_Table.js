import React from "react";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import "./Country_Table.css";
import { CountryData } from "../../JSON/Table_Data";
import { Button } from "react-bootstrap";

export const BasicExample = () => {
  const tableHead = [
    { title: "#", width: "33%" },
    { title: "Name", width: "33%" },
    { title: "Code", width: "34%" },
  ];
  return (
    <div>
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

        {/* <!-- For demo purpose --> */}

        <div className="container-fluid py-5 class= cus-top">
          <div className="row">
            <div className="col-lg-12 bg-white rounded shadow">
              {/* <!-- Fixed header table--> */}
              <div className="d-flex pt-2 pb-2 right">
                <Button className="btn btn-danger">New</Button>
              </div>
              <div className="table-responsive">
                <table className="table table-fixed">
                  <thead>
                    <tr>
                      {tableHead.map((data, index) => {
                        return (
                          <th
                            scope="col"
                            className="col-3"
                            style={{ width: data.width }}
                          >
                            {data.title}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody style={{ display: "flex", flexDirection: "column" }}>
                    {CountryData.map((data, index) => {
                      return (
                        <tr>
                          <th scope="row" className="col-3">
                            {index + 1}
                          </th>
                          <td className="col-3">{data.name}</td>
                          <td className="col-3">{data.code}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* <!-- End --> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicExample;
