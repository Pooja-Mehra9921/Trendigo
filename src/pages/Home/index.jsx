import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import Suggestions from "../../component/Suggestions";
import ProductSuggestions from "../../component/ProductSuggestions";
import Banner from "../../component/Banner";
import { API } from "../../configs/api";

const Home = () => {
  const [allproducts, getallproducts] = useState([]);
  const [electronicsProducts, setelectronicsProducts] = useState([]);
  const [fashionProducts, setfashionProducts] = useState([]);
  const [beautyProducts, setbeautyProducts] = useState([]);
  const [allFurniture, setallFurniture] = useState([]);
  const [grocerie, setgrocerie] = useState([]);
  const [sports, setSports] = useState([]);
  const [mobiles, setMobiles] = useState([]);

  const electronicsRef = useRef(null);
  const fashionRef = useRef(null);
  const beautyRef = useRef(null);
  const grocerieRef = useRef(null);
  const sportseRef = useRef(null);
  const mobileRef = useRef(null);
  const moreProductsRef = useRef(null);

  useEffect(() => {
    fetchAllProduct();
  }, []);

  const fetchAllProduct = async () => {
    try {
      const response = await axios.get(API.PRODUCTS_API);
      getallproducts(response.data);

      const {
        status,
        data: { products = [] },
      } = response || {};
      if (status === 200) {
        const electronices = products.filter((product) =>
          ["mobile-accessories", "laptops"].includes(product?.category)
        );
        setelectronicsProducts(electronices);

        const fashion = products.filter((product) =>
          [
            "womens-dresses",
            "mens-shirts",
            "mens-shoes",
            "womens-shoes",
          ].includes(product?.category)
        );
        setfashionProducts(fashion);

        const beauty = products.filter((product) =>
          ["beauty", "ragrances", "skin-care"].includes(product?.category)
        );
        setbeautyProducts(beauty);

        const furniture = products.filter((product) =>
          ["furniture", "home-decoration"].includes(product?.category)
        );
        setallFurniture(furniture);

        const grocerie = products.filter((product) =>
          ["groceries"].includes(product?.category)
        );
        setgrocerie(grocerie);

        const sports = products.filter((product) =>
          ["sports-accessories"].includes(product?.category)
        );
        setSports(sports);

        const mobile = products.filter((product) =>
          ["smartphones"].includes(product?.category)
        );
        setMobiles(mobile);
      }
    } catch (error) {
      console.log("error while fetching product api", error);
    }
  };

  // Function to scroll to the appropriate section
  const scrollToSection = (categoryId) => {
    switch (categoryId) {
      case "electronics":
        electronicsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "fashion":
        fashionRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "furniture":
        moreProductsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "groceries":
        grocerieRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "smartphones":
        mobileRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "sports-accessories":
        sportseRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "beauty":
        beautyRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        console.log("No matching category to scroll");
    }
  };

  return (
    <>
      <Header />
      <Box className="Home-main-container">
      <Banner />

        <Suggestions product={allproducts} onCategorySelect={scrollToSection} />
      </Box>
      <Box ref={electronicsRef}>
        <ProductSuggestions
          title="Best of Electronics"
          product={electronicsProducts}
        />
      </Box>

      <Box ref={fashionRef}>
        <ProductSuggestions
          title="Fashion Top Deals"
          product={fashionProducts}
        />
      </Box>

      <Box ref={beautyRef}>
        <ProductSuggestions title="Beauty Products" product={beautyProducts} />
      </Box>

      <Box ref={moreProductsRef}>
        <ProductSuggestions title="Furniture" product={allFurniture} />
      </Box>

      <Box ref={grocerieRef}>
        <ProductSuggestions title="Groceries" product={grocerie} />
      </Box>

      <Box ref={sportseRef}>
        <ProductSuggestions title="Sports" product={sports} />
      </Box>

      <Box ref={mobileRef}>
        <ProductSuggestions title="Mobiles" product={mobiles} />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
