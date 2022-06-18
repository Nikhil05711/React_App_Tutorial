import React from "react";

function Activity() {
  return (
    <div>
      <div className="card-body">
        <div className="dropdown d-inline-block float-right">
          <a
            className="nav-link dropdown-toggle arrow-none"
            id="dLabel4"
            data-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="false"
            aria-expanded="false"
          >
            <i className="fas fa-ellipsis-v font-20 text-muted"></i>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="dLabel4"
          >
            <a className="dropdown-item" href="#">
              Create Project
            </a>{" "}
            <a className="dropdown-item" href="#">
              Open Project
            </a>{" "}
            <a className="dropdown-item" href="#">
              Tasks Details
            </a>
          </div>
        </div>
        <h5 className="header-title mb-4 mt-0">Activity</h5>
        <div>
          <canvas id="dash-doughnut" height="200"></canvas>
        </div>
        <ul className="list-unstyled list-inline text-center mb-0 mt-3">
          <li className="mb-2 list-inline-item text-muted font-13">
            <i className="mdi mdi-label text-success mr-2"></i>Active
          </li>
          <li className="mb-2 list-inline-item text-muted font-13">
            <i className="mdi mdi-label text-danger mr-2"></i>Complete
          </li>
          <li className="mb-2 list-inline-item text-muted font-13">
            <i className="mdi mdi-label text-warning mr-2"></i>Panding
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Activity;
