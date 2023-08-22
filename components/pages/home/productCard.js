import { Box, Grid, Skeleton, Typography, InputBase } from "@mui/material";
import React, { useState } from "react";
import parse from "style-to-js";
import { Button } from "@mui/joy";
import { CartIcon } from "./elements";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { addItem } from "@/redux/slices/cart.slice";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useDispatch } from "react-redux";
import { addFavItem } from "@/redux/slices/favorite.slice";

const ProductCard = (props) => {
  const { item, isLoading } = props;
  const [qt, setQt] = useState(1);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ ...item, qt }));
  };

  const addtoFav = () => {
    dispatch(addFavItem(item));
  };

  return (
    <>
      {isLoading ? (
        <Grid item xs={12} md={6} lg={3} p={2}>
          <Skeleton variant="rectangular" sx={{ borderRadius: "20px" }}>
            <Box
              item
              sx={parse(`border-radius: 20px;
    background: #FFF;
    box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.10);overflow:hidden`)}
            >
              <Box
                item
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  bgcolor: item.color,
                  color: item.contrastColor,
                  padding: "2rem",
                }}
              >
                <Typography fontSize={75} textAlign={"center"}>
                  XX
                </Typography>
              </Box>
              <Box
                sx={{
                  padding: "1rem",
                }}
              >
                <Typography
                  sx={parse(`color: #2E1C1A;
font-family: Poppins;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: normal;`)}
                >
                  XXX
                </Typography>
              </Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                gap={"10px"}
                p={"1rem"}
              >
                <Button
                  color="primary"
                  onClick={function () {}}
                  variant="soft"
                  startDecorator={<CartIcon />}
                  sx={{ borderRadius: "10px" }}
                >
                  Add to Cart
                </Button>
                <Button
                  color="danger"
                  onClick={function () {}}
                  variant="soft"
                  sx={{ borderRadius: "10px" }}
                >
                  <FavoriteBorderRoundedIcon />
                </Button>
              </Box>
            </Box>
          </Skeleton>
        </Grid>
      ) : (
        <Grid
          item
          key={item.id}
          xs={12}
          md={6}
          lg={3}
          py={{
            xs: 1,
            lg: 2,
          }}
          px={{
            xs: 0,
            lg: 2,
          }}
        >
          <Box
            item
            sx={parse(`border-radius: 20px;
          background: #FFF;
          box-shadow: 0px 30px 40px 0px rgba(0, 0, 0, 0.10);overflow:hidden`)}
          >
            <Box
              item
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                bgcolor: item.color,
                color: item.contrastColor,
                padding: "2rem",
              }}
            >
              <Typography fontSize={75} textAlign={"center"}>
                {item.icon}
              </Typography>
            </Box>
            <Box
              sx={{
                padding: "1rem",
              }}
            >
              <Box display={"flex"} justifyContent={"space-between"}>
                <Typography
                  sx={parse(`color: #2E1C1A;
font-family: Poppins;
font-size: 17px;
font-style: normal;
font-weight: 700;
line-height: normal;`)}
                >
                  {item.title}
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
                  £{item.price} / {item.unit}
                </Typography>
              </Box>
            </Box>
            <ToggleButtonGroup
              sx={{ width: "100%", border: "none", px: "1rem" }}
            >
              <ToggleButton
                size="small"
                onClick={() => {
                  if (qt > 1) setQt(qt - 1);
                }}
                sx={{
                  border: "none",
                  bgcolor: "#f2f2f7",
                  borderRadius: "10px!important",
                }}
              >
                <RemoveSharpIcon />
              </ToggleButton>
              <InputBase
                sx={{
                  width: "100%",
                  minHeight: "40px",
                  justifyContent: "flex-end",
                }}
                inputProps={{
                  style: {
                    textAlign: "center",
                  },
                }}
                size="small"
                value={qt}
                type="number"
                onChange={(e) => {
                  if (e.target.value > 0) setQt(e.target.value);
                }}
                variant="standard"
              />
              <ToggleButton
                size="small"
                onClick={() => setQt(qt + 1)}
                sx={{
                  border: "none",
                  bgcolor: "#f2f2f7",
                  borderRadius: "10px!important",
                }}
              >
                <AddSharpIcon />
              </ToggleButton>
            </ToggleButtonGroup>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              gap={"10px"}
              p={"1rem"}
              width={"100%"}
              flexWrap={{
                xs: "wrap",
                lg: "nowrap",
              }}
            >
              <Button
                color="primary"
                className="flex-lg-no-fill"
                onClick={addToCart}
                variant="soft"
                startDecorator={<CartIcon />}
                sx={{ borderRadius: "10px" }}
                fullWidth
              >
                Add to Cart
              </Button>
              <Button
                color="danger"
                className="flex-lg-no-fill"
                onClick={addtoFav}
                variant="soft"
                sx={{ borderRadius: "10px" }}
              >
                <FavoriteBorderRoundedIcon />
              </Button>
            </Box>
          </Box>
        </Grid>
      )}
    </>
  );
};

export default ProductCard;
