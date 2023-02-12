import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Tab, Nav } from "react-bootstrap";

import MenuList from "./Favorite/MenuList";

import pic3 from "./../../../images/popular-img/pic-3.jpg";
import pic1 from "./../../../images/popular-img/pic-1.jpg";
import pic2 from "./../../../images/popular-img/pic-2.jpg";
import pic4 from "./../../../images/popular-img/pic-4.jpg";

const gridBlog = [
  {
    id: "1",
    image: pic3,
    title: "Mushroom Burger",
    heart: false,
    check: false,
  },
  { id: "2", image: pic1, title: "Bean Burger", heart: false, check: false },
  { id: "3", image: pic2, title: "Lamb Burger", heart: false, check: false },
  { id: "4", image: pic4, title: "Potato Burger", heart: false, check: false },
  { id: "5", image: pic1, title: "Veggie Burger", heart: false, check: false },
  { id: "6", image: pic2, title: "Pizza Burger", heart: false, check: false },
  { id: "7", image: pic4, title: "Corn Burger", heart: false, check: false },
  { id: "8", image: pic3, title: "Chees Burger", heart: false, check: false },
];

const FavoriteMenu = () => {
  const [dataheart, setDataheart] = useState(gridBlog);
  function handleClick(type, id) {
    let temp = dataheart.map((data) => {
      if (id === data.id) {
        if (type === "heart") {
          return { ...data, heart: !data.heart };
        } else if (type === "check") {
          return { ...data, check: !data.check };
        }
      }
      return data;
    });
    setDataheart(temp);
  }
  return (
    <>
      <MenuList />
    </>
  );
};
export default FavoriteMenu;
