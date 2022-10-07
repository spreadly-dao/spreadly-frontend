import { Box, Grid } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton } from '@mui/material';

export const footerHeight = "15rem";

const Footer: React.FC = () => {

return (
<Grid container spacing={2} justifyContent={"center"} height={footerHeight} color={"primary.main"} sx={{backgroundColor: "background.default"}}> 
  <Grid item md={1.75}>
    <Box sx={{img: {width: "5rem"}, display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img src="/logo.png" />
    </Box>
  </Grid>
  <Grid item md={1.75}>
    <Box mb={1}>First column</Box>
    <Box>first page</Box>
    <Box>second page</Box>
    <Box>third page</Box>
    <Box>fourth page</Box>
  </Grid>
  <Grid item md={1.75}>
    <Box mb={1}>Second column</Box>
    <Box>first page</Box>
    <Box>second page</Box>
    <Box>third page</Box>
    <Box>fourth page</Box>
  </Grid>
  <Grid item md={1.75}>
    <Box mb={1}>Third column</Box>
    <Box>first page</Box>
    <Box>second page</Box>
    <Box>third page</Box>
    <Box>fourth page</Box>
  </Grid>
  <Grid item md={1.75}>
    <Box mb={1}>Fourth column</Box>
    <Box>first page</Box>
    <Box>second page</Box>
    <Box>third page</Box>
    <Box>fourth page</Box>
  </Grid>
  <Grid item md={3.25}>
    <Box>
    <IconButton aria-label="twitter" size="large" color="primary">
      <TwitterIcon fontSize="inherit" />
    </IconButton>
    <IconButton aria-label="github" size="large" color="primary">
      <GitHubIcon fontSize="inherit" />
    </IconButton>
    </Box>
  </Grid>
</Grid>
);
};

export default Footer;

