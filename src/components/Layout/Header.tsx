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
      contacts: { width: 190, left: 60 },
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
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Logo />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1,
            }}
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
                    right: "-52px",
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
                <AnimateMenuButton
                  text={t("menu.catalog")}
                  width={selectedSize.catalog.width}
                  left={selectedSize.catalog.left}
                />
                <AnimateMenuButton
                  text={t("menu.howWeWork")}
                  width={selectedSize.howWeWork.width}
                  left={selectedSize.howWeWork.left}
                  animate={{ x: 100 }}
                />
                <AnimateMenuButton
                  text={t("menu.benefits")}
                  width={selectedSize.benefits.width}
                  left={selectedSize.benefits.left}
                  animate={{ x: 100 }}
                />
                <AnimateMenuButton
                  text={t("menu.contacts")}
                  width={selectedSize.contacts.width}
                  left={selectedSize.contacts.left}
                  animate={{ x: 100 }}
                />
              </AnimateBox>
            )}
          </Box>
          <BurgerIcon isOpen={isMenuOpen} toggleOpen={handleBurgerClick} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
