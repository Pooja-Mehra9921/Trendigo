import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

// Import necessary React hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import necessary material ui components
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Chip, Tooltip } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

// import custom components
import BackdropLoader from "../../component/BackdropLoader";
import LOGIN_IMAGE from "../../assents/images/loginpageimage.jpg";
import Notifications, {
  showErrorToast,
  showSuccessToast,
} from "../../component/Notifications";
import { API } from "../../configs/api";

// style sheet
import "./style.css";
import { useDispatch } from "react-redux";
import { login } from "../../redux/appReducer/appReducer";

// Login Page components
const Login = () => {
  const navigate = useNavigate();

  // states
  const [hidePassword, sethidePassword] = useState(false); // state to set hide icon in the password input field
  const [loginData, setloginData] = useState({ username: "", password: "" }); // state to store login data enter from the user
  const [isSubmit, setisSubmit] = useState(false); // state to check user is submit the form or not
  const [isLoading, setisLoading] = useState(false); // state for show lodaing when we submit the form

  /**
   * @description show and hidePassword password
   */

  const handleShowPassword = () => {
    sethidePassword(!hidePassword);
  };

  /**
   * @description to click chip button user is submit or note
   */
  const handleSubmitbtn = async () => {
    try {
      setisLoading(true); // start loader
      if (loginData.username.length < 5 || loginData.password.length < 6)
        return;

      setisSubmit(true);
      console.log("---login data", loginData);

      const { status, data } = await axios.post(API.LOGIN_API, {
        // fetch api
        username: loginData.username,
        password: loginData.password,
        expiresInMins: 30,
      });

      if (status == 200) {
        setisLoading(false); // stop loader
        localStorage.setItem("userdata", JSON.stringify(data)); // store data in local storage
        navigate("/home");
        showSuccessToast("You are login successfully");
      }
    } catch (error) {
      setisLoading(false);

      if (loginData.username !== "emilys") {
        showErrorToast("please enter valid username");
        setisLoading(false);
      } else if (loginData.password !== "emilyspass") {
        showErrorToast("please enter valid password");
        setisLoading(false);
      } else {
        showErrorToast(showErrorToast(error?.response?.data?.message));
        setisLoading(false);
      }
      console.log("sometning went wrong while fetching api", error);
    }
  };

  /** @description to get user value from username and password input enter by user  */

  const handlechange = (type) => (event) => {
    setloginData({ ...loginData, [type]: event.target.value }); // get value from inputs enter by user
  };

  /** @description error validations  */

  const emailerror = isSubmit && loginData.username.length <= 5;
  const passworderror = isSubmit && loginData.password.length <= 6;

  return (
    <>
      <BackdropLoader isLoading={isLoading} />
      <Box className="login-body">
        <Box className="login-container">
          <Paper elevation={4} className="login-paper">
            <Grid container>
              <Grid item xs={12} sm={12} md={6} lg={6} className="fk-left-sec">
                <Box>
                  <img
                    className="flipkart-login-image"
                    src={LOGIN_IMAGE}
                    alt="login image"
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6} lg={6} className="fk-right-sec">
                <Typography variant="h4" className="display-flex-pro">
                  <strong>Login</strong>
                </Typography>
                <Typography variant="body2" className="display-flex-pro">
                  Get access to your Orders, Wishlist and Recommendations
                </Typography>
                <TextField
                  className="textfield"
                  id="outlined-error-helper-text"
                  label="UserName"
                  margin="dense"
                  size="small"
                  fullWidth
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment position="start">
                          <IconButton>
                            <AccountCircleIcon sx={{ color: "white" }} />
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  onChange={handlechange("username")}
                />
                <TextField
                  className="textfield"
                  error={passworderror}
                  type={hidePassword ? "password" : "text"}
                  id="outlined-error-helper-text"
                  label="Password"
                  margin="dense"
                  size="small"
                  helperText={passworderror && "Please enter valid password"}
                  fullWidth
                  slotProps={{
                    input: {
                      endAdornment: (
                        <InputAdornment
                          position="start"
                          style={{ cursor: "pointer" }}
                        >
                          <IconButton
                            style={{ color: passworderror ? "red" : "grey" }}
                            onClick={handleShowPassword}
                          >
                            {hidePassword ? (
                              <VisibilityOffIcon sx={{ color: "white" }} />
                            ) : (
                              <VisibilityIcon sx={{ color: "white" }} />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    },
                  }}
                  onChange={handlechange("password")}
                />

                <Box className="btn-container">
                  <Tooltip
                    title={
                      (loginData.username < 5 &&
                        loginData.username != "emilys" &&
                        "please enter valid Username") ||
                      (loginData.password < 6 && "please enter valid password")
                    }
                  >
                    <Chip
                      fullWidth
                      className="chip-btn login-btn"
                      label="Login"
                      variant="outlined"
                      onClick={handleSubmitbtn}
                      disabled={loginData.password < 6}
                    />
                  </Tooltip>
                </Box>
                <Typography sx={{ textAlign: "center", color: "white" }}>
                  Don't have a account?{" "}
                  <span
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/signup")}
                  >
                    <strong>Register</strong>
                  </span>{" "}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Login;
