import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { UIData } from "../../utils";

function Item({ item: { title, image } }) {
  return (
    <Box
      // sx={{
      //   width: { xs: "270px", sm: "400px" },
      //   height: { xs: "180px", sm: "280px" },
      // }}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={280}
        style={{
          // width:'100%',
          // height:'100%',
          margin: 4,
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
      />
    </Box>
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
const Awards = () => {
  return (
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {UIData.awards.map((item, i) => (
          <Item key={i} item={item} index={i} />
        ))}
      </ScrollMenu>
  );
};

export default Awards;
