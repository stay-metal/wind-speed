"use client";
import { useState, useRef, useEffect } from "react";
import {
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
import MotoChars from "./MotoChars";
import ShowMore from "./ShowMore";
import Image from "next/image";
import { motoData } from "@/data/motopark";
import { useTranslation } from "next-i18next";
import PriceList from "./PriceList";
import { AnimatePresence, motion } from "framer-motion";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  display: "swap",
});

const variants = {
  hidden: { opacity: 0, x: 100 }, // Start hidden (offscreen right)
  visible: { opacity: 1, x: 0 }, // Animate to visible (onscreen)
  exit: { opacity: 0, x: -100 }, // Exit to left (offscreen left)
};

const imageVariants = {
  hidden: { opacity: 0.9, x: -50 }, // Start offscreen to the right
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }, // Animate into view
  exit: { opacity: 0, x: -50, transition: { duration: 1 } }, // Animate out to the left
};
const pricesVariants = {
  hidden: { opacity: 0, x: 25 }, // Start offscreen to the right
  visible: { opacity: 1, x: 0, transition: { delay: 0.2, duration: 0.9 } }, // Animate into view
  exit: { opacity: 0, x: 25, transition: { duration: 0.9 } }, // Animate out to the left
};

const MotoPark = () => {
  const { t } = useTranslation("motopark");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("Yamaha");
  const [showPrices, setShowPrices] = useState(false);
  const brandRef = useRef(null);
  const modelRef = useRef(null);
  const brandContainerRef = useRef(null);
  const modelContainerRef = useRef(null);
  const { i18n } = useTranslation();
  const [isMounted, setIsMounted] = useState(false);
  const currentLang = i18n.language as "en" | "ru";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
    exit: { opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };
  // useEffect(() => {
  //   setCurrentLang(i18n.language);
  // }, [i18n.language]);

  const brands = [...new Set(motoData.map((bike) => bike.brand))];
  const filteredModels = motoData.filter(
    (bike) => bike.brand === selectedBrand
  );
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const scrollToElement = (ref, containerRef, offset, direction) => {
    if (ref.current && containerRef.current) {
      const container = containerRef.current;
      const element = ref.current;

      let elementOffsetLeft;
      if (direction === "right") {
        elementOffsetLeft = element.offsetLeft - offset;
      } else if (direction === "left") {
        elementOffsetLeft =
          element.offsetLeft -
          (container.clientWidth - element.clientWidth) +
          offset;
      }
      container.scrollTo({
        left: elementOffsetLeft,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToElement(brandRef, brandContainerRef, 25, "right");
  }, [selectedBrand]);

  useEffect(() => {
    scrollToElement(modelRef, modelContainerRef, 24, "right");
  }, [currentIndex]);

  const nextBike = () => {
    if (currentIndex < filteredModels.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      const currentBrandIndex = brands.indexOf(selectedBrand);
      const nextBrandIndex = (currentBrandIndex + 1) % brands.length;
      const nextBrand = brands[nextBrandIndex];
      setSelectedBrand(nextBrand);
      setCurrentIndex(0);
      scrollToElement(brandRef, brandContainerRef, 25, "right");
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
        motoData.filter((bike) => bike.brand === prevBrand).length - 1
      );
      scrollToElement(brandRef, brandContainerRef, 25, "left");
    }
  };

  const toggleView = () => {
    setShowPrices(!showPrices);
  };

  // Preload the next 5 images
  useEffect(() => {
    const preloadAllImages = () => {
      filteredModels.forEach((bike) => {
        const img = new window.Image();
        img.src = bike.image;
      });
    };

    preloadAllImages();
  }, [filteredModels]);

  const currentBike = filteredModels[currentIndex];
  const fadeInOut = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };

  const MotionModelBox = motion(Box);
  const MotionInfoBikeBox = motion(Box);
  return (
    <Box>
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
          {" "}
          <section id="catalog"></section>
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
            {t("title")}
          </Typography>
          {/* Brand Selection */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: { xs: "105%", md: "105%", lg: "auto" },
              overflowX: "auto",
              paddingBottom: 1,
              "&::-webkit-scrollbar": {
                height: "3px",
                background: theme.palette.grey[200],
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.grey[700],
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
            }}
            ref={brandContainerRef}
          >
            {brands.map((brand, index) => (
              <Box
                key={index}
                ref={brand === selectedBrand ? brandRef : null}
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
                    setShowPrices(false);
                  }}
                >
                  {brand}
                </Typography>
                <Box
                  sx={{
                    marginLeft: "-1px",
                    width: "11px",
                    height: "100%",
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
          {/* <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          > */}
          <AnimatePresence>
            <MotionModelBox
              // key={selectedBrand}
              // variants={containerVariants}
              // initial="hidden"
              // animate="visible"
              // exit="exit"
              mt={{ xs: 1.3, md: 2.2 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                width: { xs: "104%", md: "104%", lg: "auto" },
                height: "auto",
                paddingBottom: 1,
                overflowX: "auto",

                // Custom scrollbar styles for the models
                "&::-webkit-scrollbar": {
                  height: "3px", // Set the height of the scrollbar
                  background: theme.palette.grey[200],
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: theme.palette.grey[700],
                  // backgroundColor: theme.palette.text.primary
                  borderRadius: "10px",
                },
                "&::-webkit-scrollbar-track": {
                  backgroundColor: "transparent", // Color of the scroll track
                },
              }}
              ref={modelContainerRef}
            >
              {filteredModels.map((bike, index) => (
                <Box
                  key={index}
                  ref={index === currentIndex ? modelRef : null}
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
                    px={{ xs: 2, md: 4 }}
                    color={theme.palette.background.paper}
                    sx={{
                      cursor: "pointer",
                      textTransform: "uppercase",
                      fontStyle: "italic",
                      fontSize: "16px",
                      position: "relative",
                      minWidth: "80px",
                      maxWidth: "200px",
                      width: "auto",
                      textAlign: "center",
                      whiteSpace: "nowrap",
                      backgroundColor:
                        index === currentIndex
                          ? theme.palette.primary.main
                          : "#FF9393",
                    }}
                    onClick={() => {
                      setCurrentIndex(index);
                      setShowPrices(false);
                    }}
                  >
                    {bike.model}
                  </Typography>
                  <Box
                    sx={{
                      marginLeft: "-1px",
                      width: "11px",
                      height: "100%",
                      backgroundColor:
                        index === currentIndex
                          ? theme.palette.primary.main
                          : "#FF9393",
                      clipPath: "polygon(0 0, 100% 0, 45% 100%, 0% 100%)",
                    }}
                  ></Box>
                </Box>
              ))}
            </MotionModelBox>
          </AnimatePresence>
        </Container>
      </Box>

      <Box
        sx={{
          backgroundColor: {
            xs: theme.custom.pallete?.greycatalog,
            sm: theme.custom.pallete?.greycatalog,
          },
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
              backgroundColor: theme.custom.pallete?.greycatalog,
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
            <IconButton
              onClick={prevBike}
              className="nextButtonMobile"
              sx={{
                position: "absolute",
                top: "46%",
                left: "4px",
                transform: "translateY(-100%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                border: "2px solid",
                borderRadius: "50%",
                borderColor: theme.palette.primary.main,
                width: "60px",
                height: "58px",
                zIndex: 100,
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                },
              }}
            >
              <ArrowBackIosIcon
                sx={{
                  fontSize: 30,
                  marginLeft: "9px",
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
                flexDirection: { xs: "column", sm: "column", md: "row" },
                justifyContent: "space-between",
              }}
            >
              <Box
                className="bike_picture"
                sx={{
                  position: "relative",
                  top: "6px",
                  right: { md: "55px", lg: "120px" },
                  width: { md: "40%", lg: "50%" },
                  marginBottom: {
                    xs: "5px",
                    sm: "4px",
                    md: "5.5px",
                    xl: "5.5px",
                  },
                  display: "flex",
                  alignItems: "end",
                  order: { xs: 1, sm: 1, md: 0 },
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    "@media (min-width: 1920px)": {
                      width: "650px",
                      marginLeft: "140px",
                    },
                    "@media (max-width: 1920px)": {
                      width: "650px",
                      marginLeft: "140px",
                    },
                    "@media (max-width: 1280px)": {
                      width: "570px",
                      marginLeft: "140px",
                    },
                    "@media (max-width: 1190px)": {
                      width: "650px",
                      marginLeft: "-115px",
                    },
                    "@media (max-width: 960px)": {
                      display: showPrices ? "none" : "block",
                      marginLeft: "0px",
                      width: "540px",
                    },
                    "@media (max-width: 600px)": {
                      width: "520px",
                      marginLeft: "-270px",
                    },
                    height: "auto",
                  }}
                >
                  <motion.div
                    key={currentBike.model} // This ensures the animation triggers on bike change
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={imageVariants}
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
                  </motion.div>
                </Box>
              </Box>
              <MotionInfoBikeBox
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="info_container"
                sx={{
                  height: {
                    xs: "400px",
                    sm: "432px",
                    md: "532px",
                    lg: "580px",
                  },
                  width: { sm: "100%", md: "50%", lg: "50%" },
                  minHeight: "auto",
                  display: "flex",
                  justifyContent: "end",
                  order: { xs: 0, md: 1, sm: 0 },
                }}
              >
                {showPrices ? (
                  <motion.div
                    key={currentBike.model} // This ensures the animation triggers on bike change
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={pricesVariants}
                  >
                    <PriceList
                      priceList={currentBike.priceList}
                      currentLang={currentLang}
                    />
                  </motion.div>
                ) : (
                  <MotoChars
                    features={currentBike.features}
                    charData={{
                      maxSpeed: currentBike.maxSpeed,
                      weight: currentBike.weight,
                      engine: currentBike.engine,
                    }}
                    currentLang={currentLang}
                    t={t}
                    isMounted={isMounted}
                  />
                )}
              </MotionInfoBikeBox>
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
                  right: { xs: 0, sm: 0, md: "7px", lg: "7px" },
                  bottom: {
                    xs: "117px",
                    sm: "101px",
                    md: "150px",
                    lg: "190px",
                  },
                }}
              >
                {showPrices ? (
                  <ShowMore
                    direction="backward"
                    label={t("back")}
                    onClick={toggleView}
                  />
                ) : (
                  <ShowMore
                    direction="forward"
                    label={t("more")}
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
                  width: { xs: "93.5%", md: "63.5%", lg: "70%" },
                  height: {
                    xs: "93px",
                    sm: "78px",
                    md: "95px",
                  },
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    marginRight: "-32px",
                    width: "50px",
                    height: "100.9%",
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
                    width: {
                      xs: "116%",
                      sm: "105%",
                      md: "71%",
                      lg: "76%",
                    },
                    paddingLeft: {
                      xs: "99px",
                      sm: "99px",
                      md: "99px",
                      lg: "110px",
                    },
                    zIndex: 10,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: {
                        xs: "column",
                        sm: "row",
                      },
                      gap: {
                        xs: 0.6,
                        sm: 0,
                      },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: {
                          xs: 27,
                          sm: 30,
                          md: 34,
                          lg: 46,
                        },
                        fontWeight: 800,
                        fontStyle: "italic",
                      }}
                    >
                      <span
                        style={{
                          textTransform: "uppercase",
                          color: theme.palette.background.paper,
                        }}
                      >
                        {currentBike.brand}
                      </span>
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: {
                          xs: 24,
                          sm: 30,
                          md: 34,
                          lg: 46,
                        },
                        fontWeight: 800,
                        fontStyle: "italic",
                        marginLeft: { xs: "0px", sm: "15px" },
                      }}
                    >
                      <span
                        style={{
                          color: theme.palette.primary.main,
                          textTransform: "uppercase",
                        }}
                      >
                        {currentBike.model}
                      </span>
                    </Typography>
                  </Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { sm: 30, md: 34, lg: 46 },
                      fontWeight: 800,
                      fontStyle: "italic",
                      paddingRight: 10,
                      color: theme.palette.background.paper,
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
                    backgroundColor: theme.custom.pallete?.background?.dark,
                    clipPath: "polygon(0 -1%, 100% 0, 45% 100%, 0% 100%)",
                  }}
                ></Box>
              </Box>
              <Box
                className="nav_container"
                sx={{
                  display: { xs: "none", md: "block" },
                }}
              >
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
                top: "46%",
                right: "4px",
                transform: "translateY(-100%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                border: "2px solid",
                borderRadius: "50%",
                borderColor: theme.palette.primary.main,
                width: "60px",
                height: "58px",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
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
