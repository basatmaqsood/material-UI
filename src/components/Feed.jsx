import { Box } from "@mui/material";
import React from "react";
import FeedCard from "./Card";

export default function Feed() {
  return (
    <Box flex={6} p={2} >
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
      <FeedCard/>
    </Box>
  );
}
