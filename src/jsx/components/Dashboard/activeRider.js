import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import axios from "axios";

import pic1 from "./../../../images/avatar/8.jpg";

const ActiveRider = () => {
  const [subAdmin, setSubAdmin] = useState();

  const chackboxFun = (type) => {
    setTimeout(() => {
      const checkbox = document.querySelectorAll(
        ".application_sorting_1 input"
      );
      const motherCheckBox = document.querySelector(".sorting_asc input");
      for (let i = 0; i < checkbox.length; i++) {
        const element = checkbox[i];
        if (type === "all") {
          if (motherCheckBox.checked) {
            element.checked = true;
          } else {
            element.checked = false;
          }
        } else {
          if (!element.checked) {
            motherCheckBox.checked = false;
            break;
          } else {
            motherCheckBox.checked = true;
          }
        }
      }
    }, 200);
  };
  useEffect(() => {
    //chackboxFun()

    axios
      .get("http://localhost:5000/api/v1/get-sub-admin")
      .then((res) => {
        setSubAdmin(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (data) => {
    console.log(data);
    axios
      .delete(`http://localhost:5000/api/v1/delete-sub-admin/${data}`)
      .then((res) => {
        console.log(res);
        window.location.reload(true);
      })
      .catch((Err) => {
        console.log(Err);
      });
  };

  return (
    <>
      <div className="card h-auto">
        <div className="card-body p-0">
          <div className="table-responsive">
            {subAdmin === undefined ? (
              ""
            ) : (
              <table
                className="table table-list i-table style-1 mb-4 border-0"
                id="guestTable-all3"
              >
                <thead>
                  <tr>
                    <th className="bg-none sorting_asc">
                      <div className="form-check style-3">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="checkAll"
                          onClick={() => chackboxFun("all")}
                        />
                      </div>
                    </th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th className="bg-none"></th>
                    <th className="bg-none"></th>
                  </tr>
                </thead>
                <tbody>
                  {subAdmin.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="application_sorting_1">
                          <div className="form-check style-3">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              onClick={() => chackboxFun()}
                            />
                          </div>
                        </td>
                        <td>
                          <div className="media-bx d-flex py-3  align-items-center">
                            <img
                              className="me-3 rounded-circle"
                              src={pic1}
                              alt="images"
                            />
                            <div>
                              <h5 className="mb-0">{item.name}</h5>
                              {/* <p className="mb-0">1x </p>  */}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div>
                            <p className="mb-0">{item.email}</p>
                          </div>
                        </td>
                        <td>
                          <div className="d-flex align-items-center">
                            <svg
                              className="me-2"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M20.4604 9.63C20.32 8.16891 19.8036 6.76908 18.9616 5.56681C18.1195 4.36455 16.9805 3.40083 15.6554 2.76949C14.3303 2.13815 12.8642 1.86072 11.4001 1.9642C9.93592 2.06768 8.5235 2.54856 7.30037 3.36C6.24957 4.06264 5.36742 4.98929 4.71731 6.07339C4.0672 7.15748 3.66526 8.3721 3.54037 9.63C3.41785 10.8797 3.57504 12.1409 4.00054 13.3223C4.42604 14.5036 5.10917 15.5755 6.00037 16.46L11.3004 21.77C11.3933 21.8637 11.5039 21.9381 11.6258 21.9889C11.7477 22.0397 11.8784 22.0658 12.0104 22.0658C12.1424 22.0658 12.2731 22.0397 12.3949 21.9889C12.5168 21.9381 12.6274 21.8637 12.7204 21.77L18.0004 16.46C18.8916 15.5755 19.5747 14.5036 20.0002 13.3223C20.4257 12.1409 20.5829 10.8797 20.4604 9.63ZM16.6004 15.05L12.0004 19.65L7.40037 15.05C6.72246 14.372 6.20317 13.5523 5.87984 12.6498C5.5565 11.7472 5.43715 10.7842 5.53037 9.83C5.62419 8.8611 5.93213 7.92516 6.43194 7.08984C6.93175 6.25452 7.61093 5.5407 8.42037 5C9.48131 4.29523 10.7267 3.91929 12.0004 3.91929C13.2741 3.91929 14.5194 4.29523 15.5804 5C16.3874 5.53861 17.065 6.24928 17.5647 7.08093C18.0644 7.91259 18.3737 8.8446 18.4704 9.81C18.5666 10.7674 18.4488 11.7343 18.1254 12.6405C17.8019 13.5468 17.281 14.3698 16.6004 15.05ZM12.0004 6C11.1104 6 10.2403 6.26392 9.5003 6.75838C8.76028 7.25285 8.18351 7.95565 7.84291 8.77792C7.50232 9.60019 7.4132 10.505 7.58684 11.3779C7.76047 12.2508 8.18905 13.0526 8.81839 13.682C9.44773 14.3113 10.2495 14.7399 11.1225 14.9135C11.9954 15.0872 12.9002 14.998 13.7224 14.6575C14.5447 14.3169 15.2475 13.7401 15.742 13.0001C16.2364 12.26 16.5004 11.39 16.5004 10.5C16.4977 9.30733 16.0228 8.16428 15.1794 7.32093C14.3361 6.47759 13.193 6.00264 12.0004 6ZM12.0004 13C11.5059 13 11.0226 12.8534 10.6114 12.5787C10.2003 12.304 9.87989 11.9135 9.69067 11.4567C9.50145 10.9999 9.45194 10.4972 9.54841 10.0123C9.64487 9.52732 9.88297 9.08186 10.2326 8.73223C10.5822 8.3826 11.0277 8.1445 11.5126 8.04803C11.9976 7.95157 12.5003 8.00108 12.9571 8.1903C13.4139 8.37952 13.8043 8.69995 14.079 9.11107C14.3537 9.52219 14.5004 10.0055 14.5004 10.5C14.5004 11.163 14.237 11.7989 13.7681 12.2678C13.2993 12.7366 12.6634 13 12.0004 13Z"
                                fill="#FC8019"
                              />
                            </svg>
                            <h5 className="mb-0">{item.address}</h5>
                          </div>
                          {/* <span>2,97 Km</span> */}
                        </td>
                        <td>
                          <div>
                            <h4 className="text-primary">{item.role}</h4>
                          </div>
                        </td>

                        <td>
                          <div>
                            <Link to={"#"} className="btn btn-outline-primary">
                              Block
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ActiveRider;
