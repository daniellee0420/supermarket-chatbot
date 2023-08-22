import { BaseContainer } from "@/components/common/elements";
import { Box, Typography } from "@mui/material";
import React from "react";

const CategoriesHeader = ({ item }) => {
  return (
    <BaseContainer>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={3}
        width={"100%"}
        sx={{
          bgcolor: item.color,
          color: item.constrastColor,
          borderRadius: "15px",
          padding: "1rem 2rem",
          mt: 5,
          boxShadow: "0px 30px 40px 0px rgba(0, 0, 0, 0.10)",
        }}
      >
        <Typography fontSize={75} textAlign={"center"}>
          {item.icon}
        </Typography>
        <Typography variant="h3" fontWeight={500}>
          {item.title}
        </Typography>
      </Box>
    </BaseContainer>
  );
};

export default CategoriesHeader;
