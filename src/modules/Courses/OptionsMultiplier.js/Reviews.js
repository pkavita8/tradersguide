import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Avatar from "react-avatar";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import Carousel from "react-material-ui-carousel";
import { star } from "../../../assets/svgs";
import { UIData } from "../../../utils";

function Item({ item: { name, image, stars, review }, index }) {
  return (
    <Stack
      direction="column"
      sx={{
        width: { xs: "100%", sm: "356px" },
        m: 2,
        p: "20px",
        background: "#161616",
        height: "480px",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
      >
        <Avatar name={name} round size={40} />
        <Typography
          color="primary"
          sx={{
            fontSize: "16px",
            fontWeight: "600",
            pl: 1,
          }}
        >
          {name}
          <br />
          <span style={{ fontWeight: "500", fontSize: "14px", color: "#fff" }}>
            {" "}
            India
          </span>
        </Typography>
      </Stack>
      <Stack
        direction="row"
        mt={2}
      >
      {[1,2,3,4,5].map((_,index) => (
        <Image key={index} src={star} alt={name} width={16} height={16} style={{margin:'2px'}}/>
      ))}
      </Stack>
      <Typography
        sx={{
          fontSize: "15px",
          paddingY: 1.5,
          fontWeight: "600",
          color: "#bfbfbf",
        }}
      >
        {review}
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
    <Box>
      <Typography
        variant="h4"
        fontWeight={"800"}
        textAlign={"center"}
        color={"primary"}
        p={2}
      >
        REVIEWS
      </Typography>
      <Box sx={{ display: { xs: "none", sm: "initial" } }}>
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {UIData.reviews.map((item, i) => (
            <Item key={i} item={item} index={i} />
          ))}
        </ScrollMenu>
      </Box>
      <Box sx={{ display: { xs: "initial", sm: "none" } }}>
        <Carousel>
          {UIData.reviews.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default SuccessDiaries;
