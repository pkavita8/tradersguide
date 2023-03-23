import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Carousel from "react-material-ui-carousel";
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
function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <Button
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
      disableRipple
      disableElevation
    >
      <ArrowBackIosNew />
    </Button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <Button
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
      disableRipple
      disableElevation
    >
      <ArrowForwardIos />
    </Button>
  );
}

const SuccessDiaries = () => {
  return (
    <Box sx={{ bgcolor: "#fff", color: "#000" }}>
      <Stack
        direction={"row"}
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        sx={{ paddingTop: 2 }}
      >
        <Typography
          variant="h4"
          fontWeight={"800"}
          textAlign={"center"}
          color={"primary"}
          pr={1}
        >
          Success
        </Typography>
        <Typography variant="h4" fontWeight={"800"}>
          Diaries
        </Typography>
      </Stack>
      <Box sx={{ display: { xs: "none", sm: "initial" } }}>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {UIData.diaries.map((item, i) => (
            <Item key={i} item={item} index={i} />
          ))}
        </ScrollMenu>
      </Box>
      <Box sx={{ display: { xs: "initial", sm: "none" } }}>
        <Carousel>
          {UIData.diaries.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default SuccessDiaries;
