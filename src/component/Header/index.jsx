import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// MUI Components
import {
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
  Fade,
  ListItemIcon,
} from "@mui/material";

// MUI Icons
import {
  Logout,
  Favorite as FavoriteIcon,
  Search as SearchIcon,
  Countertops as CountertopsIcon,
  ShoppingCart as ShoppingCartIcon,
  PhoneAndroid as PhoneAndroidIcon,
  LibraryBooks as LibraryBooksIcon,
  LaptopChromebook as LaptopChromebookIcon,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

// Assets & Helpers
import MAIN_LOGO from "../../assents/logos/main-logo.png";
import { getAvtarName } from "../../helper";

// Styles
import "./style.css";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.app.cartItems);
  const wishListItems = useSelector((store) => store.app.wishListItems);
  const userData = JSON.parse(localStorage.getItem("userdata")) || {};

  const [anchorEl, setAnchorEl] = useState(null);
  const [quickSearchAnchor, setQuickSearchAnchor] = useState(null);
  const [menusAnchor, setMenusAnchor] = useState(null);
  const [search, setSearch] = useState("");

  const isOpen = Boolean(anchorEl);
  const isQuickSearchOpen = Boolean(quickSearchAnchor);
  const isUserLoggedIn = Boolean(userData?.refreshToken);
  const isMenuOpen = Boolean(menusAnchor);

  /**
   * Redirect to pages
   */
  const handleRedirectPages = (type) =>
    navigate(`/${type}${type === "product" ? "/all" : ""}`);

  /**
   * Profile Menu Handlers
   */
  const handleProfileClick = (event) => setAnchorEl(event.currentTarget);
  const handleCloseProfileMenu = () => setAnchorEl(null);
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  /**
   * Quick Search Handlers
   */
  const handleQuickSearch = (event) =>
    setQuickSearchAnchor(event.currentTarget);
  const handleCloseQuickSearch = () => setQuickSearchAnchor(null);
  const handleMenuQuick = (categoryType) => () =>
    navigate(`/product/${categoryType}`);

  /**
   * Search Handlers
   */
  const handleSearchInputChange = (event) => setSearch(event.target.value);
  const handleSearchSubmit = () => navigate(`/product/${search}`);

  /** handle menu click */
  const handleMenuClick = (event) => {
    console.log("menu click");
    setMenusAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenusAnchor(null);
  };

  const handleMenuRedirectToPage=(type)=>{
    console.log("page-----", type);
    window.location.href = `/${type}${type === "product" ? "/all" : ""}`;
    setMenusAnchor(null);


  }
  return (
    <Box className="header-main-container">
      <Box className="header-container">
        {/* Logo */}
        <Box
          className="trendigo-logo-container"
          onClick={() => handleRedirectPages("home")}
        >
          <img
            className="trendigo-image-style"
            src={MAIN_LOGO}
            alt="Trendigo Logo"
          />
          <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
            Trendigo
          </Typography>
          <Box className="menu-icon-container">
            <IconButton
              aria-label="more"
              id="long-button"
              aria-controls={isMenuOpen ? "long-menu" : undefined}
              aria-expanded={isMenuOpen ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleMenuClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={menusAnchor}
        open={isMenuOpen}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleMenuRedirectToPage("home")}>Home</MenuItem>
        <MenuItem onClick={() => handleMenuRedirectToPage("product")}>Product</MenuItem>
        <MenuItem onClick={() => handleMenuRedirectToPage("about")}>About</MenuItem>
      </Menu>
          </Box>
        </Box>

        {/* Navigation Menu */}
        <Box className="menu-container">
          {["home", "product", "about", "contact"].map((item) => (
            <Button
              className="menu-btn"
              key={item}
              variant="text"
              onClick={() => handleRedirectPages(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Button>
          ))}

          {/* Quick Search Dropdown */}
          <Button
            className="quick-search-button"
            sx={{ color: "white", width: "130px" }}
            onClick={handleQuickSearch}
          >
            Quick Search
          </Button>

          <Menu
            anchorEl={quickSearchAnchor}
            open={isQuickSearchOpen}
            onClose={handleCloseQuickSearch}
            TransitionComponent={Fade}
          >
            {[
              {
                label: "Laptop",
                icon: <LaptopChromebookIcon fontSize="small" />,
                type: "laptops",
              },
              {
                label: "Mobile",
                icon: <PhoneAndroidIcon fontSize="small" />,
                type: "smartphones",
              },
              {
                label: "Beauty",
                icon: <LibraryBooksIcon fontSize="small" />,
                type: "beauty",
              },
              {
                label: "Furniture",
                icon: <CountertopsIcon fontSize="small" />,
                type: "furniture",
              },
            ].map((item) => (
              <MenuItem key={item.type} onClick={handleMenuQuick(item.type)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Box>

        {/* Search Bar & Login */}
        <Box className="search-container">
          <Box className="search-bar">
            <TextField
              value={search}
              onChange={handleSearchInputChange}
              placeholder="Search for Products, Brands and More"
              variant="standard"
              InputProps={{ disableUnderline: true }}
              sx={{ width: "300px" }}
            />
            <IconButton onClick={handleSearchSubmit}>
              <SearchIcon />
            </IconButton>
          </Box>

          {!isUserLoggedIn && (
            <Button
              className="login-btn"
              variant="outlined"
              onClick={() => handleRedirectPages("login")}
            >
              Login
            </Button>
          )}
        </Box>

        {/* Wishlist & Cart */}
        {isUserLoggedIn && (
          <Box className="header-cart-item-container">
            <IconButton
              onClick={() => handleRedirectPages("wishlist")}
              color="inherit"
            >
              <Badge badgeContent={wishListItems.length} color="error">
                <FavoriteIcon sx={{ color: "white" }} />
              </Badge>
            </IconButton>
            <IconButton
              onClick={() => handleRedirectPages("cart")}
              color="inherit"
            >
              <Badge badgeContent={cartItems.length} color="error">
                <ShoppingCartIcon sx={{ color: "white" }} />
              </Badge>
            </IconButton>
          </Box>
        )}

        {/* User Profile */}
        {isUserLoggedIn && (
          <Box className="header-profile-container">
            <Box className="user-name">
              <Tooltip title={`${userData?.firstName || "User"}`} arrow>
                <IconButton onClick={handleProfileClick} size="small">
                  <Avatar src={userData?.image}>
                    {getAvtarName(userData?.firstName || "U")}
                  </Avatar>
                </IconButton>
              </Tooltip>
              <Typography style={{ cursor: "pointer" }}>
                Hii {userData?.firstName}
              </Typography>
            </Box>

            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleCloseProfileMenu}
            >
              <MenuItem onClick={handleCloseProfileMenu}>Profile</MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
            <Button className="logout-btn" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Header;
