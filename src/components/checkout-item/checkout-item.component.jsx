import React from "react";

import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/cart.actions";
import { CheckoutItemContainer,ArrowContainer, ValueContainer,QuantityContainer,RemoveButtonContainer, ImageContainer, NameContainer } from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <NameContainer >{name}</NameContainer>
      <QuantityContainer>
        <ArrowContainer onClick={() => removeItem(cartItem)} >
          &#10094;
        </ArrowContainer>
        <ValueContainer >{quantity}</ValueContainer>
        <ArrowContainer onClick={() => addItem(cartItem)} >
          &#10095;
        </ArrowContainer>
      </QuantityContainer>
      <NameContainer>{price}</NameContainer>

      <RemoveButtonContainer onClick={() => clearItem(cartItem)} >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
