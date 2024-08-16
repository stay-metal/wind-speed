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

const motorcycles = [
  {
    brand: "Yamaha",
    model: "FZ 8",
    image: "/images/dummy_moto.webp",
    maxSpeed: "296 км/ч",
    weight: "226 кг",
    engine: "998 см3",
    features: {
      abs: true,
      tires: "Dunlop",
      exhaust: "Akrapovic",
    },
    price: "3000",
    priceList: ["฿ 3000", "฿ 3200", "฿ 3500"], // Example price list
  },
  {
    brand: "Yamaha",
    model: "FZ 9",
    image: "/images/dummy_moto.webp",
    maxSpeed: "290 км/ч",
    weight: "220 кг",
    engine: "889 см3",
    features: {
      abs: true,
      tires: "Michelin",
      exhaust: "Akrapovic",
    },
    price: "3200",
    priceList: ["฿ 3000", "฿ 3200", "฿ 3500"], // Example price list
  },
  {
    brand: "Yamaha",
    model: "TSX",
    image: "/images/dummy_moto.webp",
    maxSpeed: "310 км/ч",
    weight: "210 кг",
    engine: "998 см3",
    features: {
      abs: true,
      tires: "Pirelli",
      exhaust: "Termignoni",
    },
    price: "3500",
    priceList: ["฿ 3000", "฿ 3200", "฿ 3500"], // Example price list
  },
  {
    brand: "Kawasaki",
    model: "ZX-10R",
    image: "/images/dummy_moto.webp",
    maxSpeed: "299 км/ч",
    weight: "207 кг",
    engine: "998 см3",
    features: {
      abs: true,
      tires: "Bridgestone",
      exhaust: "Yoshimura",
    },
    price: "4000",
    priceList: ["฿ 3000", "฿ 3200", "฿ 3500"], // Example price list
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
        <Container>
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
              <Typography
                key={index}
                variant="h6"
                color={brand === selectedBrand ? "primary" : "textSecondary"}
                style={{ cursor: "pointer", marginRight: "15px" }}
                onClick={() => {
                  setSelectedBrand(brand);
                  setCurrentIndex(0);
                  setShowPrices(false); // Reset to characteristics view when brand is changed
                }}
              >
                {brand}
              </Typography>
            ))}
          </Box>

          {/* Model Selection */}
          <Box
            mt={2}
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            {filteredModels.map((bike, index) => (
              <Typography
                key={index}
                variant="body1"
                color={index === currentIndex ? "primary" : "textSecondary"}
                style={{ cursor: "pointer", marginRight: "15px" }}
                onClick={() => {
                  setCurrentIndex(index);
                  setShowPrices(false); // Reset to characteristics view when model is changed
                }}
              >
                {bike.model}
              </Typography>
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
            height: "100%",
            maxHeight: "630px",
            width: "100%",
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            sx={{
              width: "45%",
              backgroundColor: {
                xs: theme.custom.pallete?.greycatalog,
                sm: theme.custom.pallete?.greycatalog,
              },
            }}
          ></Box>
          <Box
            sx={{
              width: "200px",
              backgroundColor: theme.custom.pallete?.greycatalog,
              backgroundImage: "url('/images/slider_background.svg')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right",
              backgroundSize: "cover",
            }}
          ></Box>
          <Box
            sx={{
              width: "45%",
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
              }}
            >
              <Box className="bike_picture">
                <img
                  src={currentBike.image}
                  alt={currentBike.model}
                  width="800"
                />
              </Box>
              <Box className="info_container">
                {showPrices ? (
                  <Box>
                    <Typography variant="h4" gutterBottom>
                      Цены:
                    </Typography>
                    {currentBike.priceList.map((price, index) => (
                      <Typography key={index} variant="body1">
                        {price}
                      </Typography>
                    ))}
                  </Box>
                ) : (
                  <Box>
                    <Typography variant="body1">
                      Макс. скорость: {currentBike.maxSpeed}
                    </Typography>
                    <Typography variant="body1">
                      Масса: {currentBike.weight}
                    </Typography>
                    <Typography variant="body1">
                      Двигатель: {currentBike.engine}
                    </Typography>
                    <Typography variant="body1">
                      Шины: {currentBike.features.tires}
                    </Typography>
                    <Typography variant="body1">
                      Выхлоп: {currentBike.features.exhaust}
                    </Typography>
                  </Box>
                )}
                <Box>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={toggleView}
                  >
                    {showPrices ? "Назад" : "Подробнее"}
                  </Button>
                </Box>
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
                    }}
                  >
                    <ArrowBackIosIcon
                      sx={{
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
        </Container>
      </Box>
    </Box>
  );
};

export default MotoPark;
