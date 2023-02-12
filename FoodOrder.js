import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion, Button } from "react-bootstrap";

import Cropper from "react-easy-crop";
// import review1 from './../../../images/popular-img/review-img/pic-1.jpg';
// import review2 from './../../../images/popular-img/pic-1.jpg';
// import review3 from './../../../images/popular-img/review-img/pic-2.jpg';
// import review4 from './../../../images/popular-img/pic-2.jpg';
// import review5 from './../../../images/popular-img/review-img/pic-3.jpg';
// import review6 from './../../../images/popular-img/pic-3.jpg';
// import review7 from './../../../images/popular-img/review-img/pic-4.jpg';
// import review8 from './../../../images/popular-img/pic-4.jpg';

// const OrderCard = [
//     {orderno: '1', image1: review1, image2: review2, total:'11.18',title1:'Pepperoni Pizza', title2:'Fish Burger', btnstatus:'Completed', btnTheme:'success bgl-success'},
//     {orderno: '2', image1: review3, image2: review4, total:'11.18',title1:'Japan Ramen', title2:'Beef Burger', btnstatus:'Delivering to you', btnTheme:'primary bgl-primary'},
//     {orderno: '3', image1: review5, image2: review6, total:'11.18',title1:'Fried Rice', title2:'Cheese Burger', btnstatus:'Order being prepared', btnTheme:'info bgl-info'},
//     {orderno: '4', image1: review7, image2: review8, total:'11.18',title1:'Vegan Pizza', title2:'Double Burger', btnstatus:'Completed', btnTheme:'success bgl-success'},
//     {orderno: '5', image1: review1, image2: review2, total:'11.18',title1:'Japan Ramen', title2:'Veg Burger', btnstatus:'Delivering to you', btnTheme:'primary bgl-primary'},
//     {orderno: '6', image1: review3, image2: review6, total:'11.18',title1:'Fried Rice', title2:'Panner Burger', btnstatus:'Order being prepared', btnTheme:'info bgl-info'}

// ];

// const MenuCard = [
//     {image: review1, title:'Pepperoni Pizza'},
//     {image: review3, title:'Japan Ramen'},
//     {image: review7, title:'Mix Pizza'},
//     {image: review5, title:'Fried Rice'},
// ];

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
    message: "",
  });

  const [disable, setdisable] = useState(true);

  const handleChange = (e) => {
    const newContact = { ...data };
    newContact[e.target.name] = e.target.value;

    newContact.name !== "" &&
    newContact.email !== "" &&
    newContact.mobile !== "" &&
    newContact.message !== ""
      ? setdisable(false)
      : setdisable(true);
    setData(newContact);
  };

  console.log(data);

  let adminUpdate = {};


  
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
                    />
                  </div>

                  <div className="row d-flex">
                    <div className="form-group mb-3 col-md-6">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>

                    <div className="form-group mb-3 col-md-4">
                      <label>Role</label>
                      <select
                        defaultValue={"option"}
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
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Zip</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Zip"
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Address</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Address"
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
                  console.group(item);
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
      <Button> Save</Button>
    </>
  );
};
export default FoodOrder;
