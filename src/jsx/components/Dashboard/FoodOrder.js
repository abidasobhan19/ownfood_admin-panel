import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion, Button } from "react-bootstrap";

import Cropper from "react-easy-crop";
import axios from "axios";

const Access_data = [
  {
    name: "User Access",
    user_access: {
      user_access_edit: "edit",
      user_access_update: "update",
      user_access_delete: "delete",
      user_access_list: "list",
      user_access_view: "view",
    },
  },
  {
    name: "Food Access",
    food_access: {
      user_access_edit: "edit",
      user_access_update: "update",
      user_access_delete: "delete",
      user_access_list: "list",
      user_access_view: "view",
    },
  },
  {
    name: "Blog Access",
    blog_access: {
      user_access_edit: "edit",
      user_access_update: "update",
      user_access_delete: "delete",
      user_access_list: "list",
      user_access_view: "view",
    },
  },
  {
    name: "Rider Access",
    rider_access: {
      user_access_edit: "edit",
      user_access_update: "update",
      user_access_delete: "delete",
      user_access_list: "list",
      user_access_view: "view",
    },
  },
  {
    name: "Order Access",
    rider_access: {
      user_access_edit: "edit",
      user_access_update: "update",
      user_access_delete: "delete",
      user_access_list: "list",
      user_access_view: "view",
    },
  },
];

const FoodOrder = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    country: "",
    zip: "",
    address: "",
  });

  const [disable, setdisable] = useState(true);
  const [currentFruit, setCurrentFruit] = useState("option");
  const handleChange = (e) => {
    const newContact = { ...data };
    newContact[e.target.name] = e.target.value;

    newContact.name !== "" &&
    newContact.email !== "" &&
    newContact.mobile !== "" &&
    newContact.password !== "" &&
    newContact.country !== "" &&
    newContact.zip !== "" &&
    newContact.address !== ""
      ? setdisable(false)
      : setdisable(true);
    setData(newContact);
  };

  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit);
  };

  const submit = () => {
    let subdata = {
      email: data.email,
      name: data.name,
      password: data.password,
      role: currentFruit,
      mobile: data.mobile,
      country: data.country,
      city: data.city,
      zip: data.zip,
      designation: data.designation,
      address: data.address,
      userAccess: [
        {
          create: true,
          edit: false,
          update: true,
          delete: false,
        },
      ],
      blogAccess: [
        {
          create: true,
          edit: false,
          update: true,
          delete: false,
        },
      ],
      foodAccess: [
        {
          create: true,
          edit: false,
          update: true,
          delete: false,
        },
      ],
      riderAccess: [
        {
          create: true,
          edit: false,
          update: true,
          delete: false,
        },
      ],
    };
    console.log(subdata);
    axios
      .post("http://localhost:5000/api/v1/registration-sub-admin", subdata)
      .then((res) => {
        console.log(res.data);
        window.location.reload(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container d-flex ">
        <div className="col-xl-6 col-lg-6">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Enter Detials of New User</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group mb-3">
                    <label>Name</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Name"
                      label="Name:"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Email"
                      label="Email:"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Mobile</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Mobile"
                      label="Mobile:"
                      name="mobile"
                      value={data.mobile}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row d-flex">
                    <div className="form-group mb-3 col-md-6">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        label="Password:"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group mb-3 col-md-4">
                      <label>Role</label>
                      <select
                        defaultValue={"option"}
                        onChange={(event) => changeFruit(event.target.value)}
                        value={currentFruit}
                        id="inputState"
                        className="form-control"
                      >
                        <option value="option" disabled>
                          Choose Role
                        </option>
                        <option>Admin</option>
                        <option>Editor</option>
                        <option>HR</option>
                      </select>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="formFile" className="form-label">
                        Upload User Image
                      </label>
                      <input
                        className="form-control"
                        type="file"
                        id="formFile"
                      />
                    </div>
                  </div>

                  <div className="form-group mb-3">
                    <label>Country</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Country"
                      label="Country:"
                      name="country"
                      value={data.country}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Zip</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Zip"
                      label="Zip:"
                      name="zip"
                      value={data.zip}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Address"
                      label="Address:"
                      name="address"
                      value={data.address}
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 px-3">
          <Col>
            <Card>
              <Card.Header className="d-block">
                <Card.Title>Access Module</Card.Title>
              </Card.Header>
              <Card.Body>
                {Access_data.map((item, index) => {
                  return (
                    <Accordion
                      className="accordion accordion-danger-solid"
                      defaultActiveKey="0"
                    >
                      <Accordion.Item>
                        <Accordion.Header className="accordion-header">
                          {item.name}
                        </Accordion.Header>
                        <Accordion.Collapse className="accordion__body">
                          <div className="row px-3 py-3">
                            <div className="col-xl-4 col-xxl-6 col-6">
                              <div className="form-check custom-checkbox mb-3">
                                <input
                                  type="checkbox"
                                  className="form-check-input"
                                  id="customCheckBox1"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customCheckBox1"
                                >
                                  Edit
                                </label>
                              </div>
                            </div>
                            <div className="col-xl-4 col-xxl-6 col-6">
                              <div className="form-check custom-checkbox mb-3 checkbox-info">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  className="form-check-input"
                                  id="customCheckBox2"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customCheckBox2"
                                >
                                  Update
                                </label>
                              </div>
                            </div>

                            <div className="col-xl-4 col-xxl-6 col-6">
                              <div className="form-check custom-checkbox mb-3 checkbox-success">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  className="form-check-input"
                                  id="customCheckBox3"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customCheckBox3"
                                >
                                  Delete
                                </label>
                              </div>
                            </div>
                            <div className="col-xl-4 col-xxl-6 col-6">
                              <div className="form-check custom-checkbox mb-3 checkbox-warning">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  className="form-check-input"
                                  id="customCheckBox4"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customCheckBox4"
                                >
                                  View
                                </label>
                              </div>
                            </div>
                            <div className="col-xl-4 col-xxl-6 col-6">
                              <div className="form-check custom-checkbox mb-3 checkbox-danger">
                                <input
                                  type="checkbox"
                                  defaultChecked
                                  className="form-check-input"
                                  id="customCheckBox5"
                                  required
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="customCheckBox5"
                                >
                                  List
                                </label>
                              </div>
                            </div>
                          </div>
                        </Accordion.Collapse>
                      </Accordion.Item>
                    </Accordion>
                  );
                })}
              </Card.Body>
            </Card>
          </Col>
        </div>
      </div>
      <Button
        style={{ marginLeft: 25 }}
        onClick={() => {
          submit();
        }}
      >
        {" "}
        Save
      </Button>
    </>
  );
};
export default FoodOrder;
