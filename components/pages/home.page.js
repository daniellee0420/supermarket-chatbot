import React from "react";
import Navbar from "../common/navbar";
import HomeCategories from "./home/categories";
import { Divider } from "@mui/material";
import { BaseContainer } from "../common/elements";
import HomeFeatured from "./home/featured";
import Footer from "../common/footer";
import WatsonWrapper from "../watsonWrapper";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeCategories />
      <BaseContainer>
        <Divider
        
          sx={{
            borderColor: "rgba(0, 0, 0, 0.10)",
            my: {
              xs: 0,
              lg: 2,
            },
          }}
        />
      </BaseContainer>
      <HomeFeatured />
      <WatsonWrapper />
      <Footer />
    </>
  );
};

export default Home;
