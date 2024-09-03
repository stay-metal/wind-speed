"use client";
import { useState, useRef, useEffect } from "react";
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
import { motoData } from "@/data/motopark";
import { useTranslation } from "next-i18next";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  display: "swap",
});

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
  // const [currentLang, setCurrentLang] = useState(i18n.language);
  const currentLang = i18n.language as "en" | "ru";

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const currentBike = filteredModels[currentIndex];

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
              width: { xs: "110%", md: "auto" },
              overflowX: "auto",
              paddingBottom: 1,
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
          <Box
            mt={{ xs: 1.3, md: 2.2 }}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: { xs: "110%", md: "auto" },
              paddingBottom: 1,
              overflowX: "auto",
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
                    width: "100%",
                    textAlign: "center",
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
          </Box>
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
                top: "50%",
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
                  backgroundColor: theme.palette.grey[400],
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
                      marginLeft: "-115px",
                    },
                    "@media (max-width: 960px)": {
                      display: showPrices ? "none" : "block",
                      marginLeft: "0px",
                      width: "540px",
                    },
                    "@media (max-width: 600px)": {
                      width: "540px",
                      marginLeft: "-280px",
                    },
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
                  <Box
                    sx={{
                      float: "right",
                      width: { xs: "261px", sm: "461px", md: "491px" },
                      marginRight: "0",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "start", md: "end" },
                      marginLeft: { xs: 0, sm: 0, md: 0 },
                      gap: { xs: 1.7, md: 3 },
                    }}
                  >
                    {currentBike.priceList.map((price, index) => (
                      <Box
                        key={index}
                        className={`itemPrice-${index}`}
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          marginLeft: {
                            xs: -index * 18.5 + "px",
                            sm: -20 - index * 14.5 + "px",
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
                            width: {
                              xs: 450 + index * 18.5 + "px",
                              sm: 710 + index * 13.5 + "px",
                              md: 350 + index * 23.5 + "px",
                              lg: 450 + index * 23.5 + "px",
                            },
                            py: { xs: 1.02, sm: 1.2, md: 1.2, lg: 1.5 },
                            paddingLeft: { xs: 2, sm: 4, md: 2 },
                            paddingRight: { xs: 31.3, sm: 39.3, md: 3 },
                            backgroundColor:
                              theme.custom.pallete?.background?.dark,
                          }}
                        >
                          <Typography
                            variant="body1"
                            className={roboto.className}
                            sx={{
                              fontSize: { xs: 19, sm: 21 },
                              fontStyle: "italic",
                            }}
                          >
                            {price.duration[currentLang]}
                          </Typography>
                          <Typography
                            variant="body1"
                            className={roboto.className}
                            sx={{
                              fontSize: { xs: 19, sm: 21 },
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
                      pt: { sm: 2, md: 8 },
                      pb: 21,
                      display: "flex",
                      flexDirection: { xs: "column", sm: "column", md: "row" },
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                      gap: { xs: 2, sm: 2, md: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        order: { xs: 1, sm: 1, md: 0 },
                        display: { xs: "none", md: "flex" },
                        flexDirection: { sm: "row", md: "column" },
                        width: "80%",
                        marginTop: { md: "-10px", lg: "-14px" },
                        gap: { xs: 3, md: 3, lg: 4 },
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
                        {isMounted
                          ? currentBike.features.type[currentLang]
                          : ""}
                      </Typography>
                      {currentBike.features.abs && (
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
                          ABS
                        </Typography>
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
                        {t("tires")}{" "}
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
                        {t("exhaust")}{" "}
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
                        flexDirection: { xs: "row", sm: "row", md: "column" },
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        gap: { xs: 2, sm: 6, md: 4, lg: 5 },
                        width: { xs: "100%", sm: "auto", md: "20%", lg: "20%" },
                      }}
                    >
                      <MotoCharDisplay
                        charValue={currentBike.maxSpeed}
                        charMetrica={t("speed.metric")}
                        charDescription={t("speed.title")}
                      />

                      <MotoCharDisplay
                        charValue={currentBike.weight}
                        charMetrica={t("weight.metric")}
                        charDescription={t("weight.title")}
                      />
                      <MotoCharDisplay
                        charValue={currentBike.engine}
                        charMetrica={t("engine.metric")}
                        charDescription={t("engine.title")}
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
                      lg: "170px",
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
                          md: 36,
                          lg: 46,
                        },
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
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: {
                          xs: 27,
                          sm: 30,
                          md: 36,
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
                top: "50%",
                right: "4px",
                transform: "translateY(-100%)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
                border: "2px solid",
                borderRadius: "50%",
                borderColor: theme.palette.primary.main,
                width: "60px",
                height: "58px",
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
