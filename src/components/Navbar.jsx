import React, { useState } from "react";
import { Mail, Notifications, Pets } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Typography,
} from "@mui/material";
import { StyledSearch } from "./StyledSearch";
import { StyledToolbar } from "./StyledToolbar";
import picture from "../assets/Aavatar.jpg";
import DropMenu from "./DropMenu";
// import { StyledIcons } from "./StyledIcons";

export default function Navbar() {
  function handleCloseMenu() {
    setOpenMenu(!menuOpen);
  }
  const [menuOpen, setOpenMenu] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          BASAT DEV
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <StyledSearch>
          <InputBase placeholder="Search" />
        </StyledSearch>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: { xs: "12px", sm: "15px" },
          }}
        >
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src={picture}
            onClick={handleCloseMenu}
          />
        </Box>
      </StyledToolbar>
      <DropMenu openMenu={menuOpen} setOpen={setOpenMenu} />
    </AppBar>
  );
}
