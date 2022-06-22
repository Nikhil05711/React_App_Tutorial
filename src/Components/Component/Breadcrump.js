import React from "react";

function Breadcrump() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <div className="float-right hide-phone">
              <ul className="list-inline">
                <li className="list-inline-item mr-3">
                  <input
                    className="knob"
                    data-width="48"
                    data-height="48"
                    data-linecap="round"
                    data-fgcolor="#605daf"
                    value="260"
                    data-skin="tron"
                    data-angleoffset="180"
                    data-readonly="true"
                    data-thickness=".1"
                  />
                </li>
                <li className="list-inline-item">
                  <span className="text-muted">Storage used</span>
                  <h6>400GB/524.84GB</h6>
                </li>
              </ul>
            </div>
            <h4 className="page-title">Dashboard</h4>
            <div className="btn-group mt-2">
              <ol className="breadcrumb hide-phone p-0 m-0">
                <li className="breadcrumb-item">
                  <a href="#">Zoogler</a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Breadcrump;
