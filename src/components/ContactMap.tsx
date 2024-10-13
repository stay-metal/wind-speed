"use client";
import { Box } from "@mui/material";

const ContactMap = () => {
  return (
    // <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.4080782592164!2d98.3384523948922!3d7.852288697416848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30502fa2304437e5%3A0x36db976020fcc867!2sChanakan%20Delight%20Chalong!5e0!3m2!1sru!2srs!4v1728777588065!5m2!1sru!2srs"
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
