import { useState } from "react";
import {
  Button,
  Grid,
  Typography,
  IconButton,
  Container,
  Box,
  useMediaQuery,
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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

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
          {/* Previous Button - Rounded for xs and sm */}

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
              backgroundImage: {
                xs: "none",
                md: "url('/images/slider_background.svg')",
              },
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            sx={{
              width: "53%",
              backgroundColor: {
                xs: "none",
                md: theme.palette.primary.main,
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
          {isSmallScreen && (
            // <IconButton
            //   onClick={prevBike}
            //   sx={{
            //     position: "absolute",
            //     top: "50%",
            //     left: "2px",
            //     transform: "translateY(-50%)",
            //     backgroundColor: theme.palette.background.paper,
            //     borderRadius: "50%",
            //     width: "50px",
            //     height: "50px",
            //     boxShadow: theme.shadows[3],
            //     "&:hover": {
            //       backgroundColor: theme.palette.grey[400],
            //     },
            //   }}
            // >
            <IconButton
              onClick={nextBike}
              className="nextButtonMobile"
              sx={{
                position: "absolute",
                top: "50%",
                left: "4px",
                transform: "translateY(-100%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                border: "2px solid",
                borderRadius: "50%",
                borderColor: theme.palette.primary.main,
                width: "60px",
                height: "58px",
                // boxShadow: theme.shadows[3],
                "&:hover": {
                  backgroundColor: theme.palette.grey[400],
                },
              }}
            >
              <ArrowBackIosIcon
                sx={{
                  fontSize: 30,
                  marginLeft: "8px",
                  color: theme.palette.primary.main,
                }}
              />
            </IconButton>
          )}
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
                flexDirection: { sm: "column", md: "row" },
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
                  order: { md: 0, sm: 1 },
                  justifyContent: "center",
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
                    "@media (max-width: 1190px)": {
                      width: "650px",
                      marginLeft: "-185px",
                    },
                    "@media (max-width: 960px)": {
                      display: showPrices ? "none" : "block",
                      marginLeft: "0px",
                      width: "540px",
                    },
                    "@media (max-width: 600px)": {
                      width: "500px",
                      marginLeft: "0px",
                    },
                    "@media (max-width: 0px)": {
                      width: "650px",
                      marginLeft: "0px",
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
                  height: { xs: "432px  ", md: "532px", lg: "580px" },
                  width: { sm: "100%", md: "50%", lg: "50%" },
                  minHeight: "auto",
                  display: "flex",
                  justifyContent: "end",
                  order: { md: 1, sm: 0 },
                  // paddingLeft: { md: "176px", lg: 0 },
                }}
              >
                {showPrices ? (
                  <Box
                    sx={{
                      float: "left",
                      width: "491px",
                      marginRight: "0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "start", md: "end" },
                      marginLeft: { xs: 0, md: 0 },
                      gap: { xs: 1.7, md: 3 },
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
                          marginLeft: -index * 13.5 + "px",
                        }}
                      >
                        <Box
                          sx={{
                            display: { xs: "block", md: "block" },
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
                            width: {
                              xs: 600 + index * 13.5 + "px",
                              md: 350 + index * 23.5 + "px",
                              lg: 450 + index * 23.5 + "px",
                            },
                            py: { xs: 1.2, md: 1.2, lg: 1.5 },
                            paddingLeft: { xs: 4, md: 2 },
                            paddingRight: { xs: 24.3, md: 3 },
                            // marginLeft: -index * 13.5 + "px",
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
                        {/* <Box
                          sx={{
                            display: { xs: "block", md: "none" },
                            marginLeft: "-1px",
                            width: "11px",
                            height: "100",
                            backgroundColor:
                              theme.custom.pallete?.background?.dark,
                            clipPath:
                              "polygon(0% 0%, 45% 0%, 100% 100%, 0% 100%)",
                          }}
                        ></Box> */}
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Box
                    sx={{
                      pt: { sm: 2, md: 8 },
                      pb: 21,
                      display: "flex",
                      flexDirection: { sm: "column", md: "row" },
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      gap: { sm: 2, md: 0 },
                      // gap: "140px",
                    }}
                  >
                    <Box
                      sx={{
                        order: { sm: 1, md: 0 },
                        display: { xs: "none", md: "flex" },
                        flexDirection: { sm: "row", md: "column" },
                        width: "80%",
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
                            width: "150%",
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
                          width: "150%",
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
                          width: "150%",
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
                        order: { sm: 0, md: 1 },
                        display: "flex",
                        flexDirection: { sm: "row", md: "column" },
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: { sm: 6, md: 4, lg: 5 },
                        width: { md: "20%", lg: "20%" },
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
                  bottom: { xs: "101px", md: "150px", lg: "190px" },
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
                  width: { xs: "83.5%", md: "63.5%", lg: "70%" },
                  height: { xs: "63px", sm: "78px", md: "95px" },
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
                    clipPath: "polygon(0 0%, 100% 0, 45% 100%, 0% 100%)",
                  }}
                ></Box>
                <Box
                  sx={{
                    position: "absolute",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: { sm: "96%", md: "71%", lg: "76%" },
                    paddingLeft: { sm: "100px", md: "100px", lg: "170px" },
                    zIndex: 10,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: { sm: 30, md: 36, lg: 46 },
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
                      fontSize: { sm: 30, md: 36, lg: 46 },
                      fontWeight: 800,
                      fontStyle: "italic",
                      paddingRight: 10,
                    }}
                  >
                    ฿ {currentBike.price}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    marginRight: "-32px",
                    width: "50px",
                    height: "100%",
                    // backgroundColor: "grey",
                    backgroundColor: theme.custom.pallete?.background?.dark,
                    clipPath: "polygon(0 -1%, 100% 0, 45% 100%, 0% 100%)",
                  }}
                ></Box>
              </Box>
              <Box
                className="nav_container"
                sx={{
                  display: { sm: "none", md: "block" },
                }}
              >
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
          {isSmallScreen && (
            <IconButton
              onClick={nextBike}
              className="nextButtonMobile"
              sx={{
                position: "absolute",
                top: "50%",
                right: "4px",
                transform: "translateY(-100%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                border: "2px solid",
                borderRadius: "50%",
                borderColor: theme.palette.primary.main,
                width: "60px",
                height: "58px",
                // boxShadow: theme.shadows[3],
                "&:hover": {
                  backgroundColor: theme.palette.grey[400],
                },
              }}
            >
              <ArrowForwardIosIcon
                sx={{
                  fontSize: 30,
                  marginRight: "-4px",
                  color: theme.palette.primary.main,
                }}
              />
            </IconButton>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default MotoPark;
