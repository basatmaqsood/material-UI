import { Box } from "@mui/material";
import React from "react";
import FeedCard from "./Card";

export default function Feed() {
  return (
    <Box flex={6} p={2}>
      <FeedCard
        image={
          "https://images.pexels.com/photos/5608022/pexels-photo-5608022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        title={"Basat Maqsood"}
        subheader={"November 13, 2023"}
        description={
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        }
      />
      <FeedCard
        image={
          "https://images.pexels.com/photos/1660603/pexels-photo-1660603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        title={"Basat Maqsood"}
        subheader={"November 12, 2023"}
        description={
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        }
      />
      <FeedCard
        image={
          "https://images.pexels.com/photos/1473673/pexels-photo-1473673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
        title={"Arbab Mustafa"}
        subheader={"November 11, 2023"}
        description={
          "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."
        }
      />
    </Box>
  );
}
