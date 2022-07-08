import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ethers } from "ethers";
import axios from "axios";

function Navbar() {
  const [data, setData] = useState({
    address: "",
    balance: null,
  });
  const [show, setShow] = useState(true);
  React.useEffect(() => {
    handleButton();
  }, []);
  const handleButton = async () => {
    if (window.ethereum) {
      const res = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log(res[0]);
      return getBalance(res[0]);
    } else {
      alert("install metamask wallet !!");
    }
  };

  const getBalance = async (address) => {
    const res = await window.ethereum.request({
      method: "eth_getBalance",
      params: [address, "latest"],
    });
    const a = ethers.utils.formatEther(res);
    // asset();
    setShow(!show);
    console.log(a);
    // .then((balance) => {
    //   setData({
    //     Balance: ethers.utils.formatEther(balance),
    //   });
    // });
  };

  const accountChangeHandler = (account) => {
    setData({
      address: account,
    });
    getBalance(account);
  };

  // const [dataa, setDataa] = useState({
  //   id: 1,
  //   jsonrpc: "2.0",
  //   method: "wallet_getOwnedAssets",
  //   params: [
  //     "0x3333333333333333333333333333333333333333",
  //     {
  //       justification:
  //         "The dApp needs to know about all your assets in order to calculate your taxes properly.",
  //     },
  //   ],
  // });
  // const asset = async () => {
  //   const res = await axios({
  //     method: "post",
  //     url: "/t/eip-2256-add-wallet-getownedassets-json-rpc-method/3600",
  //     data: dataa,
  //   });
  //   console.log("asset", res);
  //   return res;
  // };

  return (
    <div>
      <div className="navbar-custom">
        <div className="container-fluid">
          <div id="navigation">
            {/* <!-- Navigation Menu--> */}
            <ul className="navigation-menu">
              <li className="has-submenu">
                <NavLink to="/">
                  <i className="dripicons-device-desktop"></i>Dashboard
                </NavLink>
              </li>
              <li className="has-submenu">
                <a href="calender.html">
                  <i className="dripicons-to-do"></i>Calendar
                </a>
              </li>
              <li className="has-submenu">
                <a href="#">
                  <i className="dripicons-jewel"></i>User Interface
                </a>
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li>
                        <a href="ui-alerts.html">Alerts</a>
                      </li>
                      <li>
                        <a href="ui-alertify.html">Alertify</a>
                      </li>
                      <li>
                        <a href="ui-badge.html">Badge</a>
                      </li>
                      <li>
                        <a href="ui-buttons.html">Buttons</a>
                      </li>
                      <li>
                        <a href="ui-carousel.html">Carousel</a>
                      </li>
                      <li>
                        <a href="ui-cards.html">Cards</a>
                      </li>
                      <li>
                        <a href="ui-dropdowns.html">Dropdowns</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="ui-grid.html">Grid</a>
                      </li>
                      <li>
                        <a href="ui-images.html">Images</a>
                      </li>
                      <li>
                        <a href="ui-lightbox.html">Lightbox</a>
                      </li>
                      <li>
                        <a href="ui-modals.html">Modals</a>
                      </li>
                      <li>
                        <a href="ui-navs.html">Navs</a>
                      </li>
                      <li>
                        <a href="ui-progressbars.html">Progress Bars</a>
                      </li>
                      <li>
                        <a href="ui-pagination.html">Pagination</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="ui-popover-tooltips.html">
                          Popover & Tooltips
                        </a>
                      </li>
                      <li>
                        <a href="ui-rating.html">Rating</a>
                      </li>
                      <li>
                        <a href="ui-rangeslider.html">Range Slider</a>
                      </li>
                      <li>
                        <a href="ui-sweet-alert.html">Sweet-Alert</a>
                      </li>
                      <li>
                        <a href="ui-typography.html">Typography</a>
                      </li>
                      <li>
                        <a href="ui-tabs-accordions.html">
                          Tabs &amp; Accordions
                        </a>
                      </li>
                      <li>
                        <a href="ui-video.html">Video</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  <i className="dripicons-blog"></i>Components
                </a>
                <ul className="submenu">
                  <li className="has-submenu">
                    <a href="#">Forms</a>
                    <ul className="submenu">
                      <li>
                        <a href="form-advanced.html">Form Advanced</a>
                      </li>
                      <li>
                        <a href="form-elements.html">Form Elements</a>
                      </li>
                      <li>
                        <a href="form-editors.html">Form Editors</a>
                      </li>
                      <li>
                        <a href="form-uploads.html">Form File Upload</a>
                      </li>
                      <li>
                        <a href="form-mask.html">Form Mask</a>
                      </li>
                      <li>
                        <a href="form-summernote.html">Summernote</a>
                      </li>
                      <li>
                        <a href="form-validation.html">Form Validation</a>
                      </li>
                      <li>
                        <a href="form-xeditable.html">Form Xeditable</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Charts</a>
                    <ul className="submenu">
                      <li>
                        <a href="charts-chartist.html">Chartist Chart</a>
                      </li>
                      <li>
                        <a href="charts-chartjs.html">Chartjs Chart</a>
                      </li>
                      <li>
                        <a href="charts-c3.html">C3 Chart</a>
                      </li>
                      <li>
                        <a href="charts-flot.html">Flot Chart</a>
                      </li>
                      <li>
                        <a href="charts-other.html">Jquery Knob Chart</a>
                      </li>
                      <li>
                        <a href="charts-morris.html">Morris Chart</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Tables</a>
                    <ul className="submenu">
                      <li>
                        <a href="tables-basic.html">Basic Tables</a>
                      </li>
                      <li>
                        <a href="tables-datatable.html">Data Table</a>
                      </li>
                      <li>
                        <a href="tables-editable.html">Editable Table</a>
                      </li>
                      <li>
                        <a href="tables-responsive.html">Responsive Table</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Icons</a>
                    <ul className="submenu">
                      <li>
                        <a href="icons-dripicons.html">Dripicons</a>
                      </li>
                      <li>
                        <a href="icons-fontawesome.html">Font Awesome</a>
                      </li>
                      <li>
                        <a href="icons-ion.html">Ion Icons</a>
                      </li>
                      <li>
                        <a href="icons-material.html">Material Design</a>
                      </li>
                      <li>
                        <a href="icons-themify.html">Themify Icons</a>
                      </li>
                      <li>
                        <a href="icons-typicons.html">Typicons Icons</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <a href="#">Maps</a>
                    <ul className="submenu">
                      <li>
                        <a href="maps-google.html">Google Map</a>
                      </li>
                      <li>
                        <a href="maps-vector.html">Vector Map</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  <i className="dripicons-copy"></i>Pages
                </a>
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li>
                        <NavLink to="/">Login</NavLink>
                      </li>
                      <li>
                        <a href="pages-register.html">Register</a>
                      </li>
                      <li>
                        <a href="pages-recoverpw.html">Recover Password</a>
                      </li>
                      <li>
                        <a href="pages-lock-screen.html">Lock Screen</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul>
                      <li>
                        <a href="pages-blank.html">Blank Page</a>
                      </li>
                      <li>
                        <a href="pages-404.html">Error 404</a>
                      </li>
                      <li>
                        <a href="pages-500.html">Error 500</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="has-submenu">
                <a href="#">
                  <i className="dripicons-copy"></i>Tables
                </a>
                <ul className="submenu megamenu">
                  <li>
                    <ul>
                      <li>
                        <NavLink to="/country">Country</NavLink>
                      </li>
                      <li>
                        <NavLink to="/state">State</NavLink>
                      </li>
                      <li>
                        <a href="pages-recoverpw.html">City</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
            {/* onClick={() => setShow(true)} */}
            {show && (
              <div className="pt-2 pb-2 right">
                <Button className="btn btn-danger">Connect To Wallet</Button>
              </div>
            )}

            {/* <!-- End navigation menu --> */}
          </div>
          {/* <!-- end #navigation --> */}
        </div>
        {/* <!-- end container --> */}
      </div>
    </div>
  );
}

export default Navbar;
