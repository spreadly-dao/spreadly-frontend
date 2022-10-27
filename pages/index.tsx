import { HighlightedHeader } from "@components/utilities/Headers";
import { SouthEast } from "@mui/icons-material";
import { Box } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: "50%" }}>
          <SouthEast color="primary" sx={{ fontSize: "3rem" }} />
          <HighlightedHeader
            before={"Join"}
            highlighted={"Spreadly"}
            after={"through the IDO"}
          />
        </Box>
      </Box>
      Index Here...
      <Link href={"/ido"}>Ido Link Here..</Link>
      <Box sx={{ backgroundColor: "primary.main", color: "text.primary" }}>
        Primary Here
      </Box>
      <Box sx={{ backgroundColor: "primary.main", color: "text.secondary" }}>
        Primary with secondary text here
      </Box>
      <Box sx={{ backgroundColor: "primary.dark", color: "text.primary" }}>
        Primary dark here
      </Box>
      <Box sx={{ backgroundColor: "primary.dark", color: "text.secondary" }}>
        Primary dark with secondary text here
      </Box>
      <Box sx={{ backgroundColor: "primary.light", color: "text.primary" }}>
        Primary light here
      </Box>
      <Box sx={{ backgroundColor: "primary.light", color: "text.secondary" }}>
        Primary light with secondary text here
      </Box>
    </Box>
  );
};

export default Home;
