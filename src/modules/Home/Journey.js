import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from 'react';
import Carousel from "react-material-ui-carousel";
import { UIData } from "../../utils";

function Item({ item: { title, subTitle, description, image } }) {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent={"space-around"}
      alignItems="center"
      gap={2}
      sx={{
        padding: { xs: 2, sm: 8 },
        bgcolor: "rgb(36, 35, 35)",
        marginX: { xs: 1.5, sm: 8 },
        marginTop: 1,
      }}
    >
      <Box sx={{ width: { xs: "100%", sm: "40%" } }}>
        <Typography
          color={"primary"}
          sx={{
            fontSize: "28px",
            fontWeight: "600",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            color: "#fff",
            paddingY: 1.5,
          }}
        >
          {subTitle}
        </Typography>
        <Typography variant="subtitle1">{description}</Typography>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            fontWeight: "600",
            borderRadius: "18px",
            mt: 2,
          }}
        >
          Know More
        </Button>
      </Box>
      <Box
        sx={{
          width: { xs: "280px", sm: "524px" },
          height: { xs: "155px", sm: "300px" },
        }}
      >
        <Image
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        />
      </Box>
    </Stack>
  );
}

const Journey = () => {
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
            Choose your
          </Typography>
          <Typography variant="h4" fontWeight={"800"} color={"primary"}>
            Journey
          </Typography>
        </Stack>
        <Carousel>
          {UIData.chooseYourJourney.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </Box>
    </>
  );
};

export default Journey;
