import { Button, Typography } from "@mui/material";
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
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: "transparent", // Red background color
        color: "#333", // Dark text color
        textTransform: "none", // Keep the original casing
        padding: "10px 20px",

        display: "flex",
        alignItems: "center",
        justifyContent: isForward ? "space-between" : "space-between",
        width: "fit-content",
      }}
    >
      {!isForward && (
        <ArrowBackIcon
          sx={{
            fontSize: "24px",
            marginRight: "10px",
            color: theme.custom.pallete?.background?.dark,
          }}
        />
      )}
      <Typography
        sx={{
          fontSize: 23,
          fontStyle: "italic",
          fontWeight: "700",
          color: theme.custom.pallete?.background?.dark,
          borderBottom: "2px solid " + theme.custom.pallete?.background?.dark,
          marginRight: isForward ? "10px" : "0px",
          marginLeft: !isForward ? "10px" : "0px",
        }}
      >
        {label}
      </Typography>
      {isForward && (
        <ArrowForwardIcon
          sx={{
            fontSize: "24px",
            marginLeft: "10px",
            color: theme.custom.pallete?.background?.dark,
          }}
        />
      )}
    </Button>
  );
}
