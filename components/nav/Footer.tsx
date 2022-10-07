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
    <Box>First column</Box>
    <Box>first page</Box>

  </Grid>
  <Grid item md={1.75}>
    <Box>Second column</Box>
  </Grid>
  <Grid item md={1.75}>
    <Box>Third column</Box>
  </Grid>
  <Grid item md={1.75}>
    <Box>Fourth column</Box>
  </Grid>
  <Grid item md={3.25}>
    <Box>
    <IconButton aria-label="twitter" size="small">
      <TwitterIcon fontSize="inherit" />
    </IconButton>
    <IconButton aria-label="github" size="small">
      <GitHubIcon fontSize="inherit" />
    </IconButton>
    </Box>
  </Grid>
</Grid>
);
};

export default Footer;

