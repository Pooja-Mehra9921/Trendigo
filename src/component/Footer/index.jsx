import React from "react";

// import components from material ui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import RedeemIcon from "@mui/icons-material/Redeem";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

// import styles
import "./style.css";

const Footer = () => {
  return (
    <>
      <Box className="Footer-main-container">
        <Box className="footer-container">
          <Typography variant="body1" className="menus">
            <StorefrontIcon />
            Become a Seller
          </Typography>
          <Typography variant="body1" className="menus">
            <AutoGraphIcon />
            Advertise
          </Typography>
          <Typography variant="body1" className="menus">
            <RedeemIcon /> Gift Cards
          </Typography>
          <Typography variant="body1" className="menus">
            <HelpOutlineIcon />
            Help Center
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
