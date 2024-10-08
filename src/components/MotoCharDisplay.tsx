"use client";
import { Box, Typography } from "@mui/material";
import theme from "@/theme/theme";
import { Roboto } from "@next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  display: "swap",
});

export default function MotoCharDisplay({
  charValue,
  charMetrica,
  charDescription,
}: {
  charValue: string;
  charMetrica: string;
  charDescription: string;
}) {
  return (
    <Box
      sx={{
        textAlign: "center",
        width: { xs: "90px", sm: "110px", md: "110px", lg: "130px" }, // Adjust as needed
        color: theme.custom.pallete?.background?.dark, // Dark text color
        height: { xs: "40px", sm: "45px", md: "80px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: 1,
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "40px", sm: "45px", md: "60px" },
        }}
      >
        <Typography
          className={roboto.className}
          variant="h3"
          component="div"
          sx={{
            fontStyle: "italic",
            fontWeight: 600,
            fontSize: { xs: 30, sm: 32, md: 35, lg: 40 },
            lineHeight: 1,
          }}
        >
          {charValue}
        </Typography>
        <Typography
          className={roboto.className}
          component="span"
          sx={{
            fontSize: { xs: 11, sm: 11, md: 12, lg: 15 },
            fontWeight: 600,
            fontStyle: "italic",
            writingMode: "vertical-rl",
            transform: "rotate(180deg)",
            display: "inline-block",
          }}
        >
          {charMetrica}
        </Typography>
      </Box>
      <Box
        sx={{
          borderTop: "2px solid #333",
          width: "auto",
          marginTop: "7px",
          marginBottom: "7px",
        }}
      />

      <Typography
        className={roboto.className}
        variant="body2"
        component="div"
        sx={{
          fontStyle: "italic",
          fontWeight: 800,
          fontSize: { xs: 10, sm: 14, md: 14, lg: 16 },
        }}
      >
        {charDescription}
      </Typography>
    </Box>
  );
}
