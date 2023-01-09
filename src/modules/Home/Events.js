import React from "react";
import { ArrowRight } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";

const SingleEvent = () => {
  return (
    <Grid
      container
      spacing={12}
      justifyContent="center"
      alignItems={"center"}
      my={0}
    >
      <Grid item width={"30%"}>
        <Typography
          variant="h3"
          style={{ textAlign: "center", fontWeight: "900" }}
        >
          14<sup>th</sup> - 15<sup>th</sup>
          Jan
        </Typography>
      </Grid>
      <Grid item width={"50%"}>
        <Typography variant="h6" color="primary" style={{ fontWeight: "900" }}>
          Stock Options Masterclass
        </Typography>
        <Typography>
          4 Strategies. {"\n"}
          8+ Hours.{"\n"}
          Absolutely Free!{"\n"}
          Learn Stock Options Buying, Banknifty Options BuyingBanknifty Options
          Selling & Banknifty Futures in a 2-Day Masterclass to redefine your
          trading.
        </Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" endIcon={<ArrowRight />}>
          Know more
        </Button>
      </Grid>
    </Grid>
  );
};
const Events = () => {
  return (
    <Box mt={2}>
      <Typography
        variant="h2"
        style={{ textAlign: "center", fontWeight: "900" }}
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
