"use client";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

const ContactForm = () => {
  const { t } = useTranslation("contacts");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    text: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Implement form submission logic here
  };

  return (
    <Box
      component={motion.form}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        py: 0,
        // px: { xs: 2, md: 4 },
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      onSubmit={handleSubmit}
    >
      {/* <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography> */}
      <TextField
        label={t("form.name")}
        name="name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleInputChange}
      />
      <TextField
        label={t("form.phone")}
        name="phone"
        fullWidth
        margin="normal"
        value={formData.phone}
        onChange={handleInputChange}
      />
      <TextField
        label={t("form.email")}
        name="email"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleInputChange}
      />
      <TextField
        label={t("form.text")}
        name="text"
        fullWidth
        margin="normal"
        multiline
        rows={8}
        value={formData.text}
        onChange={handleInputChange}
        sx={{
          "& .MuiOutlinedInput-root": {
            padding: 0, // Removes padding from the specified component
          },
          // padding: { xs: 0, sm: 4 },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          mt: 2,
          maxWidth: "352px",
          minWidth: "266px",
          py: { xs: "12px", sm: "18px" },
          fontSize: { xs: "16px", sm: "20px" },
          margin: { xs: " 0 auto", sm: "initial" },
        }}
      >
        {t("form.button")}
      </Button>
    </Box>
  );
};

export default ContactForm;
