import config from "@/helpers/config";
import React from "react";
import CategoriesHeader from "./categoriesHeader";
import CategoryProducts from "./categoriesProducts";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";

const AllCategories = () => {
  const { categories } = config;
  return (
    <>
      <Navbar noCategories />
      {categories.map((item, index) => (
        <>
          <CategoriesHeader item={item} />
          <CategoryProducts item={item} />
        </>
      ))}
      <Footer />
    </>
  );
};

export default AllCategories;
