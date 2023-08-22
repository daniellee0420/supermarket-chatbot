import React from "react";
import Navbar from "../common/navbar";
import HomeCategories from "./home/categories";
import { Divider } from "@mui/material";
import { BaseContainer } from "../common/elements";
import HomeFeatured from "./home/featured";
import Footer from "../common/footer";
import CategoriesHeader from "./categories/categoriesHeader";
import CategoryProducts from "./categories/categoriesProducts";

const Categories = ({ category }) => {
  return (
    <>
      <Navbar noCategories />
      <CategoriesHeader item={category} />
      <CategoryProducts item={category} />
      <Footer />
    </>
  );
};

export default Categories;
