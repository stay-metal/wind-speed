import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        p: 4,
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} WindSpeed. All rights reserved.
      </Typography>
      <Link href="https://www.windspeed.com" color="inherit" underline="none">
        www.windspeed.com
      </Link>
    </Box>
  );
};

export default Footer;
