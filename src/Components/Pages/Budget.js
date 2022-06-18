import React from "react";

function Budget() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="icon-contain">
            <div className="row">
              <div className="col-2 align-self-center">
                <i className="fas fa-database text-gradient-primary"></i>
              </div>
              <div className="col-10 text-right">
                <h5 className="mt-0 mb-1">$15562</h5>
                <p className="mb-0 font-12 text-muted">Budget</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Budget;
