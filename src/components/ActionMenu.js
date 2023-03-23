import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";

export default function BasicMenu({
  options,
  name,
  handleSelect,
  disabled = false,
}) {
  const [anchorEl, setAnchorEl] = React.useState();

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#fff", textTransform: "none" }}
      >
        {name}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map(({ key, handleSelect }) => (
          <MenuItem
            key={key}
            onClick={(e) => {
              handleClose();
              handleSelect(e);
            }}
            disabled={disabled}
          >
            {key}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
