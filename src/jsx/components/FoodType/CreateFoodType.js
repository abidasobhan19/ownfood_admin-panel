import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion, Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cropper from "react-easy-crop";
import axios from "axios";
import { useEffect } from "react";
const CreateFoodType = () => {
  const [data, setData] = useState({
    categoryName: "",
    categorySlug: "",
  });

  const [catID, setCatID] = useState([]);

  const [disable, setdisable] = useState(true);
  const [currentFruit, setCurrentFruit] = useState(true);

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
      categoryID: cat,
    };

    axios
      .post("http://localhost:5000/api/v1/create-subcategory", subdata)
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

  const getCat = (e) => {
    axios
      .get("http://localhost:5000/api/v1/get-category")
      .then((res) => setCatID(res.data.data))
      .catch((err) => {
        console.log(err);
      });
  };

  const [cat, setcat] = useState();
  const Fcat = (newcat) => {
    setcat(newcat);
  };

  return (
    <>
      <ToastContainer />{" "}
      <div className="container d-flex ">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Enter Detials of New Food Type</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group mb-3">
                    <label>Type Name</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Type Name"
                      label="Name:"
                      name="categoryName"
                      value={data.categoryName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Food Type categories</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Food Type categories"
                      label="Name:"
                      name="categorySlug"
                      value={data.categorySlug}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row d-flex">
                    <div className="form-group mb-3 col-md-4">
                      <label>Status</label>
                      <select
                        defaultValue={"option"}
                        onChange={(event) => changeFruit(event.target.value)}
                        value={cat}
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

export default CreateFoodType;
