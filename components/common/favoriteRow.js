import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { removeFavItem } from "@/redux/slices/favorite.slice";

const FavoriteRow = ({ item }) => {
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
        <Typography paragraph sx={{ mb: 0 }}>
          {item.title}
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
          onClick={() => dispatch(removeFavItem(item))}
        >
          Remove
        </Button>
      </Box>
    </Box>
  );
};

export default FavoriteRow;
