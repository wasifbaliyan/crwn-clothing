import React from "react";
import { CustomButtonContainer } from "./custom-button.styles";

// import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherProps }) => {
  return (
    <CustomButtonContainer
      // className={`${isGoogleSignIn ? "google-sign-in" : " "} ${
      //   inverted ? "inverted" : " "
      // } custom-button`}
      {...otherProps}
    >
      {children}
    </CustomButtonContainer>
  );
};

export default CustomButton;
