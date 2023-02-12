import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion, Button } from "react-bootstrap";

import Cropper from "react-easy-crop";
import axios from "axios";
import { useEffect } from "react";

const CreateFood = () => {
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
  const [taq, setAdditionalTaq] = useState([]);

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

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/get-additionaltags")
      .then((res) => {
        setAdditionalTaq(res.data.data);
      })
      .catch((Err) => {
        console.log(Err);
      });
  }, []);

  return (
    <>
      <div className="container d-flex ">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Enter Detials of New Food</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group mb-3">
                    <label>Food Name</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Food Name"
                      label="Name:"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Food Slug</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Food Slug"
                      label="Name:"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Food Quantity</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Food Quantity"
                      label="Name:"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Food Price</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Food Price"
                      label="Name:"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Food Discount Price</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Food Discount Price"
                      label="Name:"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Food Discount Percentage</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Food Discount Percentage"
                      label="Name:"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="Col-12 d-flex">
                    <div className=" form-group mb-3">
                      <label>Food Discount Start Date</label>
                      <input
                        type="date"
                        className="form-control input-default "
                        placeholder="Food Discount Percentage"
                        label="Name:"
                        name="name"
                      />
                    </div>
                    <div className="  form-group mb-3">
                      <label>Food Discount End Date</label>
                      <input
                        type="date"
                        className="form-control input-default "
                        placeholder="Food Discount Percentage"
                        label="Name:"
                        name="name"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    <label>Food Portion Size Unit</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Food Portion Size Unit"
                      label="Name:"
                      name="name"
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Food Minimum Order Quantity</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Food Minimum Order Quantity"
                      label="Name:"
                      name="name"
                    />
                  </div>

                  <div>
                    <h3>Additonal Taq</h3>
                    <div className="col-xl-4 col-xxl-6 col-6 d-flex ">
                      {taq.map((item, index) => {
                        return (
                          <div key={index}>
                            {item.status === true ? (
                              <div className="form-check custom-checkbox mb-3 ms-3 checkbox-info">
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
                                  {item.tagName}
                                </label>
                              </div>
                            ) : (
                              ""
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
export default CreateFood;
