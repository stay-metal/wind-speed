import React from "react";
import { useState } from "react";
import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";
import { Roboto } from "@next/font/google";
import theme from "@/theme/theme";
import Logo from "../Logo";
import LanguageSwitcher from "../LanguageSwitcher";
import BurgerIcon from "../BurgerIcon";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700"],
  style: ["italic", "normal"],
  display: "swap",
});

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleBurgerClick() {
    console.log("Burger Clicked");
    setMenuOpen((prevState) => !prevState); // Use callback to avoid stale state issues
  }

  const menuItemsSize = {
    xl: {
      catalog: {
        width: 134,
        left: -38.5,
      },
      howWeWork: {
        width: 224,
        left: -51,
      },
      benefits: {
        width: 256,
        left: -3,
      },
      contacts: {
        width: 134,
      },
    },
  };
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
              gap: 1,
            }}
          >
            <Box
              sx={{ position: "relative", top: "-2px", marginRight: "20px" }}
            >
              <LanguageSwitcher />
            </Box>
            {isMenuOpen && (
              <>
                <MenuButton
                  text="Каталог"
                  width={menuItemsSize.xl.catalog.width}
                  left={menuItemsSize.xl.catalog.left}
                />
                <MenuButton
                  text="Как мы работаем?"
                  width={menuItemsSize.xl.howWeWork.width}
                  left={menuItemsSize.xl.howWeWork.left}
                />
                <MenuButton
                  text="Наши приемущества"
                  width={menuItemsSize.xl.benefits.width}
                  left={menuItemsSize.xl.benefits.left}
                />
                <MenuButton
                  text="Контакты"
                  width={menuItemsSize.xl.contacts.width}
                />
              </>
            )}
          </Box>
          <BurgerIcon isOpen={isMenuOpen} toggleOpen={handleBurgerClick} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

const MenuButton = ({
  text,
  width,
  left,
}: {
  text: string;
  width?: number;
  left?: number;
}) => {
  return (
    <Button
      disableRipple
      disableFocusRipple
      disableTouchRipple
      className={roboto.className}
      color="inherit"
      sx={{
        width: width,
        maxWidth: "500px",
        textTransform: "uppercase",
        flex: 1,
        fontWeight: 600,
        fontStyle: "italic",
        height: "41px",
        left: left ? left + "px" : "0px",
        position: "relative",
        opacity: 1,
        overflow: "visible", // Allow the ::before element to be visible
        "&:hover": {
          color: theme.palette.primary.main,
          background: "transparent",
        },
        "&::before": {
          opacity: 1,
          content: '""',
          position: "absolute",
          bottom: "1px", // Move down slightly to make it visible outside
          width: width ? width + "px" : "100%",
          height: "41px", // Height of the parallelogram
          backgroundColor: theme.palette.primary.main,
          transform: "skewX(-9deg)", // Skew the element
          transition: "background-color 0.3s, transform 0.3s",
          zIndex: -1, // Ensure it appears above other elements
        },
        "&:hover::before": {
          opacity: 1,
          backgroundColor: theme.palette.background.paper, // Change color on hover
        },
      }}
    >
      {text}
    </Button>
  );
};

export default Header;
