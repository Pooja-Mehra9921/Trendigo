import React from "react";

// import material ui components
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// import assets
import electronics from "../../assents/suggestions/electronics.png";
import fashion from "../../assents/suggestions/fashion.png";
import furniture from "../../assents/suggestions/furniture.png";
import grocery from "../../assents/suggestions/grocery.png";
import mobiles from "../../assents/suggestions/mobiles.png";
import sports from "../../assents/suggestions/sports.png";
import beauty from "../../assents/suggestions/beauty.png";


// import styles
import "./style.css";

const Suggestions = ({ product, onCategorySelect }) => {
  const suggestions = [
    { id: "electronics", img: electronics, title: "Electronics", category:"laptops" },
    { id: "fashion", img: fashion, title: "Fashion", category:"womens-dresses" },
    { id: "furniture", img: furniture, title: "Furniture" , category:"furniture"},
    { id: "groceries", img: grocery, title: "Grocery", category:"groceries" },
    { id: "smartphones", img: mobiles, title: "Mobiles", category:"smartphones" },
    { id: "sports-accessories", img: sports, title: "Sports", category:"sports-accessories" },
    { id: "beauty", img: beauty, title: "Beauty" },
  ];

  const handleFilterProduct = (categoryId) => {
    if (onCategorySelect) {
      onCategorySelect(categoryId);
    }
  };

  return (
    <Box className="suggestion-main-container">
      <Box className="suggestion-container">
        {suggestions.map((ele) => (
          <Box
            key={ele.id}
            className="suggestion-card"
            onClick={() => handleFilterProduct(ele.id)}
          >
            <Box className="image-container">
              <img className="suggestion-images" src={ele.img} alt={ele.title} />
            </Box>
            <Typography variant="body1" style={{ fontSize: "20px", textAlign: "center", marginTop: "10px" }}>
              {ele.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Suggestions;


