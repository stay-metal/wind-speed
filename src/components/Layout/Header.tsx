"use client";
import React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Box, Container } from "@mui/material";
import Logo from "../Navigation/Logo";
import LanguageSwitcher from "../LanguageSwitcher";
import { useTranslation } from "next-i18next";
import BurgerIcon from "../Navigation/BurgerIcon";
import MenuButton from "../MenuButton";
import { motion } from "framer-motion";
import theme from "@/theme/theme";
import useMediaQuery from "@mui/material/useMediaQuery";

const AnimateMenuButton = motion(MenuButton);
const AnimateBox = motion(Box);

const list = { hidden: { x: -10, opacity: 0 } };

const logoMotion = {
  initial: { opacity: 0, y: -5, x: -5 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: theme?.custom?.animation?.duration?.medium,
      ease: theme?.custom?.animation?.easing?.easeIn,
      delay: 0.2,
    },
  },
};

const langMotion = {
  initial: { opacity: 0 },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: theme?.custom?.animation?.duration?.medium,
      ease: theme?.custom?.animation?.easing?.easeIn,
      delay: 0.3,
    },
  },
};

const burgerMotion = {
  initial: { opacity: 0 },
  x: 0,
  y: 0,
  animate: {
    opacity: 1,
    transition: {
      duration: theme?.custom?.animation?.duration?.medium,
      ease: theme?.custom?.animation?.easing?.easeIn,
      delay: 0.8,
    },
  },
};

const Header = () => {
  const { t } = useTranslation("common");
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Toggle menu state
  const handleBurgerClick = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const isXl = useMediaQuery(theme.breakpoints.up("xl"));
  const isLg = useMediaQuery(theme.breakpoints.only("lg"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));

  // Define menu item dimensions
  const menuItemsSize = {
    xl: {
      catalog: { width: 134, left: -9 },
      howWeWork: { width: 224, left: -6 },
      benefits: { width: 256, left: -3 },
      contacts: { width: 134 },
    },
    lg: {
      catalog: { width: 134, left: -9 },
      howWeWork: { width: 224, left: -6 },
      benefits: { width: 256, left: -3 },
      contacts: { width: 134 },
    },
    md: {
      catalog: { width: 100, left: -9 },
      howWeWork: { width: 160, left: -6 },
      benefits: { width: 190, left: -3 },
      contacts: { width: 100 },
    },
    sm: {
      catalog: { width: 160, left: 90 },
      howWeWork: { width: 230, left: 20 },
      benefits: { width: 250, left: 0 },
      contacts: { width: 170, left: 70 },
    },
  };

  const selectedSize = isXl
    ? menuItemsSize.xl
    : isLg
    ? menuItemsSize.lg
    : isMd
    ? menuItemsSize.md
    : menuItemsSize.sm;

  return (
    <AppBar position="absolute">
      <Container>
        <Toolbar disableGutters>
          <Box
            sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
            component={motion.div}
            initial="initial"
            animate="animate"
            variants={logoMotion}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
            }}
            component={motion.div}
            initial="initial"
            animate="animate"
            variants={langMotion}
          >
            <Box
              sx={{
                position: "relative",
                marginRight: "20px",
                [theme.breakpoints.down("lg")]: {
                  marginRight: "0px",
                },
                [theme.breakpoints.down("sm")]: {
                  // fontSize: "24px",
                },
              }}
            >
              <LanguageSwitcher />
            </Box>
            {isMenuOpen && (
              <AnimateBox
                sx={{
                  paddingRight: "30px",
                  paddingLeft: "30px",
                  overflow: "hidden",
                  [theme.breakpoints.down("lg")]: {
                    paddingRight: "5px",
                    paddingLeft: "15px",
                  },
                  [theme.breakpoints.down("md")]: {
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    top: "90px",
                    right: "-33px",
                    maxWidth: "250px",
                    overflow: "hidden",
                    gap: 2,
                  },
                  [theme.breakpoints.down("sm")]: {
                    top: "60px",
                  },
                }}
                animate="hidden"
                variants={list}
                transition={{
                  duration: theme.custom.animation?.duration?.fast,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                <Box
                  sx={{
                    order: { xs: 0, md: 0 },
                  }}
                >
                  <AnimateMenuButton
                    text={t("menu.catalog")}
                    width={selectedSize.catalog.width}
                    left={selectedSize.catalog.left}
                  />
                </Box>
                <Box
                  sx={{
                    order: { xs: 2, md: 1 },
                  }}
                >
                  <AnimateMenuButton
                    text={t("menu.howWeWork")}
                    width={selectedSize.howWeWork.width}
                    left={selectedSize.howWeWork.left}
                    animate={{ x: 100 }}
                  />
                </Box>
                <Box
                  sx={{
                    order: { xs: 3, md: 2 },
                  }}
                >
                  <AnimateMenuButton
                    text={t("menu.benefits")}
                    width={selectedSize.benefits.width}
                    left={selectedSize.benefits.left}
                    animate={{ x: 100 }}
                  />
                </Box>
                <Box
                  sx={{
                    order: { xs: 1, md: 3 },
                  }}
                >
                  <AnimateMenuButton
                    text={t("menu.contacts")}
                    width={selectedSize.contacts.width}
                    left={selectedSize.contacts.left}
                    animate={{ x: 100 }}
                  />
                </Box>
              </AnimateBox>
            )}
          </Box>
          <Box
            component={motion.div}
            initial="initial"
            animate="animate"
            variants={langMotion}
          >
            <BurgerIcon isOpen={isMenuOpen} toggleOpen={handleBurgerClick} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
