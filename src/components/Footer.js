import React from "react";
import Box from "@mui/material/Box";
import { Colors} from "../utils";
import { Button, IconButton, TextField, Typography } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";


function Footer(props) {
  return (
    <Box
      sx={{
        minHeight: "200px",
        height: "fit-content",
        backgroundColor: Colors.secondary,
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        padding: "30px 0",
      }}
    >
      <Box
        component="form"
        autoComplete="off"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: "30px 0",
          width: "70%",
        }}
      >
        <Typography variant="h5" component="h3" color={'primary'}>
          Connect with our experts
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            width: { xs: "100%", sm: "70%" },
          }}
        >
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
            style={{ margin: "20px" }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "block", sm: "flex" },
            width: { xs: "100%", sm: "70%" },
          }}
        >
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth
            style={{ margin: "20px" }}
          />
          <TextField
            id="standard-basic"
            label="City"
            variant="standard"
            fullWidth
            style={{ margin: "20px" }}
          />
        </Box>
        <TextField
          id="standard-multiline-static"
          label="Message"
          multiline
          rows={4}
          fullWidth
          placeholder="Type your message here..."
          variant="standard"
          style={{ margin: "20px" }}
          sx={{ width: { xs: "100%", sm: "66%" } }}
        />

        <Button
          variant="outlined"
          sx={{
            display: { xs: "block", sm: "flex" },
            alignContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          Submit
        </Button>
        <Box sx={{ textAlign: "start", width: "inherit", padding: "10px 0" }}>
          <Typography variant="h5" component="h3" color={'primary'}>
            Social Media
          </Typography>

          <IconButton aria-label="YouTubeIcon" color="secondary">
            <YouTubeIcon />
          </IconButton>
          <IconButton aria-label="InstagramIcon" color="secondary">
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="FacebookIcon" color="secondary">
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="TwitterIcon" color="secondary">
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="LinkedInIcon" color="secondary">
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>
      <Box
        component="form"
        autoComplete="off"
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          padding: "30px 0",
          width: "70%",
        }}
      >
        <Typography variant="h5" component="h3" color={'primary'} sx={{ paddingBottom: "10px" }}>
          For Admissions Contact
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "flex" }, justifyContent: "space-between" }}>
          <Box sx={{ display: { xs: "block", sm: "flex" }, flexDirection: "column" }}>
            <IconButton aria-label="LocalPhoneIcon" color="secondary">
              <LocalPhoneIcon style={{margin: "0 10px"}}/>
              <Typography variant="body1" component="body1">
                Mobile: 810-4938-187​
              </Typography>
            </IconButton>
            <IconButton aria-label="EmailIcon" color="secondary">
              <EmailIcon style={{margin: "0 10px"}}/>
              <Typography variant="body1" component="body1">
                hello@tradersguide.in
              </Typography>
            </IconButton>
          </Box>
          <Typography variant="body1" component="body1" style={{padding: "5px" ,lineBreak: "auto", width: "40%"}}>
            9th Floor,, Office No-909, NIHARIKA MIRAGE, Sector No. 10, Plot
            No.274, Kharghar, Raigad, Raigad, Maharashtra, 410210
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
