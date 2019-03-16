import React, { Component } from "react";
import { connect } from "react-redux";

// NativeBase Components
import { List, Content } from "native-base";

// Components
import CoffeeItem from "./CoffeeItem";

class CoffeeList extends Component {
  render() {
    const { coffeeshops } = this.props.coffee;
    let shops;
    if (coffeeshops) {
      shops = coffeeshops.map(coffeeshop => (
        <CoffeeItem coffeeShop={coffeeshop} key={coffeeshop.id} />
      ));
    }
    return (
      <Content>
        <List>{shops}</List>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  coffee: state.coffee
});

export default connect(
  mapStateToProps,
  {}
)(CoffeeList);
