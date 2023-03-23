import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { UIData } from "../../utils";

const Social = () => {
  return (
    <>
      <Typography variant="h4" fontWeight={"800"} textAlign={"center"} py={2} color="primary">
        <span style={{color:"#fff"}}> Social </span>
        Media
      </Typography>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ width: { xs: "100%", sm: "50%" }, margin: "auto", my: 4 }}
      >
        {UIData.social.map(({ icon, title, link }, i) => (
          <a key={title} href={link} target="_blank" rel="noreferrer">
            <Stack
              justifyContent="center"
              sx={{
                m: 1,
                alignContent: "center",
                width: { xs: "40px", sm: "79px" },
                height: { xs: "40px", sm: "79px" },
              }}
            >
              <Image
                src={icon}
                alt={title}
                style={{
                  width: "100%",
                  height: title === "Youtube" ? "70%" : "100%",
                }}
              />
            </Stack>
          </a>
        ))}
      </Stack>
    </>
  );
};

export default Social;
