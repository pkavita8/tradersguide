import * as React from "react";
import BackToTop from "../../../components/BackToTop";
import Slogan from "./Slogan";
import Overview from "./Overview";
import PastSpeakers from "../../Home/PastSpeakers";
import Awards from "../../Home/Awards";
import Learn from "./Learn";
import Reviews from "./Reviews";
import { Button, Stack } from "@mui/material";

const OptionsMultiplier = () => {
  return (
    <BackToTop>
      <Slogan />
      <Overview />
      <PastSpeakers />
      <Stack justifyContent="center" alignItems="center" my={5}>
        <Button variant="contained">REGISTER NOW</Button>
      </Stack>
      <Awards />
      <Learn/>
      <Reviews/>
    </BackToTop>
  );
};

export default OptionsMultiplier;
