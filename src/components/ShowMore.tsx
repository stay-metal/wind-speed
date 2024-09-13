"use client";
import { Button, Typography, Box } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import theme from "@/theme/theme";

export default function ShowMore({
  direction,
  label,
  onClick,
}: {
  direction: string;
  label: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const isForward = direction === "forward";
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "block" },
      }}
    >
      {" "}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          marginRight: "-2px",
          width: "31px",
          height: "49px",
          zIndex: 100,
          // backgroundColor: "grey",
          backgroundColor: theme.palette.primary.main,
          clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 55% 0%)",
        }}
      ></Box>
      <Button
        onClick={onClick}
        sx={{
          backgroundColor: {
            xs: theme.palette.primary.main,
            md: "transparent",
          }, // Red background color
          color: "#333", // Dark text color
          textTransform: "none", // Keep the original casing
          padding: {
            xs: !isForward ? "10px 67px 10px 44px" : "10px 30px 10px 30px",
            md: "10px 20px",
          },
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: isForward ? "space-between" : "space-between",
          width: "fit-content",
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        {!isForward && (
          <ArrowBackIcon
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: "24px",
              marginRight: "10px",
              color: theme.custom.pallete?.background?.dark,
            }}
          />
        )}
        <Typography
          sx={{
            fontSize: { xs: 15, sm: 19, md: 23 },
            fontStyle: "italic",
            fontWeight: "700",
            color: {
              xs: theme.palette.background.paper,
              md: theme.custom.pallete?.background?.dark,
            },
            borderBottom: {
              xs: "none",
              md: "2px solid " + theme.custom.pallete?.background?.dark,
            },
            marginRight: isForward ? "10px" : "0px",
            marginLeft: !isForward ? "10px" : "0px",
          }}
        >
          {label}
        </Typography>
        {isForward && (
          <ArrowForwardIcon
            sx={{
              display: { xs: "none", md: "block" },
              fontSize: "24px",
              marginLeft: "10px",
              color: theme.custom.pallete?.background?.dark,
            }}
          />
        )}
      </Button>
    </Box>
  );
}
