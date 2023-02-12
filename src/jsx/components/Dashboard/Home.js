import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
//import {NavLink} from 'react-router-dom';
//import loadable from "@loadable/component";
//import pMinDelay from "p-min-delay";
import { Dropdown, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//Import Components
import { ThemeContext } from "../../../context/ThemeContext";
import BannerSlider from "./Dashboard/BannerSlider";
import CategorySlider from "./Dashboard/CategorySlider";
import PopularDishesSlider from "./Dashboard/PopularDishesSlider";
import RecentOrderSlider from "./Dashboard/RecentOrderSlider";

import Pic1 from "./../../../images/popular-img/review-img/pic-1.jpg";
import Pic2 from "./../../../images/popular-img/review-img/pic-2.jpg";
import Pic3 from "./../../../images/popular-img/review-img/pic-3.jpg";
import BannerPic from "./../../../images/banner-img/pic-2.jpg";

const orderBlog = [
  { id: 1, image: Pic1, number: 1 },
  { id: 2, image: Pic2, number: 1 },
  { id: 3, image: Pic3, number: 1 },
  { id: 4, image: Pic1, number: 1 },
];

const reducer = (previousState, updatedState) => ({
  ...previousState,
  ...updatedState,
});

const Home = () => {
  const [dropSelect, setDropSelect] = useState("Other");
  const { changeBackground } = useContext(ThemeContext);
  const [detailsModal, setDetailsModal] = useState(false);
  const [notesModal, setNotesModal] = useState(false);
  useEffect(() => {
    changeBackground({ value: "light", label: "Light" });
  }, []);

  const [state, setState] = useReducer(reducer, { orderBlog: orderBlog });
  const handleCountAdd = (e) => {
    let temp = state.orderBlog.map((data) => {
      if (e === data.id) {
        return { ...data, number: data.number + 1 };
      }
      return data;
    });
    setState({ orderBlog: temp });
  };
  const handleCountMinus = (e) => {
    let temp = state.orderBlog.map((data) => {
      if (e === data.id) {
        return {
          ...data,
          number: data.number > 0 ? data.number - 1 : data.number,
        };
      }
      return data;
    });
    setState({ orderBlog: temp });
  };
  const navigate = useNavigate();

  return (
    <>
      <div className="row">
        {/* <div className="col-xl-8 col-xxl-7">
          <div className="row">
            <div className="col-xl-12">
              <BannerSlider />
            </div>

            <div className="col-xl-12">
              <div className="d-flex align-items-center justify-content-between mb-2 gap">
                <h4 className=" mb-0 cate-title">Category</h4>
                <Link to="/favorite-menu" className="text-primary">
                  View all <i className="fa-solid fa-angle-right ms-2"></i>
                </Link>
              </div>
              <CategorySlider />
            </div>
            <div className="col-xl-12">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className=" mb-0 cate-title">Popular Dishes</h4>
                <Link to="/favorite-menu" className="text-primary">
                  View all <i className="fa-solid fa-angle-right ms-2"></i>
                </Link>
              </div>
              <PopularDishesSlider />
            </div>
            <div className="col-xl-12">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h4 className=" mb-0 cate-title">Recent Order</h4>
                <Link to="/favorite-menu" className="text-primary">
                  View all <i className="fa-solid fa-angle-right ms-2"></i>
                </Link>
              </div>
              <RecentOrderSlider />
            </div>
          </div>
        </div> */}
        <div className="col-xl-12 ">
          <div className="row">
            <div
              className="col-4"
              onClick={() => {
                navigate("/activeseller");
              }}
            >
              <div className="card dlab-bg dlab-position">
                <div className="card-header border-0 pb-0">
                  <h4 className="cate-title">Active Seller</h4>
                </div>
                <div className="card-body pt-0 pb-2">
                  <div className="card bg-primary blance-card">
                    <div className="card-body">
                      <h4 className="mb-0">Active Seller</h4>
                      <h2>120000</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-4"
              onClick={() => {
                navigate("/activerider");
              }}
            >
              <div className="card dlab-bg dlab-position">
                <div className="card-header border-0 pb-0">
                  <h4 className="cate-title">Active Rider</h4>
                </div>
                <div className="card-body pt-0 pb-2">
                  <div className="card bg-primary blance-card">
                    <div className="card-body">
                      <h4 className="mb-0">Active Rider</h4>
                      <h2>5000</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card dlab-bg dlab-position">
                <div className="card-header border-0 pb-0">
                  <h4 className="cate-title">Monthly Earned</h4>
                </div>
                <div className="card-body pt-0 pb-2">
                  <div className="card bg-primary blance-card">
                    <div className="card-body">
                      <h4 className="mb-0">Balance</h4>
                      <h2>$1200000</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="card dlab-bg dlab-position">
                <div className="card-header border-0 pb-0">
                  <h4 className="cate-title">Purchased In this Month</h4>
                </div>
                <div className="card-body pt-0 pb-2">
                  <div className="card bg-primary blance-card">
                    <div className="card-body">
                      <h4 className="mb-0">Food</h4>
                      <h2>1500000</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        id="exampleModal"
        show={detailsModal}
        onHide={setDetailsModal}
        centered
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Add Location Details
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setDetailsModal(false)}
          ></button>
        </div>
        <div className="modal-body add-loaction">
          <div className="row">
            <div className="col-xl-12">
              <form>
                <div className="mb-3">
                  <label className="form-label">Location Name</label>
                  <input
                    type="Text"
                    className="form-control"
                    placeholder="HOUSE/FLAT/BLOCK NO."
                  />
                </div>
              </form>
            </div>
            <div className="col-xl-12">
              <form>
                <div className="mb-3">
                  <label className="form-label">LANDMARK</label>
                  <input
                    type="Text"
                    className="form-control"
                    placeholder="LANDMARK"
                  />
                </div>
              </form>
            </div>
            <div className="col-xl-6">
              <form>
                <div className="mb-3">
                  <label className="form-label">Available For Order</label>
                  <input
                    type="Text"
                    className="form-control"
                    placeholder="Yes"
                  />
                </div>
              </form>
            </div>
            <div className="col-xl-6">
              <p className="mb-1">Address type</p>
              {/* <select className="form-control default-select ms-0 py-4 wide" >
								<option>Home</option>
								<option>Office</option>
								<option>Other</option>
							</select> */}
              <Dropdown className="drop-select-blog">
                <Dropdown.Toggle
                  as="div"
                  className="form-control default-select ms-0 py-4 wide i-false"
                >
                  {dropSelect}{" "}
                  <i className="fas fa-chevron-down drop-select-icon"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setDropSelect("Home")}>
                    Home
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDropSelect("Office")}>
                    Office
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setDropSelect("Other")}>
                    Other
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setDetailsModal(false)}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </Modal>
      <Modal
        className="modal fade"
        id="exampleModal2"
        show={notesModal}
        onHide={setNotesModal}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel2">
            Manage Route Notes
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={() => setNotesModal(false)}
          ></button>
        </div>
        <div className="modal-body add-note">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <form className="mb-3">
                <label className="form-label">Update Type</label>
                <input
                  type="Text"
                  className="form-control"
                  placeholder="Drop Off Occurred"
                />
              </form>
            </div>

            <div className="col-xl-12">
              <form className=" mb-3">
                <label className="form-label">Drop Off Location</label>
                <input
                  type="Text"
                  className="form-control"
                  placeholder="Front Door"
                />
              </form>
            </div>
            <div className="col-xl-12">
              <div className="mb-3">
                <label className="form-label">Notes</label>
                <textarea
                  className="form-control"
                  placeholder="Delivery was successful."
                  id="floatingTextarea"
                ></textarea>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="mb-3">
                <label className="from-label">Address</label>
                <input
                  type="Text"
                  className="form-control"
                  placeholder="Elm Street, 23"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setNotesModal(false)}
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </Modal>
    </>
  );
};
export default Home;
