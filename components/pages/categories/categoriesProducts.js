import { BaseContainer } from "@/components/common/elements";
import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../home/productCard";
import parse from "style-to-js";

const CategoryProducts = ({ item }) => {
  return (
    <BaseContainer>
      <Box
        py={{
          xs: 5,
          lg: 10,
        }}
      >
        <Typography
          sx={parse(`color: #000;
                font-family: Poppins;
                font-size: 28px;
                font-style: normal;
                font-weight: 400;
                line-height: 22px; /* 78.571% */
                letter-spacing: -0.408px;margin-bottom:1rem;`)}
        >
          Products
        </Typography>
        
        <Grid
          container
          display={"flex"}
          alignItems={"center"}
          my={{
            xs: 2.5,
            lg: 5,
          }}
          flexWrap={"wrap"}
        >
          {item.products.map((item, index) => (
            <>
              <ProductCard key={item.id} item={item} isLoading={false} />
            </>
          ))}
        </Grid>
      </Box>
    </BaseContainer>
  );
};

export default CategoryProducts;
