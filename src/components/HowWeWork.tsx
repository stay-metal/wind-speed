"use client";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import WorkIcon from "@mui/icons-material/Work";

const HowWeWork = () => {
  const steps = [
    {
      title: "Booking",
      description: "Book through our website or by phone.",
      icon: <WorkIcon />,
    },
    {
      title: "Tech Checkup",
      description: "We ensure all motorcycles are in top condition.",
      icon: <WorkIcon />,
    },
    {
      title: "Delivery",
      description: "We deliver the motorcycle to your location.",
      icon: <WorkIcon />,
    },
    {
      title: "Return",
      description: "Return the motorcycle at your convenience.",
      icon: <WorkIcon />,
    },
  ];

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 4 }, bgcolor: "background.paper" }}>
      <Typography variant="h4" component="h2" gutterBottom>
        How We Work
      </Typography>
      <Grid container spacing={3}>
        {steps.map((step, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            key={index}
            component={motion.div}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card sx={{ textAlign: "center", padding: 2 }}>
              <CardContent>
                {step.icon}
                <Typography variant="h6" component="h3">
                  {step.title}
                </Typography>
                <Typography variant="body2">{step.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HowWeWork;
