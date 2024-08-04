"use client";
import { Box, Button, Typography, IconButton, Container } from "@mui/material";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Phone,
} from "@mui/icons-material";
import ArrowDropDownCircleIcon from "@mui/icons-material/ArrowDropDownCircle";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundImage: 'url("/images/hero-banner.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start", // Align items to the left
        justifyContent: "flex-end", // Align items to the bottom
        textAlign: "left", // Align text to the left
        color: "#fff",
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 8 },
        position: "relative",
        paddingLeft: 20, // Adjust padding for alignment
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
      <Container sx={{ position: "relative", zIndex: 2 }}>
        {/* Main Content Box with Custom Positioning */}
        <Box
          sx={{
            position: "absolute",
            bottom: "40%", // Position at 40% from the bottom
            left: 0, // Align to the left
            width: "100%",
            maxWidth: { xs: "90%", md: "60%" }, // Adjust max width for responsiveness
            px: { xs: 2, md: 4 },
          }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Rent a moto in Phuket
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Choose quality and reliability with our motorcycles!
          </Typography>
        </Box>

        {/* Social Media Icons */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20, // Distance from the bottom
            left: 20, // Distance from the left
            display: "flex",
            gap: 1,
          }}
        >
          <IconButton
            aria-label="Facebook"
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            aria-label="Twitter"
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            aria-label="Instagram"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            aria-label="LinkedIn"
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "#fff", backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <LinkedIn />
          </IconButton>
        </Box>

        {/* Phone Number */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20, // Distance from the bottom
            right: 20, // Distance from the right
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Phone sx={{ color: "#fff" }} />
          <Typography variant="h6" component="p">
            +66 1234 5678
          </Typography>
        </Box>

        {/* Chevron Down Arrow */}
        <Box
          sx={{
            position: "absolute",
            bottom: 20, // Distance from the bottom
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <IconButton
            aria-label="Scroll Down"
            href="#your-section-id" // Link to the section you want to scroll down to
            sx={{ color: "#fff" }}
          >
            <ArrowDropDownCircleIcon sx={{ fontSize: 40 }} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroBanner;
