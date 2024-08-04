"use client";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";

type Motorcycle = {
  id: string;
  name: string;
  price: number;
  features: string[];
  image: string;
};

const motorcycles: Motorcycle[] = [
  {
    id: "1",
    name: "Yamaha FZ",
    price: 3000,
    features: ["ABS", "Tires Dunlop", "Exhaust Akrapovic"],
    image: "/images/yamaha-fz.png",
  },
  {
    id: "2",
    name: "Yamaha FZ",
    price: 3000,
    features: ["ABS", "Tires Dunlop", "Exhaust Akrapovic"],
    image: "/images/yamaha-fz.png",
  },
  // Add more motorcycles here
];

const MotoPark = () => {
  const [selectedCategory, setSelectedCategory] = useState("Sportbike");

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" component="h2" gutterBottom>
        MOTOPARK
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 4, flexWrap: "wrap" }}>
        {["Urban", "Enduro", "ATV", "Sportbike"].map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "contained" : "outlined"}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </Button>
        ))}
      </Box>
      <Grid container spacing={3}>
        {motorcycles.map((moto, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={moto.id}
            component={motion.div}
            initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box
                component="img"
                src={moto.image}
                alt={moto.name}
                sx={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 200,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  {moto.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  ฿ {moto.price}
                </Typography>
                <Box>
                  {moto.features.map((feature, index) => (
                    <Typography variant="body2" key={index}>
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MotoPark;
