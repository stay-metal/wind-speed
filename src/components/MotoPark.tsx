import { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  IconButton,
  Container,
  Box,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import theme from "@/theme/theme";
import { Roboto } from "@next/font/google";
import MotoCharDisplay from "./MotoCharDisplay";
import ShowMore from "./ShowMore";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  display: "swap",
});

const motorcycles = [
  {
    brand: "Yamaha",
    model: "FZ 8",
    image: "/images/bike.png",
    maxSpeed: "296",
    weight: "226",
    engine: "998",
    features: {
      type: "Спортбайк",
      abs: true,
      tires: "Dunlop",
      exhaust: "Akrapovic",
    },
    price: "3000",
    priceList: [
      {
        duration: "От 2 до 3 дней",
        price: "5998",
      },
      {
        duration: "От 4 до 7 дней",
        price: "4998",
      },
      {
        duration: "Oт 8 до 14 дней",
        price: "3998",
      },
      {
        duration: "Oт 15 до 29 дней",
        price: "2998",
      },
      {
        duration: "Oт 30+ дней",
        price: "2498",
      },
      {
        duration: "Для членов клуба",
        price: "1998",
      },
    ],
  },
  {
    brand: "Yamaha",
    model: "FZ 9",
    image: "/images/bike2.png",
    maxSpeed: "290",
    weight: "220",
    engine: "889",
    features: {
      type: "Спортбайк",
      abs: true,
      tires: "Michelin",
      exhaust: "Akrapovic",
    },
    price: "3200",
    priceList: [
      {
        duration: "От 2 до 3 дней",
        price: "5998",
      },
      {
        duration: "От 4 до 7 дней",
        price: "4998",
      },
      {
        duration: "Oт 8 до 14 дней",
        price: "3998",
      },
      {
        duration: "Oт 15 до 29 дней",
        price: "2998",
      },
      {
        duration: "Oт 30+ дней",
        price: "2498",
      },
      {
        duration: "Для членов клуба",
        price: "1998",
      },
    ],
  },
  {
    brand: "Yamaha",
    model: "TSX",
    image: "/images/bike3.png",
    maxSpeed: "310",
    weight: "210",
    engine: "998",
    features: {
      type: "Спортбайк",
      abs: true,
      tires: "Pirelli",
      exhaust: "Termignoni",
    },
    price: "3500",
    priceList: [
      {
        duration: "От 2 до 3 дней",
        price: "5998",
      },
      {
        duration: "От 4 до 7 дней",
        price: "4998",
      },
      {
        duration: "Oт 8 до 14 дней",
        price: "3998",
      },
      {
        duration: "Oт 15 до 29 дней",
        price: "2998",
      },
      {
        duration: "Oт 30+ дней",
        price: "2498",
      },
      {
        duration: "Для членов клуба",
        price: "1998",
      },
    ],
  },
  {
    brand: "Kawasaki",
    model: "ZX-10R",
    image: "/images/bike.png",
    maxSpeed: "299",
    weight: "207",
    engine: "998",
    features: {
      type: "Спортбайк",
      abs: true,
      tires: "Bridgestone",
      exhaust: "Yoshimura",
    },
    price: "4000",
    priceList: [
      {
        duration: "От 2 до 3 дней",
        price: "5998",
      },
      {
        duration: "От 4 до 7 дней",
        price: "4998",
      },
      {
        duration: "Oт 8 до 14 дней",
        price: "3998",
      },
      {
        duration: "Oт 15 до 29 дней",
        price: "2998",
      },
      {
        duration: "Oт 30+ дней",
        price: "2498",
      },
      {
        duration: "Для членов клуба",
        price: "1998",
      },
    ],
  },
];

