"use client";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

const Advantages = () => {
  const advantages = [
    {
      title: "Expert Team",
      description: "Our team knows everything about motorcycles.",
    },
    {
      title: "High-Quality Service",
      description: "We provide the best service to our customers.",
    },
  ];

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 } }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Our Advantages
      </Typography>
      <Grid container spacing={3}>
        {advantages.map((advantage, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            key={index}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.3, duration: 0.5 }}
          >
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <CardContent>
                <Typography variant="h6" component="h3">
                  {advantage.title}
                </Typography>
                <Typography variant="body2">{advantage.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Advantages;
