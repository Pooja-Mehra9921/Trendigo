import React from "react";

// import material ui components
import Backdrop  from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";


const BackdropLoader = ({ isLoading = false }) => {
  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: 99 })}
        open={isLoading}
        //onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default BackdropLoader;
