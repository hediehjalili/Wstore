"use client";

import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  IconButton,
  Typography,
  Stack,
  Box,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image from "next/image";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => setDrawerOpen(open);

  const drawerContent = (
    <Box sx={{ width: 250, p: 2 }}>
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Image src="/logo.svg" alt="لوگو" width={100} height={40} priority />
        <Typography variant="h6" sx={{ color: "#606C38", fontFamily: "Vazir", fontWeight: "bold" }}>
          فروشگاه وین
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 2,
          border: "1px solid #e0e0e0",
          mb: 2,
          p: 1,
        }}
      >
        <InputBase
          placeholder="جستجوی محصولات..."
          sx={{ flex: 1, px: 1, fontSize: "0.9rem", fontFamily: "Vazir" }}
        />
        <IconButton sx={{ color: "#606C38" }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* User Icons */}
      <List>
        {[
          { icon: <AccountCircleIcon />, text: "پروفایل" },
          { icon: <FavoriteBorderIcon />, text: "علاقه‌مندی‌ها" },
          { icon: <ShoppingCartIcon />, text: "سبد خرید" },
        ].map(({ icon, text }, index) => (
          <React.Fragment key={index}>
            <ListItem component="button">
              <ListItemIcon sx={{ color: "#606C38" }}>{icon}</ListItemIcon>
              <ListItemText
                primary={text}
                primaryTypographyProps={{ fontFamily: "Vazir", fontSize: "0.95rem" }}
              />
            </ListItem>
            {index < 2 && <Divider />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "none" }}>
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
            gap: { xs: 1, sm: 4 },
          }}
        >
          {/* Hamburger Menu */}
          <IconButton
            sx={{ display: { xs: "block", sm: "none" }, color: "#606C38" }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexGrow: { xs: 1, sm: 0 } }}>
            <Image src="/logo.svg" alt="لوگو" width={100} height={40} priority />
            <Typography
              variant="h6"
              sx={{
                color: "#606C38",
                fontFamily: "Vazir",
                fontWeight: "bold",
                fontSize: { xs: "0.9rem", sm: "1.25rem" },
              }}
            >
              فروشگاه وین
            </Typography>
          </Box>

          {/* Search Bar */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 2,
              border: "1px solid #e0e0e0",
              flexGrow: 1,
              maxWidth: "500px",
              flexDirection: "row-reverse",
            }}
          >
            <InputBase
              placeholder="جستجوی محصولات..."
              sx={{ flex: 1, px: 2, py: 1, fontSize: "0.9rem", fontFamily: "Vazir" }}
            />
            <IconButton sx={{ color: "#606C38", p: 1 }}>
              <SearchIcon />
            </IconButton>
          </Box>

          {/* User Icons */}
          <Stack
            direction="row"
            spacing={2}
            sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "flex-end" }}
          >
            <IconButton sx={{ color: "#606C38" }} href="/auth/login">
              <AccountCircleIcon />
            </IconButton>
            <IconButton sx={{ color: "#606C38" }}>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton sx={{ color: "#606C38" }}>
              <ShoppingCartIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </AppBar>
  );
};

export default Header;