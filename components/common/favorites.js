import { Alert, Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import { CloseIcon, CustomDialog } from "./elements";
import parse from "style-to-js";
import { useSelector } from "react-redux";
import CartRow from "./cartRow";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteRow from "./favoriteRow";

const Favorite = (props) => {
  const cartItems = useSelector((state) => state.favorite.products);
  return (
    <>
      <IconButton
        sx={{
          ...parse(`border-radius: 13px;
                  border: 1px solid #EFEFEF;
                  position:relative;
                  `),
          mr: {
            xs: 0,
            lg: "10px",
          },
        }}
        onClick={props.onClick}
      >
        <FavoriteBorderRoundedIcon />
      </IconButton>
      <CustomDialog open={props.open} fullWidth>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography>
            <Typography
              sx={parse(`color: #000;
font-family: Poppins;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 78.571% */
letter-spacing: -0.408px;`)}
            >
              Favorites
            </Typography>
          </Typography>
          <IconButton onClick={props.onClick}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ my: 3 }} />
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item) => (
              <FavoriteRow item={item} key={item.id} />
            ))}
          </>
        ) : (
          <Alert severity="info" sx={{ borderRadius: "10px" }}>
            <Typography
              sx={parse(`
              font-family: Poppins;
              font-size: 17px;
              font-style: normal;
              font-weight: 400;
              line-height: 22px; /* 129.412% */
              letter-spacing: -0.408px;`)}
            >
              Your favorite list is empty
            </Typography>
          </Alert>
        )}
      </CustomDialog>
    </>
  );
};

export default Favorite;
