import React, { useCallback } from "react";
import axios from "axios";

// import hooks
import { useState } from "react";
import { useEffect } from "react";

// Import Custom Components
import { API } from "../../configs/api";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import BackdropLoader from "../../component/BackdropLoader";
import ProductCardGrid from "../../component/ProductCardGrid";
import ProductCardList from "../../component/ProductCardList";

// Import Material UI Components
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";

// Import Styles
import "./style.css";
import { useParams } from "react-router-dom";
import PageNotFound from "../NotFound";
import { Typography } from "@mui/material";
import { ProductCartShimmer } from "../../component/Shimmer";

const ProductPage = () => {
  // State Management
  const params = useParams();

  const [allProduct, setAllProduct] = useState([]);
  const [ViewOfProduct, setViewOfProduct] = useState("grid"); // Default to 'grid'
  const [isLoading, setLoading] = useState(false);
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    if (params.category == "all") {
      fetchAllProducts();
    } else {
      fetchCategoryProducts(params.category);
    }
  }, [params.category]);

  useEffect(() => {
    setTimeout(() => {
      setShimmer(true);
    }, 500);
  }, []);

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  
  const fetchAllProducts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(API.PRODUCTS_API);
      if (response.status === 200) {
        setAllProduct(shuffleArray(response.data.products)); // Shuffle before setting state
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, []);
  
  const fetchCategoryProducts = async (category) => {
    try {
      setLoading(true);
  
      const api = API.PRODUCT_BY_CATEGORY.replace("#CATEGORY#", category);
      const { status, data: { products = [] } = {} } = await axios(api);
  
      if (status === 200) {
        setAllProduct(shuffleArray(products)); // Shuffle before setting state
      }
    } catch (err) {
      console.error("--error while fetching category Api--", err);
    } finally {
      setLoading(false);
    }
  };
  

  /**
   * @description to change view of product to list view and grid view
   * @param {string} type
   */
  const handleViewOfProduct = (type) => {
    setViewOfProduct(type);
  };

  return (
    <>
      <Header />
      <BackdropLoader isLoading={isLoading} />

      <Box className="product-main-container">
        <Box className="product-container">
          <Box className="product-section">
            <Box className="view-icon-container">
              <IconButton onClick={() => handleViewOfProduct("grid")}>
                <ViewModuleIcon
                  style={{ color: ViewOfProduct === "grid" ? "white" : "grey" }}
                />
              </IconButton>
              <IconButton onClick={() => handleViewOfProduct("list")}>
                <ViewListIcon
                  style={{ color: ViewOfProduct === "list" ? "white" : "grey" }}
                />
              </IconButton>
            </Box>

            {ViewOfProduct === "list" && (
              <Box>
                <Box className="product-list-con">
                  {allProduct.length === 0 && <PageNotFound />}
                </Box>

                {allProduct.map((item, index) => {
                  return <ProductCardList key={index} product={item} />;
                })}
              </Box>
            )}

            {ViewOfProduct === "grid" && (
              <Box className="product-grid-container">
                {shimmer ? (
                  allProduct.map((item, index) => {
                    return <ProductCardGrid key={index} product={item} />;
                  })
                ) : (
                  <ProductCartShimmer />
                )}
                {}
              </Box>
            )}
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ProductPage;
