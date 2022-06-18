import React from "react";
import AVATAR1 from "../../assets/images/users/avatar-1.jpg";
import AVATAR2 from "../../assets/images/users/avatar-2.jpg";
import AVATAR3 from "../../assets/images/users/avatar-3.jpg";
import AVATAR4 from "../../assets/images/users/avatar-4.jpg";
import AVATAR5 from "../../assets/images/users/avatar-5.jpg";
import AVATAR6 from "../../assets/images/users/avatar-6.jpg";

function Payment() {
  return (
    <div>
      <h5 className="header-title pb-3 mt-0">Payments</h5>
      <div className="table-responsive">
        <table className="table table-hover mb-0">
          <thead>
            <tr className="align-self-center">
              <th>Project Name</th>
              <th>Client Name</th>
              <th>Payment Type</th>
              <th>Paid Date</th>
              <th>Amount</th>
              <th>Transaction</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Devlopment</td>
              <td>
                <img
                  src={AVATAR1}
                  alt=""
                  className="thumb-sm rounded-circle mr-2"
                />{" "}
                Kevin Heal
              </td>
              <td>Paypal</td>
              <td>5/8/2018</td>
              <td>$15,000</td>
              <td>
                <span className="badge badge-boxed badge-soft-warning">
                  panding
                </span>
              </td>
            </tr>
            <tr>
              <td>New Office Building</td>
              <td>
                <img
                  src={AVATAR2}
                  alt=""
                  className="thumb-sm rounded-circle mr-2"
                />{" "}
                Frank M. Lyons
              </td>
              <td>Paypal</td>
              <td>15/7/2018</td>
              <td>$35,000</td>
              <td>
                <span className="badge badge-boxed badge-soft-primary">
                  Success
                </span>
              </td>
            </tr>
            <tr>
              <td>Market Research</td>
              <td>
                <img
                  src={AVATAR3}
                  alt=""
                  className="thumb-sm rounded-circle mr-2"
                />{" "}
                Angelo Butler
              </td>
              <td>Pioneer</td>
              <td>30/9/2018</td>
              <td>$45,000</td>
              <td>
                <span className="badge badge-boxed badge-soft-warning">
                  Panding
                </span>
              </td>
            </tr>
            <tr>
              <td>Website &amp; Blog</td>
              <td>
                <img
                  src={AVATAR4}
                  alt=""
                  className="thumb-sm rounded-circle mr-2"
                />{" "}
                Phillip Morse
              </td>
              <td>Paypal</td>
              <td>2/6/2018</td>
              <td>$70,000</td>
              <td>
                <span className="badge badge-boxed badge-soft-warning">
                  Success
                </span>
              </td>
            </tr>
            <tr>
              <td>Product Devlopment</td>
              <td>
                <img
                  src={AVATAR5}
                  alt=""
                  className="thumb-sm rounded-circle mr-2"
                />{" "}
                Kevin Heal
              </td>
              <td>Paypal</td>
              <td>5/8/2018</td>
              <td>$15,000</td>
              <td>
                <span className="badge badge-boxed badge-soft-primary">
                  panding
                </span>
              </td>
            </tr>
            <tr>
              <td>New Office Building</td>
              <td>
                <img
                  src={AVATAR6}
                  alt=""
                  className="thumb-sm rounded-circle mr-2"
                />{" "}
                Frank M. Lyons
              </td>
              <td>Paypal</td>
              <td>15/7/2018</td>
              <td>$35,000</td>
              <td>
                <span className="badge badge-boxed badge-soft-primary">
                  Success
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <!--end table-responsive--> */}
      <div className="pt-3 border-top text-right">
        <a href="#" className="text-primary">
          View all <i className="mdi mdi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}

export default Payment;
