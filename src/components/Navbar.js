import MenuIcon from "@mui/icons-material/Menu";
import { Button, SwipeableDrawer, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import { logoName } from "../assets/images/";
import ActionMenu from "./ActionMenu";

const drawerWidth = 240;

const navItems = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "about-us" },
  { name: "Courses", link: "" },
  { name: "Free Webinar", link: "" },
  { name: "Contact Us", link: "contact-us" },
  { name: "Log In", link: "" },
];

function DrawerAppBar(props) {
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Image
        src={logoName}
        alt="Traders guide academy"
        height={100}
        width={100}
      />

      <Divider />
      <List>
        {navItems.map(({ name, link }) => (
          <ListItem key={name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component="nav"
        sx={{background:'black', alignItems: { xs: "flex-end", sm: "normal" } }}
      >
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Image
              src={logoName}
              alt="Traders guide academy"
              height={80}
              width={80}
            />
          </Box>
          {/* Desktop Navbar */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map(({ name, link }) =>
              name === "Courses" ? (
                <ActionMenu
                  key={name}
                  name={name}
                  options={[
                    {
                      key: "Options Multiplier",
                      handleSelect: () => router.push('/om'),
                    },
                    {
                      key: "Lets make India Trade",
                      handleSelect: () => router.push('/lmitmasters'),
                    },
                  ]}
                />
              ) : (
                <Button
                  key={name}
                  variant="text"
                  sx={{ color: "#fff", textTransform: "none" }}
                >
                  <Link href={link}> {name}</Link>
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <SwipeableDrawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onOpen={() => {}}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background:'black'
            },
          }}
        >
          {drawer}
        </SwipeableDrawer>
      </Box>
    </Box>
  );
}

export default DrawerAppBar;
