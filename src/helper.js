export const DollarToIndianPrice = (doller) => {
  const INR = Number(doller * 87.81);
  return Math.trunc(INR);
};

export const GetDiscountFromPrice = (price, discount) => {
  const priceInINR = DollarToIndianPrice(price);
  const Discount = (priceInINR * Number(discount)) / 100;
  const FinalPrice = priceInINR - Discount; // Subtract the discount
  return Math.trunc(FinalPrice);
};

  /**
   * @description to get avtar name from user name
   * @param {string} name
   * @returns
   */
  export const getAvtarName = (name) => {
    if (!name) return ""; // Handle cases where name is undefined or empty
  
    const splitName = name.trim().split(" ");
    const firstName = splitName[0] || ""; // Default to empty string if undefined
    const lastName = splitName[1] || "";  // Default to empty string if undefined
  
    return `${firstName.charAt(0).toUpperCase()}${lastName ? " " + lastName.charAt(0).toUpperCase() : ""}`;
  };
  