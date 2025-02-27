import React from "react";

// import Custom components
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import aboutImage from "../../assents/images/about.jpg"

// import material ui components
import Box from "@mui/material/Box";

// import style sheet
import "./style.css";
import { Divider, Typography } from "@mui/material";

const AboutPage = () => {

  return (
    <>
      <Header />
      <Box className="abt-main">
      <Box className="about-main-container">
        <Box className="about-container">
          <Typography variant="h4"><strong>About Trendigo</strong></Typography>
          <Typography variant="body1" style={{color:"grey", fontWeight:"600"}}>Welcome to Trendigo, your ultimate destination for the latest trends in fashion, beauty, electronics, and more! At Trendigo, we believe shopping should be effortless, enjoyable, and packed with exciting deals.</Typography>
          <br/>
          <Typography variant="body1"><strong>BRIEF</strong></Typography>
          <br/>
          <Typography variant="body2" style={{textAlign:"justify"}}>
            In mid 2014, e-commerce giant Flipkart decided to change their logo
            and identity design. They worked with a brand studio called Umbrella
            Design to craft a new identity.<br/> But a new identity doesn’t just mean
            a new logo - it means a consistent shift in visual language across
            mediums like print, outdoor, film, and in Flipkart’s case - the
            website and apps that are at the core of their business. <br/>Flipkart
            asked us to help them ensure the new branding worked seamlessly with
            their existing website and app structures.<br/><br/> We did this project in
            collaboration with Umbrella Design who brought us on board for the
            digital aspects of the exercise.
          </Typography>
        </Box>
      </Box>
      <Box className="objective-container">
            <Typography variant="h4" style={{textAlign:"center"}}>
                <span style={{fontSize:"20px"}}>Objective</span><br/>
                <strong>How do you provide a consistent experience to millions</strong></Typography>
        </Box>

        <Box className="second-container">
            <Box>
            <Typography variant="body1"><strong>YOU START WITH THE PALETTE</strong></Typography>
          <br/>
          <Typography variant="body2" style={{textAlign:"justify"}}>
          The new colour palette was simple, approachable and inclusive. We accented
          the blue and yellow with shades of grey and added secondary colours to enable some variation in design across the web interface.
          </Typography>
            </Box>
        
        </Box>
        <Divider/>
        <Box className="second-container">
            <Box style={{margin:"20px"}}>
            <Typography variant="body1"><strong>APPLY THE NEW DESIGN LANGUAGE TO THE INTERFACE</strong></Typography>
          <br/>
          <Typography variant="body2" style={{textAlign:"justify"}}>
          We worked on the layout and user interface design for both the mobile app and the website. 
          </Typography>
            </Box>
            <Box className="about-image-conatiner">
            <img src={aboutImage} alt="about page image" />

            </Box>
        
        </Box>
      </Box>
     
      <Footer />
    </>
  );
};

export default AboutPage;
