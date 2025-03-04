import React from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.min.css";

// import Hooks
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

// import custom components
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import UserRating from "../../component/UserRating";
import { DollarToIndianPrice, GetDiscountFromPrice } from "../../helper";

// import material ui component
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StarIcon from "@mui/icons-material/Star";

// import styles
import "./style.css";
import { setCartItems } from "../../redux/appReducer/appReducer";
import { useNavigate } from "react-router-dom";

const SingleProductDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataFromStore = useSelector((store) => store?.app?.selectedproduct); // get product data from redux store
  const cartItems = useSelector((store) => store?.app?.cartItems || []);
  const isProductMatched = cartItems.filter(
    (cart) => cart?.id === dataFromStore?.id
  );
  console.log("product machhhh", isProductMatched);
  const [isAdded, setisAdded] = useState(isProductMatched.length > 0);
  const [imageToMagnify, setImageToMagnify] = useState(
    dataFromStore?.thumbnail);
  const userData = JSON.parse(localStorage.getItem("userdata"));
  const isUserLoggedIn = Boolean(userData?.refreshToken);

  /**
   * @description function to set product images in image magnify
   * @param {number} image
   */

  const handleMainImageChange = (image) => {
    setImageToMagnify(image);
  };
  /**
   * @description handle for add to cart items
   */

  const handleAddToCart = (product) => {
    if (isUserLoggedIn) {
      if (!product) {
        console.error("No product to add to cart!");
        return;
      }
      const isAlreadyInAddToCart = cartItems.some(
        (item) => item?.id === product?.id
      );

      let updatedProduct;

      if (isAlreadyInAddToCart) {
        updatedProduct = cartItems.filter((item) =>
          item?.id !== product?.id);
        setisAdded(false);
      }else{
        updatedProduct = [...cartItems, product];
      setisAdded(true);

      }

      // Ensure cartItems is always an array before spreading

      dispatch(setCartItems(updatedProduct));
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Header />
      <Box className="pro-detail-container">
        {/*images section*/}
        <Box className="pro-image-section">
          <Box className="image-suggestions">
            {dataFromStore?.images?.map((image, index) => (
              <img
                src={image}
                alt={`Product ${index}`}
                key={index}
                className="img-suggestion"
                onMouseOver={() => handleMainImageChange(image)}
              />
            ))}
          </Box>
          <Box className="image-magnify-sec">
            <Box className="magnify-image">
            <InnerImageZoom 
        src={imageToMagnify} 
        zoomSrc="https://via.placeholder.com/1200"
        zoomType="hover"
        zoomScale={1.5}
      />
            </Box>
            <Box className="btn-container">
              <Button
                onClick={() => handleAddToCart(dataFromStore)}
                variant="contained"
                className="add-to-cart-btn"
                style={{
                  color: "white",
                  margin: "5px",
                  backgroundColor: isAdded ? "grey" : "#ff9f00",
                  border: "none",
                }}
              >
                <ShoppingCartIcon />
                {isAdded ? "Added to Cart" : "Add to Cart"}
              </Button>
              <Button
                variant="contained"
                style={{ backgroundColor: "#fb641b", margin: "5px" }}
              >
                <FlashOnIcon />
                Buy Now
              </Button>
            </Box>
          </Box>
        </Box>

        {/*Detail section*/}

        <Box className="pro-detail-section">
          <Typography variant="h5">{dataFromStore.title}</Typography>
          <Typography variant="body1" style={{ textAlign: "justify" }}>
            {dataFromStore.description}
          </Typography>
          {/*Price section*/}
          <Box className="selected-price-section">
            <Box style={{ display: "flex", margin: "10px auto" }}>
              <Button className="rating-btn" variant="contained">
                {Number(dataFromStore?.rating).toFixed(1)}
                <StarIcon style={{ fontSize: "16px", marginTop: "-3px" }} />
              </Button>
              <Typography style={{ color: "grey" }}>{`${
                dataFromStore?.rating
              } Ratings & ${
                (dataFromStore?.reviews).length || 0
              } Reviews`}</Typography>
            </Box>
            <Box className="price-container">
              <Typography className="selected-price">
                &#8377;{DollarToIndianPrice(dataFromStore?.price)}
              </Typography>
              <Typography className="selected-orignal-price">
                &#8377;
                {GetDiscountFromPrice(
                  dataFromStore?.price,
                  dataFromStore?.discountPercentage
                )}
              </Typography>
              <Typography className="selected-discount-price">{`${dataFromStore?.discountPercentage} % off`}</Typography>
            </Box>

            <Typography
              sx={{
                color:
                  dataFromStore?.availabilityStatus === "In Stock"
                    ? "green"
                    : "red",
              }}
            >
              {dataFromStore?.availabilityStatus}
            </Typography>
            <Typography variant="body1">
              Warranty: <strong>{dataFromStore?.warrantyInformation}</strong>
            </Typography>
            <Typography variant="body1">
              Return Policy: <strong>{dataFromStore?.returnPolicy}</strong>
            </Typography>
            <Typography variant="body1">
              Shipping : <strong>{dataFromStore?.shippingInformation}</strong>
            </Typography>
            <Typography variant="body1">
              Available Stock: <strong>{dataFromStore?.stock}</strong>
            </Typography>
            <Typography variant="body1">
              Return Policy:{" "}
              <strong>{dataFromStore?.warrantyInformation}</strong>
            </Typography>
            <Typography variant="body1">Dimentions:</Typography>
            <Typography variant="body1">
              Depth: <strong>{dataFromStore?.dimensions?.depth}</strong>
            </Typography>
            <Typography variant="body1">
              Height: <strong>{dataFromStore?.dimensions?.height}</strong>
            </Typography>
            <Typography variant="body1">
              Width: <strong>{dataFromStore?.dimensions?.width}</strong>
            </Typography>
          </Box>

          <Box className="review-rating-section">
            <Typography variant="h5">Review and Rating</Typography>
            {dataFromStore.reviews.map((reviews, index) => {
              return <UserRating key={index} review={reviews} />;
            })}
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default SingleProductDetail;
