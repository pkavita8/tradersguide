import * as React from "react";
import { WhatsApp } from "@mui/icons-material";
import { Box, Fab, Stack, Typography } from "@mui/material";
import { TickerTape } from "react-ts-tradingview-widgets";
import Awards from "./Awards";
import BackToTop from "../../components/BackToTop";
import Events from "./Events";
import Journey from "./Journey";
import PastSpeakers from "./PastSpeakers";
import Philosophy from "./Philosophy";
import Slogan from "./Slogan";
import SocialMedia from "./SocialMedia";
import SuccessDiaries from "./SuccessDiaries";
import WhatWeOffer from "./WhatWeOffer";
import Image from "next/image";
import { team } from "../../assets/images";
// import { WhatsApp } from "../../assets/svgs";

const Home = () => {
  return (
    <BackToTop>
      <TickerTape
        colorTheme="dark"
        symbols={[
          {
            description: "BOB",
            proName: "BSE:BANKBARODA",
          },
          {
            description: "INRUSD",
            proName: "FX_IDC:INRUSD",
          },
          {
            description: "",
            proName: "BSE:DIVISLAB",
          },
          {
            description: "",
            proName: "NSE:FEDERALBNK",
          },
          {
            description: "",
            proName: "NSE:ICICIBANK",
          },
          {
            description: "",
            proName: "NSE:ADANIPORTS",
          },
          {
            description: "",
            proName: "NSE:GUJGASLTD",
          },
        ]}
      />
      <a
        href="https://api.whatsapp.com/send?phone=918779128955"
        target="_blank"
        rel="noreferrer"
      >
        <Fab
          size="small"
          color="primary"
          style={{
            float: "right",
            bottom: "70px",
            right: "16px",
            position: "fixed",
          }}
        >
          <WhatsApp />

          {/* <Image src={WhatsApp} height={48} width={48} alt={"Whatsapp"} /> */}
        </Fab>
      </a>
      <Slogan />
      <Stack justifyContent={"center"} alignItems="center">
        <Typography variant="h4" fontWeight={"800"} textAlign="center" pt={2}>
          <span>Our </span> Team
        </Typography>

        <Image
          src={team}
          alt="Traders guide academy"
          height={400}
          width={500}
          style={{
            objectFit: "contain",
            objectPosition: " 50% 50%",
            margin: "auto",
            alignSelf: "center",
          }}
        />
      </Stack>
      {/* <Events /> */}
      <WhatWeOffer />
      <Philosophy />
      {/* <Journey /> */}
      {/* <PastSpeakers /> */}
      <SuccessDiaries />

      {/* <Typography variant="h4" fontWeight={"800"} textAlign={"center"} py={2}>
        Awards <span> & </span>
        Recognition
      </Typography> */}
      {/* <Awards /> */}
      <SocialMedia />
    </BackToTop>
  );
};

export default Home;
