import Box from "@mui/material/Box";

import React from "react";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import IMAGE_NOT_FOUND from "../../assents/images/notFound.jpeg";
import "./style.css";


const PageNotFound =()=>{
    return(
        <>
        
        <Box>
<img className="notfoundimage" src={IMAGE_NOT_FOUND} alt="image not found" />
        </Box>
        </>
    )
};

export default PageNotFound;