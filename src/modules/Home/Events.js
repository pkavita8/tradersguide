import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";

const SingleEvent = () => {
  return (
    <Box
      sx={{
        justifyContent: { xs: "flex-start", sm: "center" },
        paddingX: "20px",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
      }}
      alignItems={"center"}
      my={10}
    >
      <Box sx={{ width: { sm: "20%" } }}>
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "25px", sm: "32px" },
            paddingBottom: "12px",
          }}
        >
          14<sup>th</sup> - 15<sup>th</sup>Jan
        </Typography>
      </Box>
      <Box sx={{ width: { sm: "50%" } }}>
        <Typography
          variant="h6"
          color="primary"
          style={{ fontWeight: "900", marginBottom: "5px" }}
        >
          Stock Options Masterclass
        </Typography>
        <Typography>
          4 Strategies. <br />
          8+ Hours.
          <br />
          Absolutely Free!
          <br />
          Learn Stock Options Buying, Banknifty Options BuyingBanknifty Options
          Selling & Banknifty Futures in a 2-Day Masterclass to redefine your
          trading.
        </Typography>
      </Box>
      <Box sx={{ paddingY: "20px" }}>
        <Button variant="contained" endIcon={<ArrowRight />}>
          Know more
        </Button>
      </Box>
    </Box>
  );
};
const Events = () => {
  return (
    <Box my={10}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: "900",
          fontSize: { xs: "25px", sm: "40px" },
        }}
      >
        Upcoming Events
      </Typography>
      <SingleEvent />
      <SingleEvent />
      <SingleEvent />
    </Box>
  );
};

export default Events;
