"use client";
import { Box, Typography, Container } from "@mui/material";
import Image from "next/image"; // Assuming you are using Next.js
import theme from "@/theme/theme";
import { useTranslation } from "next-i18next";

const Advantages = () => {
  const { t } = useTranslation("advantages");
  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        height: "100%",
        width: "100%",
        pt: 3,
        pb: 3,
      }}
    >
      <Container
        className={"container_advantages"}
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          gap: { xs: 4, md: 6, lg: 8 },
          backgroundImage: {
            xs: "url(/images/AdvantagesImage.png)",
            sm: "none",
            md: "none",
          },
          position: "relative", // Ensure the Container is the containing block for the overlay
          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
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
          <Box>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                position: "relative",
                pt: { xs: 0, sm: 0, md: 0, lg: 0 },
                pb: { xs: 5, sm: 4, md: 5, lg: 5 },
                zIndex: 1,
                color: {
                  xs: theme.palette.background.paper,
                  sm: theme.palette.text.primary,
                },
              }}
            >
              {t("title")}
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
                  xs: theme.palette.background.paper,
                  sm: theme.custom.pallete?.greydark,
                },
              }}
            >
              {t("subtitle")}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                position: "relative",
                zIndex: 1,
                color: {
                  xs: theme.palette.background.paper,
                  sm: theme.palette.text.primary,
                },
                pb: 4,
                fontSize: { xs: 20, sm: 16, md: 20, lg: 20 },
                fontWeight: "400",
                lineHeight: "150%",
                maxWidth: "100%",
              }}
            >
              {t("description")}
            </Typography>
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            <Image
              src="/images/AdvantagesImage2.png" // Replace with your image path
              alt="Shop"
              layout="responsive"
              width={600}
              height={400}
              objectFit="cover"
            />
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "50%",
            height: "auto",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Image
            src="/images/AdvantagesImage.png" // Replace with your image path
            alt="Shop"
            layout="fill" // This will fill the box
            objectFit="cover" // Cover the entire area while maintaining the aspect ratio
            objectPosition="center" // Center the image
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Advantages;
