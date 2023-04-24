import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "react-horizontal-scrolling-menu/dist/styles.css";
import ReactPlayer from "react-player/youtube";
import { UIData } from "../../utils";

function Item({ item: { title, description, thumbnail, videoLink }, index }) {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ width: { sm: "500px" }, m: 2 }}
    >
      <Box sx={{ width: "100%", height: "280px", m: 2 }}>
        <ReactPlayer
          url={videoLink}
          light
          width={"100%"}
          height={"100%"}
          controls
          previewTabIndex={index}
        />
      </Box>
      {/* <Image src={thumbnail} alt={title} width={500} height={280} /> */}
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "600",
          pt: 1.5,
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
}

const Learn = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#000" }}>
      <Stack
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        sx={{ pt: 4 ,pb:1}}
      >
        <Typography variant="h4" fontWeight={"800"} textAlign={"center"} pr={1}>
          WANT TO LEARN
        </Typography>
        <Typography variant="h4" fontWeight={"800"} color={"primary"}>
          STOCK MARKET?
        </Typography>
      </Stack>
      <Typography variant="h5" textAlign={"center"}>
        WATCH THE VIDEO BELOW
      </Typography>
      <Stack
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        {UIData.learn.map((item, i) => (
          <Item key={i} item={item} index={i} />
        ))}
      </Stack>
    </Box>
  );
};

export default Learn;
