import { Box } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Box sx={{ height: "500vh" }}>
      Index Here...
      <Link href={"/ido"}>Ido Link Here..</Link>


      <Box sx={{backgroundColor: 'primary.main', color: 'text.primary'}}>
        Primary Here
      </Box>
      <Box sx={{backgroundColor: 'primary.main', color: 'text.secondary'}}>
        Primary with secondary text here
      </Box>
      <Box sx={{backgroundColor: 'primary.dark', color: 'text.primary'}}>
        Primary dark here
      </Box>
      <Box sx={{backgroundColor: 'primary.dark', color: 'text.secondary'}}>
        Primary dark with secondary text here
      </Box>

      <Box sx={{backgroundColor: 'primary.light', color: 'text.primary'}}>
        Primary light here
      </Box>
      <Box sx={{backgroundColor: 'primary.light', color: 'text.secondary'}}>
        Primary light with secondary text here
      </Box>
    </Box>
  );
};

export default Home;
