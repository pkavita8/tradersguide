import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { UIData } from "../../utils";

const WhatWeOffer = () => {
  return (
    <div className="what-we-offer">
      <Box
        sx={{
          margin: "auto",
          width: { xs: "100%", sm: "70%" },
          background: "linear-gradient(to right, #000, #fff, #000)",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "41px" },
            fontWeight: "900",
            color: "#000",
            textAlign: "center",
            lineHeight: "1.5em",
            letterSpacing: { xs: "0rem", sm: "0.25rem" },
          }}
        >
          HERE&apos;S WHAT WE OFFER
        </Typography>
      </Box>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "20px",
          justifyContent: "center",
        }}
      >
        {UIData.whatWeOffer.map((_) => (
          <Box
            className="what-we-offer--tile"
            key={_.key}
            style={{
              height: "340px",
              width: "261px",
              background: "#101010",
              justifyContent: "center",
              alignItems: "center",
              margin: "30px 15px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Image
              src={_.image}
              alt={_.title}
              width={220}
              height={220}
            />
            <Typography
              style={{
                fontSize: "18px",
                fontWeight: "600",
                textAlign: "center",
                color: "#fff",
                lineHeight: "3em",
              }}
            >
              {_.title}
            </Typography>
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontWeight: "600",
                borderRadius: "18px",
              }}
            >
              Know More
            </Button>
          </Box>
        ))}
      </div>
    </div>
  );
};

export default WhatWeOffer;
