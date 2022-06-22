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

        <div class="container-fluid py-5 class= cus-top">
          <div class="row">
            <div class="col-lg-12 bg-white rounded shadow">
              {/* <!-- Fixed header table--> */}
              <div class="d-flex pt-2 pb-2 right">
                <Button class="btn btn-danger">New</Button>
              </div>
              <div class="table-responsive">
                <table class="table table-fixed">
                  <thead>
                    <tr>
                      {tableHead.map((data, index) => {
                        return (
                          <th
                            scope="col"
                            class="col-3"
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
                          <th scope="row" class="col-3">
                            {index + 1}
                          </th>
                          <td class="col-3">{data.name}</td>
                          <td class="col-3">{data.code}</td>
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
