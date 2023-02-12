import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cropper from "react-easy-crop";
import axios from "axios";
import { useEffect } from "react";
const CreateOrderStatus = () => {
  const [data, setData] = useState({
    categoryName: "",
    categorySlug: "",
  });

  const [disable, setdisable] = useState(true);
  const [currentFruit, setCurrentFruit] = useState();

  const handleChange = (e) => {
    const newContact = { ...data };
    newContact[e.target.name] = e.target.value;

    newContact.categoryName !== "" && newContact.categorySlug !== ""
      ? setdisable(false)
      : setdisable(true);
    setData(newContact);
  };

  const changeFruit = (newFruit) => {
    setCurrentFruit(newFruit);
  };

  const submit = () => {
    let subdata = {
      categoryName: data.categoryName,
      categorySlug: data.categorySlug,
      status: currentFruit,
    };

    axios
      .post("http://localhost:5000/api/v1/create-orderStatus", subdata)
      .then((res) => {
        if (res.data.status === "Success") {
          toast.success("Subcategory Created", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        if (res.data.data.keyPattern.categorySlug === 1) {
          toast.error("Slug Should be unique", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <ToastContainer />{" "}
      <div className="container d-flex ">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Enter Detials of New Order Status</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group mb-3">
                    <label>Order Status Title</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Order Status Title"
                      label="Name:"
                      name="categoryName"
                      value={data.categoryName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row d-flex">
                    <div className="form-group mb-3 col-md-4">
                      <label>Status</label>
                      <select
                        defaultValue={"option"}
                        onChange={(event) => changeFruit(event.target.value)}
                        value={currentFruit}
                        id="inputState"
                        className="form-control"
                      >
                        <option value="option" disabled>
                          Choose Status
                        </option>
                        <option>true</option>
                        <option>false</option>
                      </select>
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

export default CreateOrderStatus;
