import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Initialize Toasts (use this in your App.js or index.js)
export const initToast = () => {
  toast.configure({
    position: "slide",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: 0,
  });
};

// Success Toast
export const showSuccessToast = (message) => {
  toast.success(message);
};

// Error Toast
export const showErrorToast = (message) => {
  toast.error(message);
};

// Info Toast
export const showInfoToast = (message) => {
  toast.info(message);
};

// Warning Toast
export const showWarningToast = (message) => {
  toast.warn(message);
};
