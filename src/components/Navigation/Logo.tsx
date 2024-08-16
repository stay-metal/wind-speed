import Image from "next/image";
import { Box } from "@mui/material";

const Logo = ({ footer }: { footer: boolean | null }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& .logo": {
          width: {
            xs: footer ? 115 : 125,
            sm: footer ? 115 : 140,
            md: footer ? 120 : 160,
            lg: footer ? 150 : 160,
            // xl: footer ? 180 : 160,
          }, // Adjust sizes based on breakpoints
          // height: { xs: 30, sm: 40, md: 50,  },
        },
      }}
    >
      <Image
        className="logo"
        src="/images/logo.svg"
        alt="WindSpeed Logo"
        width={150}
        height={50}
      />
    </Box>
  );
};

export default Logo;
