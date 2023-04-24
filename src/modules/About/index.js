import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React, { Suspense } from "react";
import { UIData } from "../../utils";
import styles from "../../assets/styles/Home.module.css";
import { fallback_om, logoName } from "../../assets/images";
import { logo } from "../../assets/svgs";

const About = () => {
  return (
    <Stack justifyContent="center" alignItems="center" mt={10}>
      <Box width={"100%"} height={"100%"} pt={5}>
        <Suspense
          fallback={
            <Image
              src={fallback_om}
              alt="traders guide stock market advisory"
            />
          }
        >
          <video
            width={"100%"}
            height={"730px"}
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
              src="https://video.wixstatic.com/video/a1f0da_a718e4d6c5cf45e4951bbec9c89d5c8b/1080p/mp4/file.mp4"
              type="video/webm"
            />
          </video>
        </Suspense>
        <Box
          sx={{
            display: "grid",
            height: "auto",
            width: "100%",
            minHeight: "auto",
            gridTemplateColumns: "repeat(6, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
          }}
        >
          {UIData.awards.map((item, i) => (
            <Image
              className={styles[`div${i + 1}`]}
              key={i}
              src={item.image}
              alt={item.title}
              width={238}
              height={230}
              style={{
                filter: "grayscale(100%)",
                objectFit: "cover",
                objectPosition: "50% 50%",
              }}
            />
          ))}
          <Stack
            className={styles.div11}
            justifyContent={"center"}
            alignItems="center"
          >
            <Image
              src={logo}
              alt="Traders guide academy"
              height={150}
              width={150}
            />
            <Typography
              variant="h5"
              fontWeight="900"
              textAlign="center"
              // fontStyle='italic'
              color={"secondary"}
            >
              TRADERS GUIDE <br />
              ACADEMY
            </Typography>

            <Typography
              variant="subtitle1"
              textAlign="center"
              width={{ xs: "90%", sm: "70%", }}
              pt={3}
            >
              Traders Guide is India&apos;s one of the fastest growing academy
              that provides Premium  Training in Trading & Investments.
              <br /> Our mission is to touch 1 million lives & make them
              Independent Profitable Investors & Traders
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

export default About;
