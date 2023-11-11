import { Box, Typography } from "@mui/material";
import React from "react";
import FriendsStack from "./FriendsStack";
import ImagesList from "./ImageList";
import ConversationsList from "./ConversationsList";

export default function Rightbar() {
  return (
    <Box
      flex={2}
      p={2}
      mr={2}
      sx={{
        display: { xs: "none", md: "flex" },
      }}
    >
      <Box position="fixed" p={2} sx={{width:"auto"}}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Typography variant="h6" fontWeight={500}>
            Online Friends
          </Typography>
          <FriendsStack />
          <Typography variant="h6" fontWeight={500}>
            Latest Photos
          </Typography>
          <ImagesList />
          <Typography variant="h6" fontWeight={500}>
            Latest Conversations
          </Typography>
          <ConversationsList/>
        </Box>
      </Box>
    </Box>
  );
}
