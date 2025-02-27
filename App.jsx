import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./src/pages/Home";
import LoginPage from "./src/pages/Login";
import ProductPage from "./src/pages/Product";
import SingleProductDetail from "./src/pages/SingleProductDetail";
import AboutPage from "./src/pages/About";
import CartPage from "./src/pages/CartPage";
import WishListPage from "./src/pages/wishList";
import ProtectedRoute from "./src/component/ProtectedRoute";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
        
          <Route exact path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/product/:category" element={<ProductPage />} />
          <Route path="/product-detail/:id" element={<SingleProductDetail />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Protected Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
