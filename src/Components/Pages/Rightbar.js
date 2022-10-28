import React from "react";
import USFLAG from "../../assets/images/flags/us_flag.jpg";
import ITALYFLAG from "../../assets/images/flags/italy_flag.jpg";
import FRENCHFLAG from "../../assets/images/flags/french_flag.jpg";
import SPAINFLAG from "../../assets/images/flags/spain_flag.jpg";
import RUSSIAFLAG from "../../assets/images/flags/russia_flag.jpg";
import AVATAR1 from "../../assets/images/users/avatar-1.jpg";
import AVATAR2 from "../../assets/images/users/avatar-2.jpg";
import AVATAR3 from "../../assets/images/users/avatar-3.jpg";
import AVATAR4 from "../../assets/images/users/avatar-4.jpg";

function Rightbar() {
  return (
    <div>
      <div className="menu-extras topbar-custom">
        <ul className="list-unstyled float-right mb-0">
          {/* <!-- language--> */}

          {/* <!-- notification--> */}
          <li className="dropdown notification-list">
            <a
              className="mt-1 nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="fas fa-wallet fa-2x"></i>
            </a>
          </li>
          {/* <!-- User--> */}
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect nav-user"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <img src={AVATAR1} alt="user" className="rounded-circle" />
            </a>
            <div className="dropdown-menu dropdown-menu-right profile-dropdown border-0">
              {/* <!-- item--> */}
              <div className="dropdown-item noti-title">
                <h5>Welcome</h5>
              </div>
              <a className="dropdown-item" href="#">
                <i className="mdi mdi-account-circle m-r-5 text-muted"></i>{" "}
                Profile
              </a>{" "}
              <a className="dropdown-item" href="#">
                <i className="mdi mdi-wallet m-r-5 text-muted"></i> My Wallet
              </a>{" "}
              <a className="dropdown-item" href="#">
                <span className="badge badge-success float-right">5</span>
                <i className="mdi mdi-settings m-r-5 text-muted"></i> Settings
              </a>{" "}
              <a className="dropdown-item" href="#">
                <i className="mdi mdi-lock-open-outline m-r-5 text-muted"></i>{" "}
                Lock screen
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                <i className="mdi mdi-logout m-r-5 text-muted"></i> Logout
              </a>
            </div>
          </li>
          <li className="menu-item">
            {/* <!-- Mobile menu toggle-->  */}
            <a className="navbar-toggle nav-link">
              <div className="lines">
                <span></span> <span></span> <span></span>
              </div>
            </a>
            {/* <!-- End mobile menu toggle--> */}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Rightbar;
