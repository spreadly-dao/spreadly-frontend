import { Box } from "@mui/material";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <Box sx={{ height: "500vh" }}>
      Index Here...
      <Link href={"/ido"}>Ido Link Here..</Link>
    </Box>
  );
};

export default Home;
