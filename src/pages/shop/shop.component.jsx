import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import { fetchCollections } from "../../redux/shop/shop.sagas";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollections } = this.props;
    fetchCollections();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCollections: () => dispatch(fetchCollections()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
