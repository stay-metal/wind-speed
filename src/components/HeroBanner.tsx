"use client";
import { Box, Typography, IconButton, Container } from "@mui/material";
import { motion } from "framer-motion";
import {
  FacebookOutlined,
  Telegram,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";
import { useTranslation } from "next-i18next";
import { Kulim_Park } from "@next/font/google";
import theme from "@/theme/theme";
import { styled } from "@mui/material";

// Initialize Roboto font styles
const kulim = Kulim_Park({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
  style: ["italic", "normal"],
  display: "swap",
});

const StyledSocButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.background.paper,
  width: "39px",
  height: "39px",
  fontSize: "70px",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.6rem", // Adjust the icon size here
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.3rem",
    },
    [theme.breakpoints.down("xl")]: {
      fontSize: "1.3rem",
    },
  },
  [theme.breakpoints.down("xl")]: {
    width: "34px",
    height: "34px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "34px",
    height: "34px",
  },
  [theme.breakpoints.down("md")]: {
    width: "39px",
    height: "39px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "39px",
    height: "39px",
  },
  [theme.breakpoints.down("xs")]: {
    width: "39px",
    height: "39px",
  },
}));

const ArrowDownIcon = (props) => (
  <svg
    width="41"
    height="38"
    viewBox="0 0 41 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.46849 0.280308L20.3186 18.1304L38.1686 0.280307L40.152 2.26365L20.3186 22.0971L0.485146 2.26365L2.46849 0.280308ZM2.42882 16.1074L20.2789 33.9574L38.129 16.1074L40.1123 18.0907L20.2789 37.9241L0.445478 18.0907L2.42882 16.1074Z"
      fill="#FF3518"
    />
  </svg>
);

const HeroBanner = () => {
  const { t } = useTranslation("hero");
  return (
    <Box
      sx={{
        height: { xs: "100dvh", md: "90dvh" },
        maxHeight: { xs: "700px", md: "700px", lg: "934px" },
        // maxHeight: { xs: "700px", md: "700px", lg: "734px", xl: "934px" },
        width: "100%",
        backgroundImage: 'url("/images/hero-banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Align items to the left
        justifyContent: "flex-end", // Align items to the bottom
        textAlign: "left", // Align text to the left
        color: "#fff",
        px: { xs: 3 },
        py: { xs: 3 },
        position: "relative",
        // paddingLeft: 20,
        // paddingTop: 50,
        "::before": {
          // Adding black overlay
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
          zIndex: 1, // Ensures the overlay is behind the text content
        },
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Container
        className={"container_text"}
        sx={{
          position: "relative",
          zIndex: 2,
          padding: { xs: "0px", lg: 0 },
          px: { xs: "0px", lg: 3 },
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Main Content Box with Custom Positioning */}
        <Box
          sx={{
            position: "relative",
            pb: 0, // Position at 40% from the bottom
            left: 0, // Align to the left
            width: "100%",
            // maxWidth: { xs: "100%", md: "100%" },
            // px: { xs: 2, md: 4 },
          }}
        >
          <Typography
            variant="h1"
            component="h1"
            sx={{
              width: { xs: "100%", sm: "65%", md: "100%" },
              maxWidth: { xs: "365px", sm: "100%", md: "100%" },
              pb: { xs: 3, lg: 4 },
              lineHeight: "130%",
              fontSize: { xs: 40, sm: 45, md: 48 },
              fontStyle: "italic",
            }}
            dangerouslySetInnerHTML={{ __html: t("title.h1") }}
          />

          <Typography
            component="p"
            text={t("title.subtitle")}
            sx={{
              color: "white",
              fontSize: { xs: 24, sm: 26, md: 28, lg: 29 },
              pb: { xs: 3, sm: 12, md: 14, lg: 7 },
              fontStyle: "italic",
              fontWeight: "100",
              lineHeight: "130%",
              wordWrap: "break-word",
            }}
            dangerouslySetInnerHTML={{ __html: t("title.subtitle") }}
          />
        </Box>

        <Box
          className="bottom_container"
          sx={{
            display: "flex",
            // flexDirection: { xs: "column", sm: "column", md: "row", lg: "row" },
            flexDirection: { xs: "column", sm: "row" },
            pb: { xs: 0, lg: 6 },
            alignItems: "center",
            justifyContent: { xs: "center", sm: "space-between" },
            height: "100%",
            gap: 2,
          }}
        >
          {/* Social Media Icons */}
          <Box
            sx={{
              order: { xs: 1, sm: 0 },
              display: "flex",
              gap: { xs: 4, lg: 6 },
            }}
          >
            <StyledSocButton
              aria-label="Facebook"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              // sx={{ color: "#fff", backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <Telegram />
            </StyledSocButton>
            <StyledSocButton
              aria-label="Twitter"
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              // sx={{ color: "#fff", backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <FacebookOutlined />
            </StyledSocButton>
            <StyledSocButton
              aria-label="Instagram"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              // sx={{ color: "#fff", backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <Instagram />
            </StyledSocButton>
            <StyledSocButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              // sx={{ color: "#fff", backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <WhatsApp />
            </StyledSocButton>
          </Box>

          {/* Phone Number */}
          <Box
            sx={{
              order: { xs: 0, sm: 1 },
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography
              variant="h6"
              component="p"
              className={kulim.className}
              sx={{
                fontStyle: "italic",
                fontWeight: "700",
                fontSize: { xs: 33, sm: 32, md: 32, lg: 37 },
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>+66 6 </span>
              470 146 47
            </Typography>
          </Box>

          {/* Chevron Down Arrow */}
          <Box
            sx={{
              position: "absolute",
              bottom: { xs: 0, lg: 43 }, // Distance from the bottom
              display: { xs: "none", sm: "none", md: "flex" },
              justifyContent: "center",
              width: "100%",
            }}
          >
            <IconButton
              aria-label="Scroll Down"
              href="#your-section-id" // Link to the section you want to scroll down to
              sx={{ color: "#fff" }}
            >
              <ArrowDownIcon sx={{ width: { lg: "20px", xl: "30px" } }} />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBanner;
