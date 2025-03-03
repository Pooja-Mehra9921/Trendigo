import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// hooks
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// material ui components
import Box from "@mui/material/Box";
import { Rating, Typography } from "@mui/material";

// assents
import DummyImage from "../../assents/suggestions/dummy.png";

// custom components
import { setSelectedProducts } from "../../redux/appReducer/appReducer";

// styles
import "./style.css";
import { ProductSuggestionsShimmer } from "../Shimmer";

const ProductSuggestions = ({ title = "abc", product = [] }) => {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  const dispatch = useDispatch(); // hook to store data in redux store
  const navigate = useNavigate();
  const [loading , setLoading] = useState(false);

  useEffect(()=>{
    setTimeout(() => {
setLoading(true);
      
    }, 2000);
  },[]);

  /**
   * @description handle selected product and redirect to single product detail page
   */

  const handleProductSuggestionCard = (item) => {
    console.log("carddd click", item);
    dispatch(setSelectedProducts(item));
    navigate(`/product-detail/${item?.id}`);
  };
  
  return (
    <>
      <Box className="Product-suggestion-main-container">
        <Box sx={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <Typography variant="h4" style={{ margin: "40px auto", textAlign:"center", width:"auto", borderBottom:"4px solid #cca471"}}>
          {title}
        </Typography>
        </Box>
       
        <Box className="Product-suggestion-container">
          {product.length === 0 ? (
            <Typography variant="h4" style={{ margin: "10px auto" }}>
              No Product Available
            </Typography>
          ) : 
            <Slider className="slider" {...settings}>
            {product.map((item, index) => (
              <Box
                key={index}
                className="Product-suggestion-card"
                onClick={() => handleProductSuggestionCard(item)}
              >
                <Box>
                  <Box className="image-container">
                    {
                        loading ?  
                        <img
                      className="Product-suggestion-images"
                      src={item?.thumbnail || DummyImage}
                      alt={item?.title || "No title"}
                      loading="lazy"
                    />
                    :
                    <ProductSuggestionsShimmer/>
                    }
                    
                  </Box>

                  <Typography
                    variant="body1"
                    className="suggestion-title"
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      marginTop: "10px",
                    }}
                  >
                    {item?.title || "No title"}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Slider>

          }
        </Box>
      </Box>
    </>
  );
};

export default ProductSuggestions;
