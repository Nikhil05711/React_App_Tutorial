import React from "react";

function Leads() {
  return (
    <div>
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-sm-6">
            <p className="mb-0 text-muted font-13">
              <i className="mdi mdi-album mr-2 text-warning"></i>New Leads
            </p>
          </div>
          <div className="col-sm-6">
            <p className="mb-0 text-muted font-13">
              <i className="mdi mdi-album mr-2 text-danger"></i>New Leads Target
            </p>
          </div>
        </div>
        <div className="progress bg-gradient1 mb-3" style={{ height: "5px" }}>
          <div
            className="progress-bar bg-gradient3"
            role="progressbar"
            style={{ width: "65%" }}
            aria-valuenow="65"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <a className="btn btn-primary btn-sm btn-block text-white">Read More</a>
      </div>
    </div>
  );
}

export default Leads;
