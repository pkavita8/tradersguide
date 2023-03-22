import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { UIData } from "../../utils";
import Marquee from "react-fast-marquee";
import * as React from 'react';

function Item({ item: { title, subTitle, image } }) {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minWidth: "200px" }}
    >
      <Image src={image} alt={title} width={148} height={149} style={{}} />
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "600",
          color: "#fff",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "15px",
          color: "#fff",
          paddingY: 1.5,
        }}
      >
        {subTitle}
      </Typography>
    </Stack>
  );
}

const PastSpeakers = () => {
  return (
    <>
      <Box>
        <Stack direction={"row"} justifyContent="center" alignItems='center' flexWrap='wrap'  sx={{ padding: 2 }}>
          <Typography
            variant="h4"
            fontWeight={"800"}
            textAlign={"center"}
            pr={1}
          >
            Past
          </Typography>
          <Typography variant="h4" fontWeight={"800"} color={"primary"} pr={1}>
            Speakers
          </Typography>
          <Typography variant="h4" fontWeight={"800"}>
            at our Events
          </Typography>
        </Stack>
        <Box sx={{ width: { xs: "90%", sm: "70%" }, margin: "auto" }}>
          <Marquee speed={50} pauseOnClick gradient={false}>
            {UIData.speakers.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Marquee>
        </Box>
      </Box>
    </>
  );
};

export default PastSpeakers;
