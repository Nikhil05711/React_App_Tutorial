import React from "react";
import CODESVG from "../../assets/images/widgets/code.svg";

function Code_Confirm() {
  return (
    <div>
      <div className="card-body">
        <div className="d-sm-flex align-self-center">
          <img src={CODESVG} alt="" className="" height="100" />
          <div className="media-body ml-3">
            <h6 className="mt-0">Code Confirmed</h6>
            <p className="text-muted font-13">
              Contrary to popular belief, generators on Lorem Ipsum is not
              simply random text.
            </p>
            <a href="#" className="btn btn-gradient-secondary">
              Confirm
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Code_Confirm;
