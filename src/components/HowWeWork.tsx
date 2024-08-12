"use client";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ConstructionIcon from "@mui/icons-material/Construction";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import HistoryIcon from "@mui/icons-material/History";
import theme from "@/theme/theme";
import { useTranslation } from "next-i18next";

const HowWeWork = () => {
  const { t } = useTranslation("hwwork");
  const steps = [
    {
      tname: "reservations",
      icon: (
        <EventAvailableIcon sx={{ color: "inherit", fontSize: "inherit" }} />
      ),
    },
    {
      tname: "delivery",
      icon: <TwoWheelerIcon sx={{ color: "inherit", fontSize: "inherit" }} />,
    },
    {
      tname: "technical",
      icon: <ConstructionIcon sx={{ color: "inherit", fontSize: "inherit" }} />,
    },

    {
      tname: "return",
      icon: <HistoryIcon sx={{ color: "inherit", fontSize: "inherit" }} />,
    },
  ];

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
        }}
      >
        <Container className={"container_howwework"}>
          <Box
            sx={
              {
                // py: 6, px: { xs: 2, md: 4 },
                // bgcolor: "background.paper",
              }
            }
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{
                pt: { xs: 1, sm: 2, md: 3, lg: 1 },
                pb: { xs: 5, sm: 4, md: 5, lg: 5 },
                color: {
                  xs: theme.palette.text.primary,
                  sm: theme.palette.background.paper,
                },
              }}
            >
              {t("H1" + ".text")}
            </Typography>
            <Grid
              container
              rowSpacing={{ xs: 2, sm: 1 }}
              columnSpacing={{ xs: 1, sm: 12, md: 14, lg: 14 }}
            >
              {steps.map((step, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={6}
                  key={index}
                  component={Box}
                  // whileHover={{ scale: 1.05 }}
                  // transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card
                    sx={{
                      textAlign: "left",
                      padding: { sm: 0 },
                      px: { xs: 3, sm: 0 },
                      py: { xs: 2, sm: 0 },
                      pb: { xs: 1, sm: 0 },
                      background: {
                        xs: theme.custom.pallete?.background?.dark,
                        sm: "transparent",
                      },
                      borderRadius: {
                        xs: theme.custom.borderRadius?.brand,
                        sm: "transparent",
                      },
                    }}
                  >
                    <CardContent sx={{ padding: 0 }}>
                      <Box
                        sx={{
                          color: theme.palette.primary.main,
                          fontSize: { xs: 38, sm: 29, md: 33, lg: 33 },
                          pb: 1,
                        }}
                      >
                        {step.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        component="h3"
                        pb={1}
                        sx={{
                          color: theme.palette.background.paper,
                          fontSize: { xs: 24, sm: 20, md: 24, lg: 24 },
                          fontWeight: "400",
                        }}
                      >
                        {t(step.tname + ".title")}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#B5B5B5",

                          fontSize: { xs: 20, sm: 16, md: 20, lg: 20 },
                          fontWeight: "400",
                          lineHeight: "150%",
                          maxWidth: "90%",
                        }}
                      >
                        {t(step.tname + ".description")}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HowWeWork;
