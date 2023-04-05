import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { team } from "../../assets/images";

const About = () => {
  return (
    <Stack justifyContent="center" alignItems="center" mt={5}>
      <Typography variant="h4" fontWeight={"800"} textAlign="center" pt={2}>
        Our Team
      </Typography>
      <Image
        src={team}
        alt="Traders guide academy"
        height={400}
        width={500}
        style={{ objectFit: "contain", objectPosition: " 50% 50%" }}
      />
    </Stack>
  );
};

export default About;
