import React from "react";
import ReactDom from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import custom components
import App from "./App";
import theme from "./theme";
import { store } from "./src/redux/store";
import { persistor, store } from "./src/redux/store";
import BackdropLoader from "./src/component/BackdropLoader";

// import styles
import { ThemeProvider } from "@mui/material/styles";
import Header from "./src/component/Header";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<BackdropLoader />} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </>
);
