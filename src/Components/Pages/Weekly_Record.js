import React from "react";

function Weekly_Record() {
  return (
    <div>
      <div className="card-body">
        <div
          className="btn-group btn-group-toggle float-right"
          data-toggle="buttons"
        >
          <label className="btn btn-primary btn-sm active">
            <input type="radio" name="options" id="option1" checked="" /> This
            Week
          </label>{" "}
          <label className="btn btn-primary btn-sm">
            <input type="radio" name="options" id="option2" /> Last Month
          </label>
        </div>
        <h5 className="header-title mb-4 mt-0">Weekly Record</h5>
        <canvas id="lineChart" height="260"></canvas>
      </div>
    </div>
  );
}

export default Weekly_Record;
