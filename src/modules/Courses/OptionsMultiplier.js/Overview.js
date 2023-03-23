import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import * as React from "react";
import { trade151, trade152 } from "../../../assets/images";

const Overview = () => {
  return (
    <Stack
      justifyContent={"center"}
      alignItems="center"
      sx={{ backgroundColor: "#fff", color: "#000", py: 5 }}
    >
      <Typography
        variant="h4"
        fontWeight="900"
        textAlign="center"
        color={"primary"}
      >
        <span style={{ color: "#000" }}> ABOUT </span> OPTIONS MULTIPLIER
      </Typography>
      <Typography variant="h3" fontWeight={"900"} textAlign="center">
        1,82,949
      </Typography>
      <Typography variant="h6" fontWeight={"800"} textAlign="center" mb={1}>
        LIVES IMPACTED
      </Typography>

      <Typography
        variant="subtitle1"
        textAlign="center"
        width={{ xs: "90%", sm: "70%" }}
      >
        It feels like boasting when we say it, but this is the course that has
        actually changed the lives of so many students. After 16+ Years of
        experience as a full-time trader and renowned trend follower, Traders
        Guide decided to share her wisdom with the world. This is a course where
        she teaches time-tested, proven successful, masterful strategies that
        took countless hours and years to stitch together. This is your time to
        begin. <br />
        <br />​ This course includes 6 days of intensive training with Traders
        Guide - Asia&apos;s No.1 Trader and Mentor. You will learn highly
        actionable strategies that empower you to grow by trading ONLY for 15
        minutes a day. These 6 days will change the way you look at your
        finances. It will change the way you look at markets. It will change the
        way you trade.
      </Typography>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        columnGap={5}
        justifyContent={"center"}
        alignItems="center"
      >
        <Image
          src={trade151}
          alt={"Trade in 15 Minutes"}
          width={204}
          height={204}
          style={{
            objectFit: "cover",
            objectPosition: " 50% 50%",
          }}
        />

        <Image
          src={trade152}
          alt={"Trade in 15 minutes"}
          width={204}
          height={204}
          style={{
            objectFit: "cover",
            objectPosition: " 50% 50%",
          }}
        />
      </Stack>
    </Stack>
  );
};

export default Overview;
