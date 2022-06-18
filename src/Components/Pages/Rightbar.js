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
          <li className="dropdown notification-list hide-phone">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              English <img src={USFLAG} className="ml-2" height="16" alt="" />
            </a>
            <div className="dropdown-menu dropdown-menu-right language-switch">
              <a className="dropdown-item" href="#">
                <img src={ITALYFLAG} alt="" height="16" />
                <span>Italian </span>
              </a>
              <a className="dropdown-item" href="#">
                <img src={FRENCHFLAG} alt="" height="16" />
                <span>French</span>
              </a>
              <a className="dropdown-item" href="#">
                <img src={SPAINFLAG} alt="" height="16" />
                <span>Spanish</span>
              </a>
              <a className="dropdown-item" href="#">
                <img src={RUSSIAFLAG} alt="" height="16" />
                <span>Russian</span>
              </a>
            </div>
          </li>
          {/* <!-- notification--> */}
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="dripicons-mail noti-icon"></i>{" "}
              <span className="badge badge-danger noti-icon-badge">5</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg border-0">
              {/* <!-- item--> */}
              <div className="dropdown-item noti-title">
                <h5>
                  <span className="badge badge-danger float-right">745</span>
                  Messages
                </h5>
              </div>
              {/* <!-- item--> */}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="notify-icon">
                  <img
                    src={AVATAR2}
                    alt="user-img"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <p className="notify-details">
                  <b>Charles M. Jones</b>
                  <small className="text-muted">
                    Dummy text of the printing and typesetting industry.
                  </small>
                </p>
              </a>
              {/* <!-- item-->  */}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="notify-icon">
                  <img
                    src={AVATAR3}
                    alt="user-img"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <p className="notify-details">
                  <b>Thomas J. Mimms</b>
                  <small className="text-muted">
                    You have 87 unread messages
                  </small>
                </p>
              </a>
              {/* <!-- item--> */}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="notify-icon">
                  <img
                    src={AVATAR4}
                    alt="user-img"
                    className="img-fluid rounded-circle"
                  />
                </div>
                <p className="notify-details">
                  <b>Luis M. Konrad</b>
                  <small className="text-muted">
                    It is a long established fact that a reader will
                  </small>
                </p>
              </a>
              {/* <!-- All--> */}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item border-top"
              >
                View All
              </a>
            </div>
          </li>
          {/* <!-- notification--> */}
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle arrow-none waves-effect"
              data-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="dripicons-bell noti-icon"></i>{" "}
              <span className="badge badge-success noti-icon-badge">2</span>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg border-0">
              {/* <!-- item--> */}
              <div className="dropdown-item noti-title">
                <h5>Notification (3)</h5>
              </div>
              {/* <!-- item--> */}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="notify-icon bg-success">
                  <i className="mdi mdi-cart-outline"></i>
                </div>
                <p className="notify-details">
                  <b>Your order is placed</b>
                  <small className="text-muted">
                    Dummy text of the printing and typesetting industry.
                  </small>
                </p>
              </a>
              {/* <!-- item--> */}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="notify-icon bg-warning">
                  <i className="mdi mdi-message"></i>
                </div>
                <p className="notify-details">
                  <b>New Message received</b>
                  <small className="text-muted">
                    You have 87 unread messages
                  </small>
                </p>
              </a>
              {/* <!-- item-->  */}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item"
              >
                <div className="notify-icon bg-info">
                  <i className="mdi mdi-glass-cocktail"></i>
                </div>
                <p className="notify-details">
                  <b>Your item is shipped</b>
                  <small className="text-muted">
                    It is a long established fact that a reader will
                  </small>
                </p>
              </a>
              {/* <!-- All-->  */}
              <a
                href="javascript:void(0);"
                className="dropdown-item notify-item border-top"
              >
                View All
              </a>
            </div>
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
