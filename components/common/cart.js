import { Alert, Box, Divider, IconButton, Typography } from "@mui/material";
import React from "react";
import { CartBag, CloseIcon, CustomDialog } from "./elements";
import parse from "style-to-js";
import { useSelector } from "react-redux";
import CartRow from "./cartRow";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.products);
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
        <Box
          component={"span"}
          sx={parse(`width: 5px;
                             height: 5px;
                             flex-shrink:0;
                             background:#FC1B2B;
                             border-radius:10px; 
                             position:absolute;
                             top:5px;
                             right:10px;`)}
        />
        <CartBag />
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
                    letter-spacing: -0.408px;`)
                  }
            >
              Shopping Cart
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
              <CartRow item={item} key={item.id} />
            ))}

            <Box
              display={"flex"}
              justifyContent={{
                xs: "center",
                lg: "flex-end",
              }}
              py={3}
            > 
              <Typography
                sx={parse(`
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 22px; /* 129.412% */
            letter-spacing: -0.408px;`)}
              >
                Total : £{cartItems.reduce((acc, i) => acc + i.qt * i.price, 0)}
              </Typography>
            </Box>
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
              Your shopping cart is empty
            </Typography>
          </Alert>
        )}
      </CustomDialog>
    </>
  );
};

export default Cart;
