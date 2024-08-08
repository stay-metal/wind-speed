import Image from "next/image";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        "& .logo": {
          width: { xs: 101, sm: 140, md: 140, lg: 160 }, // Adjust sizes based on breakpoints
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
