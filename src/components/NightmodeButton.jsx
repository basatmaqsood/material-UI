import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Switch } from "@mui/material";
import { ModeNight } from "@mui/icons-material";


export default function NightmodeButton({setMode,mode}) {
  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ModeNight />
          </ListItemIcon>
          <Switch onChange={e=>setMode(mode==="light"?"dark":"light")}/>
        </ListItemButton>
      </ListItem>
    </div>
  );
}
