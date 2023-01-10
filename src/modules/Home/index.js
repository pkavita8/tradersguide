import { WhatsApp } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React from "react";
import BackToTop from "./BackToTop";
import Slogan from "./Slogan";
import Events from "./Events";
import WhatWeOffer from "./WhatWeOffer";
import { TickerTape } from "react-ts-tradingview-widgets";

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

      <Fab
        size="small"
        style={{
          float: "right",
          bottom: "70px",
          right: "20px",
          position: "fixed",
        }}
      >
        <WhatsApp />
      </Fab>
      <Slogan />
      <Events />
      <WhatWeOffer/>
    </BackToTop>
  );
};

export default Home;
