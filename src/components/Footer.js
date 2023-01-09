import React from "react";
import Box from "@mui/material/Box";

import { Color } from "../utils/index";
import { Divider, TextField, Typography } from "@mui/material";

function Footer(props) {
  return (
    <Box
      sx={{
        minHeight: "200px",
        height: "fit-content",
        backgroundColor: Color.secondary,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "30px 0",
      }}
    >
      <Typography variant="h5" component="h3" color={Color.textTitle}>
        Connect with our experts
      </Typography>
      <Box component="form" autoComplete="off" style={{ display: "flex" }}>
        <TextField
          id="standard-basic"
          label="Full Name"
          variant="standard"
          fullWidth
          style={{ margin: "20px" }}
        />
        <TextField
          id="standard-basic"
          label="Phone"
          variant="standard"
          fullWidth
          style={{ margin: "20px", width: "80%" }}
        />
      </Box>
    </Box>
  );
}

export default Footer;
