import {
  Box,
  Typography,
  Link,
  Grid,
  IconButton,
  Container,
} from "@mui/material";
import {
  FacebookOutlined,
  Telegram,
  Instagram,
  WhatsApp,
} from "@mui/icons-material";
import Logo from "../Navigation/Logo";

const Footer = () => {
  return (
    <Box
      sx={{
        background: {
          xs: "linear-gradient(-98deg, #1F1F1F 62.1%, rgba(255, 53, 24, 1) 62.4%)",
          sm: "linear-gradient(-104deg, #1F1F1F 52.45%, rgba(255, 53, 24, 1) 52.50%)",
        },
        color: "white",
        textAlign: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: { xs: 3, sm: 3, md: 4, lg: 6 },
          pb: { xs: 3, sm: 3, md: 3, lg: 6 },
          pt: { xs: 4, sm: 5, md: 5, lg: 6 },
        }}
      >
        <Box>
          <Logo footer />
        </Box>
        <Box>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{
              fontSize: { xs: 12, sm: 15, md: 16, lg: 18 },
              mr: { xs: 3, sm: 6, md: 8, lg: 10 },
            }}
          >
            Каталог
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{
              fontSize: { xs: 12, sm: 15, md: 16, lg: 18 },
              mr: { xs: 3, sm: 6, md: 8, lg: 10 },
            }}
          >
            Преимущества
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{
              fontSize: { xs: 12, sm: 15, md: 16, lg: 18 },
              mr: { xs: 3, sm: 6, md: 8, lg: 10 },
            }}
          >
            Как мы работаем
          </Link>
          <Link
            href="#"
            color="inherit"
            underline="none"
            sx={{ fontSize: { xs: 12, sm: 15, md: 16, lg: 18 } }}
          >
            Контакты
          </Link>
        </Box>
        <Box>
          <IconButton
            href="#"
            color="inherit"
            sx={{
              mr: { xs: 2, sm: 2, md: 2, lg: 4 },
              fontSize: { md: "28px", lg: "30px" },
              "& .MuiSvgIcon-root": {
                fontSize: "inherit",
              },
            }}
          >
            <FacebookOutlined />
          </IconButton>
          <IconButton
            href="#"
            color="inherit"
            sx={{
              mr: { xs: 2, sm: 2, md: 2, lg: 4 },
              fontSize: { md: "28px", lg: "30px" },
              "& .MuiSvgIcon-root": {
                fontSize: "inherit",
              },
            }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            href="#"
            color="inherit"
            sx={{
              mr: { xs: 2, sm: 2, md: 2, lg: 4 },
              fontSize: { md: "28px", lg: "30px" },
              "& .MuiSvgIcon-root": {
                fontSize: "inherit",
              },
            }}
          >
            <Telegram />
          </IconButton>
          <IconButton
            href="#"
            color="inherit"
            sx={{
              // mr: { sm: 2, md: 2, lg: 4 },
              fontSize: { md: "28px", lg: "30px" },
              "& .MuiSvgIcon-root": {
                fontSize: "inherit",
              },
            }}
          >
            <WhatsApp />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            // width: "395px",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "center", sm: "start" },
            justifyContent: "space-between",
            gap: { xs: 1, sm: 0 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              justifyContent: { xs: "space-between", sm: "start" },
              alignItems: { xs: "start", sm: "start" },
              gap: 1,
              width: { sx: "100%", sm: "50%" },
              order: { xs: 1, sm: 0 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                textAlign: "start",
                fontSize: { xs: 12, sm: 12, md: 14, lg: 16 },
                fontWeight: "200",
                width: { xs: "80%", sm: "50%" },
              }}
            >
              Таиланд, Пхукет
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: { xs: "end", sm: "start" },
                fontSize: { xs: 11, sm: 12, md: 14, lg: 16 },
                fontWeight: "200",
                width: { xs: "100%", sm: "100%" },
              }}
            >
              ул. 88/14 Khrongkan Ban Rawai-Ban Nai Han Rd.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              justifyContent: { xs: "space-between", sm: "start" },
              alignItems: { xs: "center", sm: "staendrt" },
              gap: 1,
              width: { xs: "100%", sm: "50%" },
              order: { xs: 0, sm: 1 },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                textAlign: { xs: "start", sm: "end" },
                fontSize: { xs: 13, sm: 14, md: 16, lg: 18 },
                width: { xs: "50%", sm: "100%" },
                fontWeight: "200",
              }}
            >
              +6 66 470146 47
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "end",
                fontSize: { xs: 11, sm: 12, md: 14, lg: 16 },
                width: { xs: "50%", sm: "100%" },
                fontWeight: "200",
              }}
            >
              windspeedbike@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box sx={{ pt: { xs: 1, sm: 2 } }}>
          {/* <Typography variant="body2">Политика конфиденциальности</Typography> */}
          <Typography
            variant="body2"
            sx={{
              fontSize: { xs: 11, sm: 12, md: 14, lg: 16 },
            }}
          >
            © {new Date().getFullYear()} WindSpeed. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
