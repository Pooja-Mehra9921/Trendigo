import { Box, Button, Typography } from "@mui/material";
import React from "react";
import EMPTY_IMAGE from "../../assents/images/emptyimage.png";
import "./style.css";
import { useNavigate } from "react-router-dom";

 const EmptyWishlist = (props) => {
  const navigate = useNavigate();

  const handlecontinueShoping = () => {
    navigate("/home");
  };
  return (
    <>
      <Typography variant="h4" style={{ textAlign: "center", margin:"20px auto"}}>
        <strong>YOUR {props?.title} IS EMPTY</strong>
      </Typography>
      <Typography variant="body1" style={{ textAlign: "center" }}>
        Add items that you like to your wishlist. <br/>Review them anytime and easily
        move them to the cart.
      </Typography>
      <Box className="empty-container">
        <img className="emptyimage" src={EMPTY_IMAGE} alt="No Product" />
      </Box>
      <Box className="empty-btn-container">
        <Button
          className="continue-shopping-btn"
          onClick={handlecontinueShoping}
        >
          CONTINUE SHOPPING{" "}
        </Button>
      </Box>
    </>
  );
};

export default EmptyWishlist;