import React from "react";
import "./style.css";
import { Box, Divider, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DollarToIndianPrice, GetDiscountFromPrice } from "../../helper";
import { useDispatch, useSelector } from "react-redux";
import {
  setCartItems,
  setSelectedProducts,
  setWishListItems,
} from "../../redux/appReducer/appReducer";
import { useNavigate } from "react-router-dom";

const WishListCart = ({ product = [], onRemoveWishlistCart }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleRemoveWishlistCart = () => {
    onRemoveWishlistCart();
  };

  const handleWishlistSelectedProduct = (product) => {
    console.log("cart clicked");
    dispatch(setSelectedProducts(product));
    navigate(`/product-detail/${product?.id}`);
  };

  return (
    <>
      <Box className="wishlist-main-container">
        <Box className="wishlist-container">
          <Box className="whishlist-cart">
            <Box
              className="wishlist-detail"
              onClick={() => handleWishlistSelectedProduct(product)}
            >
              <img
                className="wishlist-image"
                src={product?.thumbnail}
                alt={product?.title}
              />
              <Box>
                <Typography variant="h6" style={{ color: "white" }}>
                  {product?.title}
                </Typography>
                <Box
                  className="wishlist-price-section"
                  style={{ display: "flex" }}
                >
                  <Typography className="wishlist-orignal-price">
                    &#8377;{DollarToIndianPrice(product?.price)}
                  </Typography>
                  <Typography className="wishlist-price">
                    &#8377;
                    {GetDiscountFromPrice(
                      product?.price,
                      product?.discountPercentage
                    )}
                  </Typography>
                  <Typography className="wishlist-discout">
                    {`${product?.discountPercentage || ""} % off`}
                  </Typography>
                </Box>
              </Box>
            </Box>
            <IconButton onClick={onRemoveWishlistCart}>
              <DeleteIcon style={{ color: "white" }} />
            </IconButton>
          </Box>
        </Box>
        <Divider />
      </Box>
    </>
  );
};

export default WishListCart;
