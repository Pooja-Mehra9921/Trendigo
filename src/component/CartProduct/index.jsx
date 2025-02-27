import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// MUI Components
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

// Custom Component
import { DollarToIndianPrice } from "../../helper";
import { setSelectedProducts } from "../../redux/appReducer/appReducer";

// Style Sheet
import "./style.css";

// Product cart Component
const CartProduct = ({
  product = {},
  onProductQuantityUpdate,
  onRemoveCart,
}) => {
  const dispatch = useDispatch(); // store data in reduc store
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  /**
   *  handle Product cart
   */
  const handleProductCart = (product) => {
    dispatch(setSelectedProducts(product));
    navigate(`/product-detail/${product?.id}`);
  };

  /**
   *  handle change quentity when user click on increment and decrement btn
   */

  const handleChangeQuantity = (event) => {
    if (isNaN(Number(event?.target?.value))) return quantity;
    setQuantity(Number(event?.target?.value));

    const updatedQuantity = {
      ...product,
      quantity: Number(event?.target?.value),
    };
    onProductQuantityUpdate(updatedQuantity);
  };

  /* @description Adding/Removing quantity
   * @param {String} type
   * @returns
   */
  const handleQuantityIncDec = (type) => () => {
    //
    if (type == "inc") {
      if (quantity == product?.stock) return quantity;

      const updatedQuantity = { ...product, quantity: quantity + 1 };
      onProductQuantityUpdate(updatedQuantity);
      setQuantity(quantity + 1);
    }

    if (type == "dec") {
      if (quantity == product?.minimumOrderQuantity) return quantity;

      const updatedQuantity = { ...product, quantity: quantity - 1 };
      onProductQuantityUpdate(updatedQuantity);

      setQuantity(quantity - 1);
    }
  };

  /**
   * @description remove cart from add to cart
   */

  const handleRemoveCart = () => {
    onRemoveCart(product);
  };

  return (
    <>
    <Box className="main-add-to-cart-container">
      <Box
        className="add-to-cart-product"
        onClick={() => handleProductCart(product)}
      >
        <Box className="add-to-cart-image-sec">
          <img
            className="add-to-cart-image"
            src={product?.thumbnail}
            alt={product?.title}
          />
        </Box>
        <Box className="add-to-cart-deatil">
          <Box className="title-shipping">
            <Typography variant="h6">{product?.title}</Typography>
            <Typography variant="body2">
              {product?.shippingInformation}
            </Typography>
          </Box>
          <Typography>{product?.brand}</Typography>
          {product?.stock == 0 ? (
            "Out of Stock"
          ) : (
            <>
              <Typography>In Stock: {product?.stock}</Typography>
              <Typography>
                {" "}
                &#8377;{DollarToIndianPrice(product?.price)}
              </Typography>
            </>
          )}
        </Box>
      </Box>
      <Box
        style={{
          display: "flex",
          alignItem: "center",
          justifyContent: "space-between",
        }}
      >
        <Box className="quent-btn-section">
          <Box className="quent-btn-container">
            <IconButton
              disabled={quantity === 0}
              onClick={handleQuantityIncDec("dec")}
            >
              <RemoveCircleOutlineIcon style={{color:"white"}} />
            </IconButton>
            <TextField
            className="textfiled"
              value={quantity}
              onChange={handleChangeQuantity}
              sx={{ width: "50px", color:"white" }}
              size="small"
            ></TextField>
            <IconButton
              disabled={quantity === product?.stock}
              onClick={handleQuantityIncDec("inc")}
            >
              <AddCircleOutlineIcon style={{color:"white"}} />
            </IconButton>
          </Box>
        </Box>
        <Box className="add-to-cart-btn-container">
          <Button
            style={{ marginRight: "10px", backgroundColor:"#f5c700" }}
            variant="contained"
            onClick={handleRemoveCart}
          >
            Remove
          </Button>
        </Box>
      </Box>
      <Divider style={{ margin: "10px auto" }} />
      </Box>
    </>
  );
};

export default CartProduct;
