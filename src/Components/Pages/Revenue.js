import React from "react";

function Revenue() {
  return (
    <div>
      <div className="card-body">
        <a href="#" className="btn btn-outline-success float-right">
          Withdraw Monthly
        </a>
        <h5 className="header-title mb-4 mt-0">Monthly Revenue</h5>
        <h4 className="mb-4">$15,421.50</h4>
        <p className="font-14 text-muted mb-3">
          <i className="mdi mdi-message-reply text-danger mr-2 font-18"></i> $
          1500 when an unknown printer took a galley.
        </p>
        <canvas id="bar-data" height="125"></canvas>
      </div>
    </div>
  );
}

export default Revenue;
