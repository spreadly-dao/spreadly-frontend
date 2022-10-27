import { Box, Grid, Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

export const footerHeight = "15rem";

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        display: { sm: "none", md: "flex" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent={"center"}
        height={footerHeight}
        color={"primary.main"}
        sx={{
          backgroundColor: "background.default",
          width: { md: "100%", lg: "75%", xl: "1500px" },
          borderTop: 1,
          borderTopColor: "primary.main",
        }}
      >
        <Grid item md={1.75}>
          <Box
            sx={{
              img: { width: "5rem" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src="/logo.png" />
          </Box>
        </Grid>
        <Grid item md={1.75}>
          <Typography mb={1}>First column</Typography>
          <Typography>first page</Typography>
          <Typography>second page</Typography>
          <Typography>third page</Typography>
          <Typography>fourth page</Typography>
        </Grid>
        <Grid item md={1.75}>
          <Typography mb={1}>Second column</Typography>
          <Typography>first page</Typography>
          <Typography>second page</Typography>
          <Typography>third page</Typography>
          <Typography>fourth page</Typography>
        </Grid>
        <Grid item md={1.75}>
          <Typography mb={1}>Third column</Typography>
          <Typography>first page</Typography>
          <Typography>second page</Typography>
          <Typography>third page</Typography>
          <Typography>fourth page</Typography>
        </Grid>
        <Grid item md={1.75}>
          <Typography mb={1}>Fourth column</Typography>
          <Typography>first page</Typography>
          <Typography>second page</Typography>
          <Typography>third page</Typography>
          <Typography>fourth page</Typography>
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
    </Box>
  );
};

export default Footer;
