import { BaseContainer } from "@/components/common/elements";
import { Alert, Box, Divider, Typography, Grid } from "@mui/material";
import React from "react";
import ProductCard from "../home/productCard";

const SearchContent = ({ result, search }) => {
  return (
    <BaseContainer>
      <Box minHeight={"100vh"} p={5}>
        <Typography variant="h5">Search results for {search}</Typography>
        <Divider
          sx={{
            my: 4,
          }}
        />
        {result.length > 0 ? (
          <>
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
              {result.map((item, index) => (
                <>
                  <ProductCard
                    key={item.id}
                    item={item}
                    isLoading={false}
                  />
                </>
              ))}
            </Grid>
          </>
        ) : (
          <Alert severity="info">
            There was no result for {search}, check your search parameter and
            try again
          </Alert>
        )}
      </Box>
    </BaseContainer>
  );
};

export default SearchContent;
