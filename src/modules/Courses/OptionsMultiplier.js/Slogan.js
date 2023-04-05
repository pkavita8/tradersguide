import { Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { Suspense } from "react";
import ReactPlayer from "react-player";
import { fallback_om } from "../../../assets/images";

const Slogan = () => {
  return (
    <Box width={"100%"}>
      <Suspense
        fallback={
          <Image src={fallback_om} alt="traders guide stock market advisory" />
        }
      >
        <video
          width={"100%"}
          height={"576px"}
          className="app-intro-gif"
          autoPlay
          loop
          muted
          poster={fallback_om}
          style={{
            position: "absolute",
            objectFit: "cover",
            objectPosition: "center center",
            zIndex: -1,
            opacity: 0.2,
          }}
        >
          <source
            src="https://video.wixstatic.com/video/a1f0da_bad049ec884948aa89f181bc3e465d35/720p/mp4/file.mp4"
            type="video/webm"
          />
        </video>
      </Suspense>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems={"center"}
        height={"576px"}
        width="100%"
        sx={{}}
      >
        <Box 
        // width={{ xs: "90%", sm: "40%" }}
        >
          <Typography
          variant="h4"
            fontSize={{ xs: "28px", sm: "60px" }}
            fontWeight={"800"}
            mb={"12px"}
          >
            ONLINE MENTORSHIP COURSE
          </Typography>
          <Typography
          variant="h4"
            fontSize={{ xs: "28px", sm: "60px" }}
            fontWeight={"800"}
            mb={"12px"}
          >
            OFFLINE MENTORSHIP COURSE
          </Typography>
          <Typography
          variant="h4"
            fontSize={{ xs: "28px", sm: "60px" }}
            fontWeight={"800"}
            mb={"12px"}
          >
            HYBRID OFFLINE  COURSE
          </Typography>
          <Typography
          variant="h4"
            fontSize={{ xs: "28px", sm: "60px" }}
            fontWeight={"800"}
            mb={"12px"}
          >
           BEGINNER OPTIONS TRADING COURSE
          </Typography>
          {/* <Typography
          variant="h4"
            fontSize={{ xs: "28px", sm: "60px" }}
            fontWeight={"800"}
            mb={"12px"}
          >
            HYBRID OFFLINE  COURSE
          </Typography> */}

          {/* <Typography variant="h6" fontWeight={"800"} mb={"12px"}>
            EXCLUSIVE PROGRAM FOR{" "}
            <span style={{ color: "#000", background: "#1945FE" }}>
              OPTIONS TRADING
            </span>
          </Typography> */}

          {/* <Typography variant="h4" fontWeight={"800"} color="primary" mb={2}>
            Batch Starts<span style={{ color: "#fff" }}> 5 April&apos;23</span>
          </Typography> */}

          {/* <Typography
            variant="h6"
            fontWeight={"800"}
            color="primary"
            mb={"12px"}
          >
            <span style={{ color: "#fff" }}>
              Learn From Full Time Trader, Mentor & Trend follower{" "}
            </span>
            Traders Guide
          </Typography> */}
          <Button variant="contained">REGISTER NOW</Button>
        </Box>

        {/* <Box sx={{ width: { xs: "90%", sm: "35%" }, height: "40%" }}>
          <ReactPlayer
            url="https://video.wixstatic.com/video/705bee_da42c9111678488aaab9f20898c16d41/1080p/mp4/file.mp4"
            width={"100%"}
            height={"100%"}
            controls
            muted
            playing
          />
        </Box> */}
      </Stack>
    </Box>
  );
};

export default Slogan;
