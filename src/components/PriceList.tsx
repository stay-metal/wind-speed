"use client";
import { Box, Typography } from "@mui/material";
import { Roboto } from "@next/font/google";
import theme from "@/theme/theme";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  display: "swap",
});

interface PriceItem {
  duration: { en: string; ru: string };
  price: string | { en: string; ru: string };
}

interface PriceListProps {
  priceList: PriceItem[];
  currentLang: "en" | "ru";
}

const PriceList: React.FC<PriceListProps> = ({ priceList, currentLang }) => {
  return (
    <Box
      sx={{
        float: "right",
        width: { xs: "58%", sm: "461px", md: "491px" },
        marginRight: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "start", md: "end" },
        marginLeft: { xs: 0, sm: 0, md: 0 },
        gap: { xs: 1.7, md: 3 },
      }}
    >
      {priceList.map((priceItem, index) => (
        <Box
          key={index}
          className={`itemPrice-${index}`}
          sx={{
            display: "flex",
            flexDirection: "row",
            color: theme.palette.background.paper,
            marginLeft: {
              xs: -20 - index * 18.5 + "px",
              sm: -20 - index * 17.5 + "px",
              md: -70 - index * 18.5 + "px",
            },
          }}
        >
          <Box
            sx={{
              display: { xs: "block", md: "block" },
              marginRight: "-1px",
              width: "20px",
              height: "auto",
              zIndex: -1,
              backgroundColor: theme.custom.pallete?.background?.dark,
              clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 80% 0%)",
            }}
          ></Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: {
                xs: 450 + index * 18.5 + "px",
                sm: 510 + index * 13.5 + "px",
                md: 350 + index * 23.5 + "px",
                lg: 450 + index * 23.5 + "px",
              },
              textAlign: "left",
              py: { xs: 1.16, sm: 1.2, md: 1.2, lg: 1.5 },
              paddingLeft: { xs: 2, sm: 4, md: 2 },
              //   paddingRight: { xs: 28.3, sm: 39.3, md: 3 },
              paddingRight: {
                xs: 200 + index * 11 + "px",
                sm: 70 + index * 15 + "px",
                md: 3,
              },
              backgroundColor: theme.custom.pallete?.background?.dark,
            }}
          >
            <Typography
              variant="body1"
              className={roboto.className}
              sx={{
                fontSize: { xs: 16, sm: 21 },
                fontStyle: "italic",
              }}
            >
              {priceItem.duration[currentLang]}
            </Typography>
            <Typography
              variant="body1"
              className={roboto.className}
              sx={{
                fontSize: { xs: 16, sm: 21 },
                fontStyle: "italic",
              }}
            >
              {typeof priceItem.price === "string"
                ? priceItem.price
                : priceItem.price[currentLang]}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default PriceList;
