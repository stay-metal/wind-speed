"use client";
import { Box } from "@mui/material";

const ContactMap = () => {
  return (
    // <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1304.046005920495!2d98.30598326056067!3d7.776231529088892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s88%2F14%20Khrongkan%20Ban%20Rawai-Ban%20Nai%20Han%20Rd!5e0!3m2!1sru!2srs!4v1726397955464!5m2!1sru!2srs"
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
