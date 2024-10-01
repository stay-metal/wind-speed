"use client";
import {
  Box,
  TextField,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
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

  const [open, setOpen] = useState(false); // State для управления открытием модального окна
  const [modalTitle, setModalTitle] = useState(""); // Заголовок сообщения
  const [modalText, setModalText] = useState(""); // Обычный текст

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Проверка обязательных полей
    if (!formData.name) {
      setModalTitle(t("form.errorTitle"));
      setModalText(t("form.errorNameRequired")); // Сообщение об ошибке: Имя не заполнено
      setOpen(true);
      return;
    }

    if (!formData.phone && !formData.email) {
      setModalTitle(t("form.errorTitle"));
      setModalText(t("form.errorContactRequired")); // Сообщение об ошибке: Ни телефон, ни email не заполнены
      setOpen(true);
      return;
    }

    // Если все поля корректны, отправляем запрос
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setModalTitle(t("form.successTitle")); // Перевод заголовка об успешной отправке
        setModalText(t("form.successMessage")); // Перевод текста об успешной отправке
        setOpen(true); // Открытие модального окна
        setFormData({ name: "", phone: "", email: "", text: "" }); // Сброс формы
      } else {
        setModalTitle(t("form.errorTitle")); // Перевод заголовка ошибки
        setModalText(t("form.errorMessage")); // Перевод текста ошибки
        setOpen(true); // Открытие модального окна
      }
    } catch (error) {
      setModalTitle(t("form.errorTitle")); // Перевод заголовка ошибки
      setModalText(t("form.errorMessage")); // Перевод текста ошибки
      setOpen(true); // Открытие модального окна
    }
  };

  const handleClose = () => {
    setOpen(false); // Закрытие модального окна
  };

  return (
    <Box
      component={motion.form}
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      sx={{
        py: 0,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
      onSubmit={handleSubmit}
    >
      <TextField
        label={t("form.name")}
        name="name"
        fullWidth
        margin="normal"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <TextField
        label={t("form.phone")}
        name="phone"
        fullWidth
        margin="normal"
        value={formData.phone}
        onChange={handleInputChange}
        required
      />
      <TextField
        label={t("form.email")}
        name="email"
        fullWidth
        margin="normal"
        value={formData.email}
        onChange={handleInputChange}
        required
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
          "& .MuiInputBase-inputMultiline": {
            padding: "15px", // Add padding directly to the textarea
          },
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
          margin: { xs: "0 auto", sm: "initial" },
        }}
      >
        {t("form.button")}
      </Button>

      {/* Модальное окно для отображения сообщения */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {modalTitle} {/* Заголовок сообщения */}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {modalText} {/* Обычный текст (подпись) */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default ContactForm;
