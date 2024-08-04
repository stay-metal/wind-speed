"use client";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

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
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 8 },
      }}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography variant="h1" component="h1" gutterBottom>
        Rent a moto in Phuket
      </Typography>
      <Typography variant="h6" component="p" gutterBottom>
        Choose quality and reliability with our motorcycles!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        href="tel:+6647014647"
        sx={{ mt: 2, width: { xs: "100%", sm: "auto" } }}
        component={motion.a}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        +66 6 470 146 47
      </Button>
    </Box>
  );
};

export default HeroBanner;
