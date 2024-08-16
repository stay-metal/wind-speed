"use client";
import { Box, Typography, Grid, Container } from "@mui/material";
import Image from "next/image"; // Assuming you are using Next.js
import theme from "@/theme/theme";
import { useTranslation } from "next-i18next";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

const Contacts = () => {
  const { t } = useTranslation("contacts");
  return (
    <Box
      sx={{
        bgcolor: {
          xs: theme.palette.background.paper,
          sm: theme.custom.pallete?.background?.dark,
        },
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        sx={{
          background: {
            xs: "",
            sm: "linear-gradient(-10deg, rgba(0,0,0,0.5), rgba(255,255,255,0))",
          },
          pt: { xs: 0, sm: 3, md: 3, lg: 3 },
          pb: { xs: 0, sm: 3, md: 3, lg: 8 },
        }}
      >
        <Container
          className={"container_advantages"}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            pt: { xs: 0, sm: 3, md: 3, lg: 3 },
            gap: { xs: 4, md: 6, lg: 8 },
            position: "relative", // Ensure the Container is the containing block for the overlay
            "::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              // backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 0, // Place the overlay below the content
              display: { xs: "block", sm: "none" }, // Only show overlay on xs screens
            },
            backgroundSize: "cover",
            backgroundPosition: "center, center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "auto",
              width: { xs: "100%", sm: "50%" },
            }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                // pt: { xs: 0, sm: 2, md: 3, lg: 1 },
                // pb: { xs: 5, sm: 4, md: 5, lg: 5 },
                color: {
                  xs: theme.palette.text.primary,
                  sm: theme.palette.background.paper,
                },
              }}
            >
              {t("H1")}
            </Typography>
            <Typography
              variant="h6"
              component="h3"
              pb={1}
              sx={{
                // color: theme.custom.pallete?.greydark,
                fontSize: { xs: 24, sm: 20, md: 24, lg: 24 },
                fontStyle: "italic",
                pb: 4,
                fontWeight: "400",
                position: "relative",
                zIndex: 1,
                color: {
                  xs: theme.palette.text.primary,
                  sm: theme.palette.background.paper,
                },
              }}
            >
              <Box sx={{ pt: 4 }}>
                {/* {t("address.title")} <br />  */}
                {t("address.value")}
              </Box>
              {/* <Box>
                  {t("phone.title")} <br /> {t("phone.value")}
                </Box> */}
            </Typography>
            <Box>
              <ContactForm />
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              width: { xs: "100%", sm: "50%" },
              height: { xs: "610px", sm: "auto" },
              display: { xs: "block", sm: "block" },
            }}
          >
            <ContactMap />
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Contacts;
