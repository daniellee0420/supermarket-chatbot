import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeItem } from "@/redux/slices/cart.slice";
import parse from "style-to-js";

const CartRow = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        border: "1px solid lightgray",
        borderRadius: "10px",
        p: 1,
        gap: 3,
        my: 2,
        minWidth: {
          xs: "100%",
          md: "400px",
        },
      }}
      display={"flex"}
      alignItems={"center"}
      flexWrap={"wrap"}
    >
      <Box
        sx={{
          minWidth: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography fontSize={75} textAlign={"center"}>
          {item.icon}
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" fontWeight={600} sx={{ mb: 0 }}>
          {item.title}
        </Typography>
        <Typography paragraph>
        £{item.price} / {item.unit}
        </Typography>
      </Box>
      <Box
        sx={{
          ml: {
            md: "auto",
          },
          width: {
            xs: "100%",
            md: "auto",
          },
        }}
      >
        <Typography
          sx={parse(`color: rgba(60, 60, 67, 0.60);
              font-family: Poppins;
              font-size: 17px;
              font-style: normal;
              font-weight: 400;
              line-height: 22px; /* 129.412% */
              letter-spacing: -0.408px;`)}
        >
          £{item.price} / {item.unit}
        </Typography>
        <Button
          variant="text"
          color="error"
          sx={{
            ml: {
              md: "auto",
            },
            width: {
              xs: "100%",
              md: "auto",
            },
            px: {
              md: 1,
            },
          }}
          onClick={() => dispatch(removeItem(item))}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
};

export default CartRow;
