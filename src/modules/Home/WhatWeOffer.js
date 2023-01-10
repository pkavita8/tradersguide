import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { UIData } from "../../utils";

const WhatWeOffer = () => {
  return (
    <div className="what-we-offer">
      <div
        style={{
          margin: "auto",
          width: "70%",
          background: "linear-gradient(to right, #000, #fff, #000)",
        }}
      >
        <Typography
          style={{
            fontSize: "41px",
            fontWeight: "900",
            color: "#000",
            textAlign: "center",
            lineHeight: "1.5em",
            letterSpacing: "0.25em",
          }}
        >
          HERE&apos;S WHAT WE OFFER
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "20px",
          justifyContent: "center",
        }}
      >
        {UIData.whatWeOffer.map((_) => {
          return (
            <Box
              className="what-we-offer--tile"
              key={_.key}
              style={{
                height: "340px",
                width: "261px",
                background: "#fff",
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
                style={{
                  width: "220px",
                  height: "220px",
                }}
              />
              <Typography
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  textAlign: "center",
                  color: "#000",
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
          );
        })}
      </div>
    </div>
  );
};

export default WhatWeOffer;
