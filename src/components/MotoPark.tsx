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

const motorcycles = [
  {
    brand: "Yamaha",
    model: "FZ 8",
    image: "/images/yamaha-fz8.png",
    maxSpeed: "296 км/ч",
    weight: "226 кг",
    engine: "998 см3",
    features: {
      abs: true,
      tires: "Dunlop",
      exhaust: "Akrapovic",
    },
    price: "3000",
  },
  {
    brand: "Yamaha",
    model: "FZ 9",
    image: "/images/yamaha-fz9.png",
    maxSpeed: "290 км/ч",
    weight: "220 кг",
    engine: "889 см3",
    features: {
      abs: true,
      tires: "Michelin",
      exhaust: "Akrapovic",
    },
    price: "3200",
  },
  {
    brand: "Yamaha",
    model: "TSX",
    image: "/images/yamaha-tsx.png",
    maxSpeed: "310 км/ч",
    weight: "210 кг",
    engine: "998 см3",
    features: {
      abs: true,
      tires: "Pirelli",
      exhaust: "Termignoni",
    },
    price: "3500",
  },
  {
    brand: "Kawasaki",
    model: "Ninja ZX-10R",
    image: "/images/kawasaki-zx10r.png",
    maxSpeed: "299 км/ч",
    weight: "207 кг",
    engine: "998 см3",
    features: {
      abs: true,
      tires: "Bridgestone",
      exhaust: "Yoshimura",
    },
    price: "4000",
  },
];

const MotoPark = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBrand, setSelectedBrand] = useState("Yamaha");

  const brands = [...new Set(motorcycles.map((bike) => bike.brand))];

  const filteredModels = motorcycles.filter(
    (bike) => bike.brand === selectedBrand
  );

  const nextBike = () => {
    if (currentIndex < filteredModels.length - 1) {
      // Move to the next model in the current brand
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else {
      // If it's the last model, switch to the first model of the next brand
      const currentBrandIndex = brands.indexOf(selectedBrand);
      const nextBrandIndex = (currentBrandIndex + 1) % brands.length;
      const nextBrand = brands[nextBrandIndex];
      setSelectedBrand(nextBrand);
      setCurrentIndex(0); // Reset to the first model of the next brand
    }
  };

  const prevBike = () => {
    if (currentIndex > 0) {
      // Move to the previous model in the current brand
      setCurrentIndex((prevIndex) => prevIndex - 1);
    } else {
      // If it's the first model, switch to the last model of the previous brand
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

  const currentBike = filteredModels[currentIndex];

  return (
    <Box>
      <Container>
        {/* Brand Selection */}
        <Box>
          {brands.map((brand, index) => (
            <Typography
              key={index}
              variant="h6"
              color={brand === selectedBrand ? "primary" : "textSecondary"}
              style={{ cursor: "pointer", marginRight: "15px" }}
              onClick={() => {
                setSelectedBrand(brand);
                setCurrentIndex(0); // Reset to the first model of the new brand
              }}
            >
              {brand}
            </Typography>
          ))}
        </Box>

        {/* Model Selection */}
        <Box mt={2}>
          {filteredModels.map((bike, index) => (
            <Typography
              key={index}
              variant="body1"
              color={index === currentIndex ? "primary" : "textSecondary"}
              style={{ cursor: "pointer", marginRight: "15px" }}
              onClick={() => setCurrentIndex(index)}
            >
              {bike.model}
            </Typography>
          ))}
        </Box>
      </Container>

      <Grid container spacing={2} direction="column" alignItems="center">
        {/* Motorcycle Image and Details */}
        <Grid item container justifyContent="center" alignItems="center">
          <Grid item>
            <IconButton onClick={prevBike}>
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <img src={currentBike.image} alt={currentBike.model} width="300" />
          </Grid>
          <Grid item>
            <IconButton onClick={nextBike}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>

        {/* Motorcycle Characteristics */}
        <Grid item>
          <Typography variant="h4" gutterBottom>
            {currentBike.model}
          </Typography>
          <Typography variant="body1">
            Макс. скорость: {currentBike.maxSpeed}
          </Typography>
          <Typography variant="body1">Масса: {currentBike.weight}</Typography>
          <Typography variant="body1">
            Двигатель: {currentBike.engine}
          </Typography>
          <Typography variant="body1">
            Шины: {currentBike.features.tires}
          </Typography>
          <Typography variant="body1">
            Выхлоп: {currentBike.features.exhaust}
          </Typography>
          <Typography variant="h5" color="secondary" gutterBottom>
            Цена: {currentBike.price} ₽
          </Typography>
        </Grid>

        {/* Navigation Buttons */}
        <Grid item>
          <Button variant="contained" color="primary" onClick={nextBike}>
            Подробнее
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MotoPark;
