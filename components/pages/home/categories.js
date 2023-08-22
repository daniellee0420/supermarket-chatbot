import { BaseContainer, BaseContainerSm } from "@/components/common/elements";
import config from "@/helpers/config";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import parse from "style-to-js";

const HomeCategories = () => {
  return (
    <BaseContainerSm>
      <Box
        py={{
          xs: 5,
          lg: 10,
        }}
      >
        <Box ml={"2.5rem"}>
          <Typography
            sx={parse(`color: #000;
font-family: Poppins;
font-size: 28px;
font-style: normal;
font-weight: 400;
line-height: 22px; /* 78.571% */
letter-spacing: -0.408px;margin-bottom:1rem;`)}
          >
            Explore Categories
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
        </Box>
        <Box className="categories_container">
          <Box
            display={"flex"}
            alignItems={"center"}
            width={"100%"}
            className="categories_inner"
            sx={{
              overflowY: "auto",
            }}
          >
            {config.categories.map((item, index) => (
              <Box
                key={"cat_head_" + item.value}
                sx={{
                  padding: `2rem .625rem 4rem ${
                    index === 0 ? "2.5rem" : ".625rem"
                  }`,
                }}
              >
                <Link href={`/categories/${item.value}`}>
                  <Box
                    sx={{
                      bgcolor: item.color,
                      color: item.contrastColor,
                      borderRadius: "20px",
                      padding: "1rem",
                      minWidth: 200,
                      width: {
                        xs: "100%",
                        lg: "fit-content",
                      },
                      height: "fit-content",
                      filter:
                        "drop-shadow(0px 1rem 1.5rem rgba(0, 0, 0, 0.10))",
                    }}
                  >
                    <Typography
                      sx={parse(`
                    font-family: Poppins;
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: normal;`)}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      fontSize={75}
                      marginTop={3}
                      textAlign={"center"}
                      sx={{
                        textDecoration: "none",
                        
                      }}
                    >
                      {item.icon}
                    </Typography>
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </BaseContainerSm>
  );
};

export default HomeCategories;
