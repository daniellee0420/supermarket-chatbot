import { Box, Typography } from "@mui/material";
import React from "react";
import {
  BaseContainer,
  MainLogo,
  NavBox,
  NavbarInner,
  TextLogo,
} from "./elements";
import parse from "style-to-js";

const Footer = () => {
  return (
    <NavBox>
      <BaseContainer>
        <NavbarInner>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            width={"100%"}
            gap={"1.5rem"}
          >
            <Box display={"flex"} alignItems={"center"} gap={"10px"}>
              <MainLogo />
              <TextLogo />
            </Box>

            <Box
              sx={parse(`display: flex;
                         height: 1px;
                         align-items: center;
                         gap: 10px;
                         flex: 1 0 0;`)}
            />
            <Typography
              sx={parse(`color: #000;
                        font-family: Metrophobic;
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: normal;`)}
            >
              2023 - All rights reserved
            </Typography>
          </Box>
        </NavbarInner>
      </BaseContainer>
    </NavBox>
  );
};

export default Footer;
