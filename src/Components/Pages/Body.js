import React from "react";
import Breadcrump from "./Breadcrump";
import Active_Task from "./Active_Task";
import Project from "./Project";
import Teams from "./Teams";
import Budget from "./Budget";
import Weekly_Record from "./Weekly_Record";
import Activity from "./Activity";
import Leads from "./Leads";
import New_client from "./New_client";
import Revenue from "./Revenue";
import Code_Confirm from "./Code_Confirm";
import Week_Activity from "./Week_Activity";
import Payment from "./Payment";

function Body() {
  return (
    <div>
      <div className="wrapper">
        <div className="container-fluid">
          {/* <!-- Page-Title --> */}
          <Breadcrump />
          {/* <!-- end page title end breadcrumb --> */}
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                <div className="col-lg-3">
                  <Active_Task />
                </div>
                <div className="col-lg-3">
                  <Project />
                </div>
                <div className="col-lg-3">
                  <Teams />
                </div>
                <div className="col-lg-3">
                  <Budget />
                </div>
              </div>
              <div className="card">
                <Weekly_Record />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <Activity />
              </div>
              <div className="card">
                <Leads />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <New_client />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <div className="card">
                <Revenue />
              </div>
              <div className="card">
                <Code_Confirm />
              </div>
            </div>
            <div className="col-xl-4 col-lg-6">
              <Week_Activity />
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-body">
                  <Payment />
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
    </div>
  );
}

export default Body;
