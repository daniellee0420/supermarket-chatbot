import { BaseContainer } from "@/components/common/elements";
import config from "@/helpers/config";
import shuffle from "@/helpers/shuffle";
import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import parse from "style-to-js";
import ProductCard from "./productCard";

const HomeFeatured = () => {
  const { products } = config;
  const [featured, setFeatured] = useState(shuffle(products).slice(0, 12));
  const [isLoading, setLoading] = useState(true);

  useEffect(() => setLoading(false), []);
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
          Featured Products
        </Typography>
        <Typography
          sx={parse(`color: rgba(60, 60, 67, 0.60);
          font-family: Poppins;
          font-size: 17px;
          font-style: normal;
          font-weight: 400;
          line-height: 22px; /* 129.412% */
          letter-spacing: -0.408px;`)}
        >
          To view all categories use View All button
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
          {featured.map((item, index) => (
            <>
              <ProductCard key={item.id} item={item} isLoading={isLoading} />
            </>
          ))}
        </Grid>
      </Box>
    </BaseContainer>
  );
};

export default HomeFeatured;
