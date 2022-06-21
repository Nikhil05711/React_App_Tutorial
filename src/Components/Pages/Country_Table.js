import React from "react";
import Table from "react-bootstrap/Table";
import Leftbar from "./Leftbar";
import Navbar from "./Navbar";
import Rightbar from "./Rightbar";
import "./Country_Table.css";

function BasicExample() {
  // constructor(props){
  //   super(props);

  //   this.state = {
  //     Country: [],
  //   };
  //   this.callAPI = this.callAPI.bind(this);
  //   this.callAPI();
  // }

  // callAPI(){
  //   fetch("").then((response) => response.json())
  //   .then
  // }

  return (
    <div>
      <header id="topnav">
        <div className="topbar-main">
          <div className="container-fluid">
            {/* <!-- Logo container--> */}
            <Leftbar />
            {/* <!-- End Logo container--> */}
            <Rightbar />
            {/* <!-- end menu-extras --> */}
            <div className="clearfix"></div>
          </div>
          {/* <!-- end container --> */}
        </div>
        {/* <!-- end topbar-main --> */}
        {/* <!-- MENU Start --> */}
        <Navbar />
        {/* <!-- end navbar-custom --> */}
      </header>
      {/* <!-- For demo purpose --> */}
      <div class="container text-center text-white">
        <div class="row pt-5">
          <div class="col-lg-8 mx-auto">
            {/* <p class="lead">
              Snippet by{" "}
              <a href="https://bootstrapious.com/snippets" class="text-white">
                <u>Bootstrapious</u>
              </a>
            </p> */}
          </div>
        </div>
      </div>
      {/* <!-- End --> */}

      <div class="container py-5 class= cus-top">
        <div class="row">
          <div class="col-lg-7 mx-auto bg-white rounded shadow">
            {/* <!-- Fixed header table--> */}
            <div class="table-responsive">
              <table class="table table-fixed">
                <thead>
                  <tr>
                    <th scope="col" class="col-3">
                      #
                    </th>
                    <th scope="col" class="col-3">
                      First
                    </th>
                    <th scope="col" class="col-3">
                      Last
                    </th>
                    <th scope="col" class="col-3">
                      Handle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" class="col-3">
                      1
                    </th>
                    <td class="col-3">Mark</td>
                    <td class="col-3">Otto</td>
                    <td class="col-3">@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row" class="col-3">
                      2
                    </th>
                    <td class="col-3">Jacob</td>
                    <td class="col-3">Thornton</td>
                    <td class="col-3">@fat</td>
                  </tr>
                  <tr>
                    <th scope="row" class="col-3">
                      3
                    </th>
                    <td colspan="2" class="col-6">
                      Larry the Bird
                    </td>
                    <td class="col-3">@twitter</td>
                  </tr>
                  <tr>
                    <th scope="row" class="col-3">
                      4
                    </th>
                    <td class="col-3">Martin</td>
                    <td class="col-3">Williams</td>
                    <td class="col-3">@Marty</td>
                  </tr>
                  <tr>
                    <th scope="row" class="col-3">
                      5
                    </th>
                    <td colspan="2" class="col-3">
                      Sam
                    </td>
                    <td colspan="2" class="col-3">
                      Pascal
                    </td>
                    <td class="col-3">@sam</td>
                  </tr>
                  <tr>
                    <th scope="row" class="col-3">
                      6
                    </th>
                    <td class="col-3">John</td>
                    <td class="col-3">Green</td>
                    <td class="col-3">@john</td>
                  </tr>
                  <tr>
                    <th scope="row" class="col-3">
                      7
                    </th>
                    <td colspan="2" class="col-3">
                      David
                    </td>
                    <td colspan="2" class="col-3">
                      Bowie
                    </td>
                    <td class="col-3">@david</td>
                  </tr>
                  <tr>
                    <th scope="row" class="col-3">
                      8
                    </th>
                    <td class="col-3">Pedro</td>
                    <td class="col-3">Rodriguez</td>
                    <td class="col-3">@rod</td>
                  </tr>
                  <tr>
                    <th scope="row" class="col-3">
                      5
                    </th>
                    <td colspan="2" class="col-3">
                      Sam
                    </td>
                    <td colspan="2" class="col-3">
                      Pascal
                    </td>
                    <td class="col-3">@sam</td>
                  </tr>
                  <tr>
                    <th scope="row" class="col-3">
                      10
                    </th>
                    <td class="col-3">Jacob</td>
                    <td class="col-3">Thornton</td>
                    <td class="col-3">@fat</td>
                  </tr>
                  <tr>
                    <th scope="row" class="col-3">
                      11
                    </th>
                    <td colspan="2" class="col-6">
                      Larry the Bird
                    </td>
                    <td class="col-3">@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!-- End --> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
