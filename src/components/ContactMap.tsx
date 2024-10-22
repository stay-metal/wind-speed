"use client";
import { Box } from "@mui/material";

const ContactMap = () => {
  return (
    // <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d494.05098723271027!2d98.33976213259359!3d7.852324823651527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502f1811e3ab05%3A0x47d19164157c4897!2sWindSpeed%20bike.!5e0!3m2!1sen!2srs!4v1729595664546!5m2!1sen!2srs"
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
