import React from "react";
import Navbar from "../common/navbar";
import HomeCategories from "./home/categories";
import { Divider } from "@mui/material";
import { BaseContainer } from "../common/elements";
import HomeFeatured from "./home/featured";
import Footer from "../common/footer";
import CategoriesHeader from "./categories/categoriesHeader";
import CategoryProducts from "./categories/categoriesProducts";
import SearchContent from "./search/searchContent";

const Search = ({ result, search }) => {
  return (
    <>
      <Navbar />
      <SearchContent key={result} result={result} search={search} />
      <Footer />
    </>
  );
};

export default Search;