const MotoPark = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("Yamaha");
  const [showPrices, setShowPrices] = useState(false);

  const brands = [...new Set(motorcycles.map((bike) => bike.brand))];

  const filteredModels = motorcycles.filter(
    (bike) => bike.brand === selectedBrand
  );

  const nextBike = () => {
    if (currentIndex < filteredModels.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      const currentBrandIndex = brands.indexOf(selectedBrand);
      const nextBrandIndex = (currentBrandIndex + 1) % brands.length;
      const nextBrand = brands[nextBrandIndex];
      setSelectedBrand(nextBrand);
      setCurrentIndex(0);
    }
  };

  const prevBike = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      const currentBrandIndex = brands.indexOf(selectedBrand);
      const prevBrandIndex =
        currentBrandIndex === 0 ? brands.length - 1 : currentBrandIndex - 1;
      const prevBrand = brands[prevBrandIndex];
      setSelectedBrand(prevBrand);
      setCurrentIndex(
        motorcycles.filter((bike) => bike.brand === prevBrand).length - 1
      );
    }
  };

  const toggleView = () => {
    console.log("click");
    setShowPrices(!showPrices);
  };

  const currentBike = filteredModels[currentIndex];
  return (
    <Box
    // sx={{ maxHeight: "100dvh" }}
    >
      <Box
        sx={{
          backgroundColor: {
            xs: theme.palette.background.paper,
            sm: theme.palette.background.paper,
          },
        }}
      >
        <Container
          sx={{
            pb: 2.2,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              pt: { xs: 1, sm: 2, md: 3, lg: 1 },
              pb: { xs: 2, sm: 2, md: 2, lg: 2 },
              color: {
                xs: theme.palette.text.primary,
                sm: theme.palette.text.primary,
              },
            }}
          >
            Мотопарк
          </Typography>

          {/* Brand Selection */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {brands.map((brand, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    marginRight: "-1px",
                    width: "10px",
                    height: "100%",
                    // backgroundColor: "grey",
                    backgroundColor:
                      brand === selectedBrand
                        ? theme.palette.text.primary
                        : theme.custom.pallete?.greymenu,
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 55% 0%)",
                  }}
                ></Box>
                <Typography
                  className={roboto.className}
                  variant="h6"
                  py={0.4}
                  px={2}
                  color={
                    brand === selectedBrand
                      ? theme.palette.background.paper
                      : theme.palette.text.primary
                  }
                  sx={{
                    cursor: "pointer",
                    // marginRight: "15px",
                    textTransform: "uppercase",
                    fontStyle: "italic",
                    fontSize: "16px",
                    position: "relative",
                    backgroundColor:
                      brand === selectedBrand
                        ? theme.palette.text.primary
                        : theme.custom.pallete?.greymenu,
                  }}
                  onClick={() => {
                    setSelectedBrand(brand);
                    setCurrentIndex(0);
                    setShowPrices(false); // Reset to characteristics view when brand is changed
                  }}
                >
                  {brand}
                </Typography>
                <Box
                  sx={{
                    marginLeft: "-1px",
                    width: "11px",
                    height: "100",
                    // backgroundColor: "grey",
                    backgroundColor:
                      brand === selectedBrand
                        ? theme.palette.text.primary
                        : theme.custom.pallete?.greymenu,
                    clipPath: "polygon(0 0, 100% 0, 45% 100%, 0% 100%)",
                  }}
                ></Box>
              </Box>
            ))}
          </Box>

          {/* Model Selection */}
          <Box
            mt={2.2}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {filteredModels.map((bike, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Box
                  sx={{
                    marginRight: "-1px",
                    width: "10px",
                    height: "100%",
                    // backgroundColor: "grey",
                    backgroundColor:
                      index === currentIndex
                        ? theme.palette.primary.main
                        : "#FF9393",
                    clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 55% 0%)",
                  }}
                ></Box>
                <Typography
                  variant="body1"
                  py={0.4}
                  px={4}
                  color={
                    index === currentIndex
                      ? theme.palette.background.paper
                      : theme.palette.background.paper
                  }
                  sx={{
                    cursor: "pointer",
                    textTransform: "uppercase",
                    fontStyle: "italic",
                    fontSize: "16px",
                    backgroundColor:
                      index === currentIndex
                        ? theme.palette.primary.main
                        : "#FF9393",
                  }}
                  onClick={() => {
                    setCurrentIndex(index);
                    setShowPrices(false); // Reset to characteristics view when model is changed
                  }}
                >
                  {bike.model}
                </Typography>
                <Box
                  sx={{
                    marginLeft: "-1px",
                    width: "11px",
                    height: "100",
                    // backgroundColor: "grey",
                    backgroundColor:
                      index === currentIndex
                        ? theme.palette.primary.main
                        : "#FF9393",
                    clipPath: "polygon(0 0, 100% 0, 45% 100%, 0% 100%)",
                  }}
                ></Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: {
            xs: theme.custom.pallete?.greycatalog,
            sm: theme.custom.pallete?.greycatalog,
          },
          // backgroundImage: "url('/images/slider_background.svg')",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "right",
          // backgroundSize: "contain",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            zIndex: 0,
            height: "830px",
            maxHeight: "830px",
            width: "100%",
            maxWidth: theme.custom.maxPageWidth,
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "27%",
              marginRight: "1px",
              backgroundColor: {
                xs: theme.custom.pallete?.greycatalog,
                sm: theme.custom.pallete?.greycatalog,
              },
            }}
          ></Box>
          <Box
            sx={{
              width: "20%",
              backgroundColor: theme.custom.pallete?.greycatalog,
              backgroundImage: "url('/images/slider_background.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            sx={{
              width: "53%",
              backgroundColor: {
                xs: theme.palette.primary.main,
              },
            }}
          ></Box>
        </Box>
        <Container
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              pb: 0,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              className="top_container"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                // height: "490px",
              }}
            >
              <Box
                className="bike_picture"
                sx={{
                  position: "relative",
                  top: "6px",
                  right: { md: "55px", lg: "120px" },
                  width: { md: "40%", lg: "50%" },
                  display: "flex",
                  alignItems: "end",
                  // position: "absolute",
                }}
              >
                {/* 
              xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
      
      */}
                <Box
                  sx={{
                    position: "absolute",
                    "@media (min-width: 1920px)": {
                      width: "650px",
                      marginLeft: "30px",
                    },
                    "@media (max-width: 1920px)": {
                      width: "650px",
                      marginLeft: "30px",
                    },
                    "@media (max-width: 1280px)": {
                      width: "570px",
                      marginLeft: "30px",
                    },
                    "@media (max-width: 1140px)": {
                      width: "650px",
                      marginLeft: "-185px",
                    },
                    "@media (max-width: 960px)": {
                      marginLeft: "30px",
                      width: "540px",
                    },
                    "@media (max-width: 600px)": {
                      width: "500px",
                    },
                    "@media (max-width: 0px)": {
                      width: "650px",
                    },
                    // width: {
                    //   xs: "650px",
                    //   sm: "500px",
                    //   md: "540px",
                    //   lg: "630px",
                    //   xl: "650px",
                    // },

                    height: "auto",
                  }}
                >
                  <Image
                    src={currentBike.image}
                    alt={currentBike.model}
                    width="801"
                    height="406"
                    objectFit="fit"
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              </Box>
              <Box
                className="info_container"
                sx={{
                  height: { md: "540px", lg: "580px" },
                  width: { md: "50%", lg: "50%" },
                  minHeight: "auto",
                  paddingLeft: { md: "176px", lg: 0 },
                }}
              >
                {showPrices ? (
                  <Box
                    sx={{
                      float: "right",
                      width: "491px",
                      marginRight: "0 auto",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "end",
                      gap: 3,
                    }}
                  >
                    {/* <Typography variant="h4" gutterBottom>
                      Цены:
                    </Typography> */}
                    {currentBike.priceList.map((price, index) => (
                      <Box
                        key={index}
                        className={`itemPrice-${index}`}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <Box
                          sx={{
                            marginRight: "-1px",
                            width: "20px",
                            height: "auto",
                            // backgroundColor: "grey",
                            backgroundColor:
                              theme.custom.pallete?.background?.dark,
                            clipPath:
                              "polygon(0 100%, 100% 100%, 100% 0%, 80% 0%)",
                          }}
                        ></Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            // gap: "200px",
                            width: 450 + index * 23.5 + "px",
                            py: 1.5,
                            paddingLeft: 2,
                            paddingRight: 3,
                            backgroundColor:
                              theme.custom.pallete?.background?.dark,
                          }}
                        >
                          <Typography
                            variant="body1"
                            className={roboto.className}
                            sx={{
                              fontSize: 21,
                              fontStyle: "italic",
                            }}
                          >
                            {price.duration}
                          </Typography>
                          <Typography
                            variant="body1"
                            className={roboto.className}
                            sx={{
                              fontSize: 21,
                              fontStyle: "italic",
                            }}
                          >
                            {price.price}
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Box
                    sx={{
                      pt: 8,
                      pb: 21,
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "end",
                      gap: "160px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        width: "90%",
                        marginTop: { md: "-10px", lg: "-14px" },
                        gap: { md: 3, lg: 4 },
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
                        {currentBike.features.type}
                      </Typography>
                      {currentBike.features.tires ? (
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
                          }}
                        >
                          {" "}
                          ABS{" "}
                        </Typography>
                      ) : (
                        ""
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
                        }}
                      >
                        Шины{" "}
                        <span
                          style={{
                            fontWeight: 400,
                            color: theme.palette.background?.paper,
                          }}
                        >
                          {currentBike.features.tires}
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
                        }}
                      >
                        Выхлоп{" "}
                        <span
                          style={{
                            fontWeight: 400,
                            color: theme.palette.background?.paper,
                          }}
                        >
                          {currentBike.features.exhaust}
                        </span>
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: { md: 4, lg: 5 },
                        width: { md: "23%", lg: "30%" },
                      }}
                    >
                      <MotoCharDisplay
                        charValue={currentBike.maxSpeed}
                        charMetrica="км/ч"
                        charDescription="Макс. скорость"
                      />

                      <MotoCharDisplay
                        charValue={currentBike.weight}
                        charMetrica="кг"
                        charDescription="Масса"
                      />
                      <MotoCharDisplay
                        charValue={currentBike.engine}
                        charMetrica="см/куб"
                        charDescription="Двигатель"
                      />
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
            <Box
              className="bottom_container"
              sx={{
                marginLeft: "-100px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: "190px",
                }}
              >
                {showPrices ? (
                  <ShowMore
                    direction="backward"
                    label="НАЗАД"
                    onClick={toggleView}
                  />
                ) : (
                  <ShowMore
                    direction="forward"
                    label="ПОДРОБНЕЕ"
                    onClick={toggleView}
                  />
                )}
              </Box>
              <Box
                className="title_container"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  backgroundColor: theme.custom.pallete?.background?.dark,
                  justifyContent: "space-between",
                  width: "70%",
                  height: "95px",
                  alignItems: "center",
                  // pl: 20,
                }}
              >
                <Box
                  sx={{
                    marginRight: "-32px",
                    width: "50px",
                    height: "100.9%",
                    // backgroundColor: "grey",
                    backgroundColor: theme.custom.pallete?.greycatalog,
                    clipPath: "polygon(0 0, 100% 0, 45% 100%, 0% 100%)",
                  }}
                ></Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: 46,
                    fontWeight: 800,
                    fontStyle: "italic",
                  }}
                >
                  <span
                    style={{
                      textTransform: "uppercase",
                    }}
                  >
                    {currentBike.brand}
                  </span>
                  <span
                    style={{
                      marginLeft: "15px",
                      color: theme.palette.primary.main,
                      textTransform: "uppercase",
                    }}
                  >
                    {currentBike.model}
                  </span>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: 46,
                    fontWeight: 800,
                    fontStyle: "italic",
                    paddingRight: 10,
                  }}
                >
                  ฿ {currentBike.price}
                </Typography>
                <Box
                  sx={{
                    marginRight: "-32px",
                    width: "50px",
                    height: "100%",
                    // backgroundColor: "grey",
                    backgroundColor: theme.custom.pallete?.background?.dark,
                    clipPath: "polygon(0 0, 100% 0, 45% 100%, 0% 100%)",
                  }}
                ></Box>
              </Box>
              <Box className="nav_container">
                {" "}
                <Box
                  className="slider__nav-buttons"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 0,
                  }}
                >
                  <IconButton
                    onClick={prevBike}
                    sx={{
                      width: "165px",
                      height: "95px",
                      backgroundColor: "#F3F3F3",
                      borderRadius: 0,
                      clipPath:
                        "polygon(0% 100%, 16.42% 0%, 99% 0.01%, 82.2% 100%)",
                      "&:hover": {
                        backgroundColor: theme.custom.pallete?.background?.dark,
                        color: "white",
                      },
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{
                        marginLeft: "14px",
                        fontSize: 50,
                      }}
                    />
                  </IconButton>
                  <IconButton
                    onClick={nextBike}
                    sx={{
                      width: "165px",
                      height: "95px",
                      backgroundColor: "#F3F3F3",
                      borderRadius: 0,
                      clipPath:
                        "polygon(0% 100%, 16.42% 0%, 99% 0.01%, 82.2% 100%)",
                      "&:hover": {
                        backgroundColor: theme.custom.pallete?.background?.dark,
                        color: "white",
                      },
                    }}
                  >
                    <ArrowForwardIosIcon
                      sx={{
                        // marginLeft: "14px",
                        fontSize: 50,
                      }}
                    />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MotoPark;
