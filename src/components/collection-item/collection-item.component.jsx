import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { CollectionItemContainer, CollectionFooterContainer, PriceContainer, NameContainer, ImageContainer, CustomButtonContainer } from "./collection-item.styles";


const CollectionItem = ({ item, addItem }) => {
  return (
    <CollectionItemContainer >
      <ImageContainer
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
        
      />
      <CollectionFooterContainer>
        <NameContainer >{item.name}</NameContainer>
        <PriceContainer >{item.price}</PriceContainer>
      </CollectionFooterContainer>
      <CustomButtonContainer
        onClick={() => addItem(item)}
        inverted
      >
        ADD TO CART
      </CustomButtonContainer>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => {
      dispatch(addItem(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
