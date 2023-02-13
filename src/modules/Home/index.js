import { WhatsApp } from "@mui/icons-material";
import { Box, Button, Fab, Stack, TextField, Typography } from "@mui/material";
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
      <WhatWeOffer />
      <Box
        component="form"
        autoComplete="off"
        sx={{
          padding: "30px 0",
          width: "70%",
          margin: "auto",
        }}
      >
        <Typography variant="h4" textAlign={"center"} mb={3}>
          Get Access to your Free Stock Market Mastery Now!
        </Typography>
        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "row" },
            alignItems:'center',
            justifyContent:'space-around'
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ margin:'8px' }}
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            sx={{ margin:'8px' }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ margin:'8px' }}
          />
          <Button variant="contained" fullWidth sx={{ height: "56px" ,margin:'8px'}}>
            Get Instant Access
          </Button>
        </Stack>
      </Box>
    </BackToTop>
  );
};

export default Home;
