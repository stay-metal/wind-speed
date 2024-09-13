"use client";
import { Box, Typography } from "@mui/material";
import { Roboto } from "@next/font/google";
import theme from "@/theme/theme";
import MotoCharDisplay from "./MotoCharDisplay";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  display: "swap",
});

interface MotoCharProps {
  features: {
    type: { en: string; ru: string };
    abs?: boolean;
    tires: string;
    exhaust: string;
  };
  charData: {
    maxSpeed: string;
    weight: string;
    engine: string;
  };
  currentLang: "en" | "ru";
  t: (key: string) => string;
  isMounted: boolean;
}

const MotoChars: React.FC<MotoCharProps> = ({
  features,
  charData,
  currentLang,
  t,
  isMounted,
}) => {
  return (
    <Box
      sx={{
        pt: { sm: 2, md: 8 },
        pb: 21,
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "row" },
        justifyContent: "space-between",
        width: "100%",
        alignItems: "center",
        gap: { xs: 2, sm: 2, md: 0 },
      }}
    >
      <Box
        sx={{
          order: { xs: 1, sm: 1, md: 0 },
          display: { xs: "none", md: "flex" },
          flexDirection: { sm: "row", md: "column" },
          width: "80%",
          marginTop: { md: "-10px", lg: "-14px" },
          gap: { xs: 3, md: 3, lg: 4 },
          color: theme.palette.background.paper,
        }}
      >
        <Typography
          variant="body1"
          className={roboto.className}
          sx={{
            textTransform: "uppercase",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: { md: 45, lg: 49 },
          }}
        >
          {isMounted ? features.type[currentLang] : ""}
        </Typography>
        {features.abs && (
          <Typography
            variant="body1"
            className={roboto.className}
            sx={{
              textTransform: "uppercase",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: { md: 33, lg: 36 },
              color: theme.custom.pallete?.background?.dark,
              marginLeft: "-27px",
              width: "150%",
            }}
          >
            ABS
          </Typography>
        )}
        <Typography
          variant="body1"
          className={roboto.className}
          sx={{
            textTransform: "uppercase",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: { md: 33, lg: 36 },
            marginLeft: "-51px",
            color: theme.custom.pallete?.background?.dark,
            width: "150%",
          }}
        >
          {t("tires")}{" "}
          <span
            style={{
              fontWeight: 400,
              color: theme.palette.background?.paper,
            }}
          >
            {features.tires}
          </span>
        </Typography>
        <Typography
          className={roboto.className}
          variant="body1"
          sx={{
            textTransform: "uppercase",
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: { md: 33, lg: 36 },
            color: theme.custom.pallete?.background?.dark,
            marginLeft: "-76px",
            width: "150%",
          }}
        >
          {t("exhaust")}{" "}
          <span
            style={{
              fontWeight: 400,
              color: theme.palette.background?.paper,
            }}
          >
            {features.exhaust}
          </span>
        </Typography>
      </Box>

      {/* Moto Characteristics */}
      <Box
        sx={{
          order: { sm: 0, md: 1 },
          display: "flex",
          flexDirection: { xs: "row", sm: "row", md: "column" },
          alignItems: "center",
          justifyContent: "space-evenly",
          gap: { xs: 2, sm: 6, md: 4, lg: 5 },
          width: { xs: "100%", sm: "auto", md: "20%", lg: "20%" },
        }}
      >
        <MotoCharDisplay
          charValue={charData.maxSpeed}
          charMetrica={t("speed.metric")}
          charDescription={t("speed.title")}
        />
        <MotoCharDisplay
          charValue={charData.weight}
          charMetrica={t("weight.metric")}
          charDescription={t("weight.title")}
        />
        <MotoCharDisplay
          charValue={charData.engine}
          charMetrica={t("engine.metric")}
          charDescription={t("engine.title")}
        />
      </Box>
    </Box>
  );
};

export default MotoChars;
