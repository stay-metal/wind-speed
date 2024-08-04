import Image from "next/image";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Image
        src="/images/logo.svg"
        alt="WindSpeed Logo"
        width={150} // Specify your desired width
        height={50} // Specify your desired height
      />
    </Box>
  );
};

export default Logo;
