import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import * as React from 'react';
import { MPAT } from "../../assets/images";

const OurPhilosophy = () => {
  return (
    <>
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
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ margin: "8px" }}
          />
          <TextField
            label="Phone"
            variant="outlined"
            fullWidth
            sx={{ margin: "8px" }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            sx={{ margin: "8px" }}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ height: "56px", margin: "8px" }}
          >
            Get Instant Access
          </Button>
        </Stack>
      </Box>
      <Box sx={{ backgroundColor: "#fff", color: "#000", py: 3 }}>
        <Stack
          direction={"row"}
          justifyContent="center"
          sx={{ pb: 3 }}
        >
          <Typography
            variant="h4"
            fontWeight={"800"}
            textAlign={"center"}
            pr={1}
          >
            Our
          </Typography>
          <Typography variant="h4" fontWeight={"800"} color={"primary"}>
            Philosophy
          </Typography>
        </Stack>
        <Typography variant="h5" fontWeight={"800"} textAlign={"center"} mb={3}>
          MPAT – Masters in Price Action Trading
        </Typography>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={3}
          justifyContent={"center"}
          alignItems="center"
        >
          <Typography
            variant="subtitle1"
            textAlign={"justify"}
            fontWeight={600}
            width={{ xs: "90%", sm: "40%" }}
          >
            Transform yourself into a Successful, Profitable Trader who fits in
            the 1% Club of Legendary Traders. Indicators, patterns and graphs
            all derive from Price and Traders Guide&apos;s proprietory system
            enables you to master the price action system. Masters in Price
            Action Trading is the key to unlocking your millionaire dreams, a
            system of unseen strategies and a way to manage mega-size
            investments. The secret to making money is no secret, but MPAT.
          </Typography>
          <Box
            sx={{
              width: { xs: "270px", sm: "391px" },
              height: { xs: "43px", sm: "62px" },
            }}
          >
            <Image
              src={MPAT}
              alt={"MPAT"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: " 50% 50%",
              }}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default OurPhilosophy;
