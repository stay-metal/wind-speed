"use client";
import { Box } from "@mui/material";

const ContactMap = () => {
  return (
    // <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345099!2d144.95373631531578!3d-37.817209979751594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf57764606d81d001!2sVictoria%20Park!5e0!3m2!1sen!2sau!4v1571541749602!5m2!1sen!2sau"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
    ></iframe>
    // </Box>
  );
};

export default ContactMap;
