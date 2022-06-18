import React from "react";

function Week_Activity() {
  return (
    <div>
      <div className="card timeline-card">
        <div className="card-body p-0">
          <div className="bg-gradient2 text-white text-center py-3 mb-4">
            <p className="mb-0 font-18">
              <i className="mdi mdi-clock-outline font-20"></i> This Week's
              Activity
            </p>
          </div>
        </div>
        <div className="card-body boxscroll">
          <div className="timeline">
            <div className="entry">
              <div className="title">
                <h6>10/ Oct</h6>
              </div>
              <div className="body">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available.....
                  <a href="#" className="text-primary">
                    {" "}
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="entry">
              <div className="title">
                <h6>9/ Oct</h6>
              </div>
              <div className="body">
                <p>
                  All the Lorem Ipsum generators on the predefined chunks as
                  necessary.....
                  <a href="#" className="text-primary">
                    {" "}
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="entry">
              <div className="title">
                <h6>8/ Oct</h6>
              </div>
              <div className="body">
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text.....
                  <a href="#" className="text-primary">
                    {" "}
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="entry">
              <div className="title">
                <h6>7/ Oct</h6>
              </div>
              <div className="body">
                <p className="pb-1">
                  Many desktop publishing packages and web page editors now.....
                  <a href="#" className="text-primary">
                    {" "}
                    Read More
                  </a>
                </p>
              </div>
            </div>
            <div className="entry">
              <div className="title">
                <h6>6/ Oct</h6>
              </div>
              <div className="body">
                <p className="pb-1 mb-0">
                  All the Lorem Ipsum generators on the predefined chunks as
                  necessary.....
                  <a href="#" className="text-primary">
                    {" "}
                    Read More
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week_Activity;
