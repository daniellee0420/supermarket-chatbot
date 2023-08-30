import {
  Alert,
  Avatar,
  Box,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import {
  BaseContainer,
  CartBag,
  CategoriesIcon,
  CloseIcon,
  CustomDialog,
  MainLogo,
  NavBox,
  NavbarInner,
  SearchIcon,
  TextLogo,
} from "./elements";
import parse from "style-to-js";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import config from "@/helpers/config";
import Cart from "./cart";
import Favorite from "./favorites";
import Deliver from "./deliver";

import Link from "next/link";
import { useRouter } from "next/router";
// import { Recognizer } from "../vosk/recognizer";
const Navbar = (props) => {
  const { noCategories } = props;
  const router = useRouter();
  const [cart, setCart] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <>
      <NavBox>
        <BaseContainer>
          <NavbarInner>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              width={"100%"}
              gap={{
                xs: "auto",
                lg: "1.5rem",
              }}
            >
              <Link href={"/"}>
                <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                  <MainLogo />
                  <Box
                    display={{
                      xs: "none",
                      lg: "block",
                    }}
                  >
                    <TextLogo />
                  </Box>
                </Box>
              </Link>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  router.push(`/search/${search}`);
                }}
              >
                <Input
                  placeholder="Search"
                  variant="soft"
                  sx={{
                    ...parse(`border-radius: 10px;
                background: #F2F2F7; 
                min-width:250px; 
                padding : 10px;`),
                    minWidth: {
                      xs: "auto",
                      lg: 250,
                    },
                  }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  startDecorator={<SearchIcon />}
                />
              </form>
              <Box
                sx={parse(`
                         height: 1px;
                         align-items: center;
                         gap: 10px;
                         flex: 1 0 0;`)}
                display={{
                  xs: "none",
                  lg: "flex",
                }}
              ></Box>
              <Box display={"flex"} alignItems={"center"} gap={"10px"}>
                <Avatar
                  src="/avatar.png"
                  sx={{
                    width: 42,
                    height: 42,
                    display: {
                      xs: "none",
                      lg: "block",
                    },
                  }}
                />
                <Box
                  display={{
                    xs: "none",
                    lg: "block",
                  }}
                >
                  <Typography
                    paragraph
                    sx={parse(`font-family: Poppins;
                             font-size: 12px;
                             font-style: normal;
                             font-weight: 500;
                             line-height: 18px; /* 138.462% */
                             letter-spacing: -0.078px;
                             margin:0;
                             padding:0;`)}
                  >
                    Hello ,
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={parse(`
                  font-family: Poppins;
                  font-size: 18px;
                  font-style: normal;
                  font-weight: 900;
                  line-height: 25px;
                  letter-spacing: 0.38px;`)}
                  >
                    John D.
                  </Typography>
                </Box>
                <Cart onClick={() => setCart(!cart)} open={cart} />
                <Favorite
                  onClick={() => setFavorite(!favorite)}
                  open={favorite}
                />
                {/* <Recognizer/> */}
                {/* <Deliver />*/}
              </Box>
            </Box>
            {!noCategories && (
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"10px"}
                sx={{ overflowY: "auto" }}
              >
                <Link href={"/categories"}>
                  <Button
                    color="neutral"
                    sx={parse(`
              border-radius: 10px;
              background: #F2F2F7;
              text-align: center;
              font-family: Poppins;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: 22px; /* 129.412% */
              letter-spacing: -0.408px;
              min-width :fit-content`)}
                    variant="soft"
                    startDecorator={<CategoriesIcon />}
                  >
                    Browse Categories
                  </Button>
                </Link>
                {config.categories.map((item, index) => (
                  <Link
                    href={`/categories/${item.value}`}
                    key={"nav_cat_" + item.value}
                  >
                    <Button
                      color="neutral"
                      variant="plain"
                      sx={parse(`
              border-radius: 10px;
              text-align: center;
              font-family: Poppins;
              font-size: 15px;
              font-style: normal;
              font-weight: 400;
              line-height: 22px; /* 129.412% */
              letter-spacing: -0.408px; 
              min-width:fit-content`)}
                    >
                      {item.title}
                    </Button>
                  </Link>
                ))}
              </Box>
            )}
          </NavbarInner>
        </BaseContainer>
      </NavBox>
    </>
  );
};

export default Navbar;
