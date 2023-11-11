import { Box, List } from "@mui/material";
import React from "react";
import SideListItem from "./SidelistItem";
import NightmodeButton from "./NightmodeButton";

import {
  AccountBox,
  Description,
  Group,
  Home,
  People,
  Settings,
  Storefront,
} from "@mui/icons-material";

export default function Sidebar({setMode,mode}) {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box sx={{ position: "fixed" }}>
        <Box sx={{ width:"100%",maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              <SideListItem
                link={"#"}
                night={false}
                text={"Homepage"}
                Icon={Home}
              />
              <SideListItem link={"#"} text={"Pages"} Icon={Description} />
              <SideListItem link={"#"} text={"Groups"} Icon={Group} />
              <SideListItem
                link={"#"}
                text={"MarketPlaces"}
                Icon={Storefront}
              />
              <SideListItem link={"#"} text={"Friends"} Icon={People} />
              <SideListItem link={"#"} text={"Settings"} Icon={Settings} />
              <SideListItem link={"#"} text={"Profile"} Icon={AccountBox} />
              <NightmodeButton  setMode={setMode} mode={mode}/>
            </List>
          </nav>
        </Box>
      </Box>
    </Box>
  );
}
