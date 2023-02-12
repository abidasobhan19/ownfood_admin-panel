import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, Accordion, Button } from "react-bootstrap";

import Cropper from "react-easy-crop";
import axios from "axios";
const CreateCategory = () => {
  const [data, setData] = useState({
    categoryName: "",
    categorySlug: "",
  });

  const [disable, setdisable] = useState(true);
  const [currentFruit, setCurrentFruit] = useState(true);

  console.log(typeof currentFruit);
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
      .post("http://localhost:5000/api/v1/create-category", subdata)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container  ">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Enter Detials of New Category</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="form-group mb-3">
                    <label>Category Name</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Category Name"
                      label="Name:"
                      name="categoryName"
                      value={data.categoryName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Category Slug</label>
                    <input
                      type="text"
                      className="form-control input-default "
                      placeholder="Category Slug"
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
          <Button
            style={{ marginLeft: 25 }}
            onClick={() => {
              submit();
            }}
          >
            {" "}
            Save
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateCategory;
