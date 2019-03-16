import React, { Component } from "react";
import { connect } from "react-redux";
import { View } from "react-native";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

// Actions
import { getCoffeeShops } from "../../store/actions/coffeeActions";

// Components
import CoffeeList from "../CoffeeList";
import CoffeeCart from "../CoffeeCart";
import CoffeeDetail from "../CoffeeDetail";
import Login from "../Login";

class HomePage extends Component {
  componentDidMount() {
    const { coffeeshops } = this.props.coffee;
    if (!coffeeshops) this.props.getCoffeeShops();
  }

  render() {
    return (
      <Container style={styles.transparent}>
        <View style={styles.overlay} />
        <Header style={styles.transparent} />
        <CoffeeCart />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  coffee: state.coffee
});

const mapActionsToProps = dispatch => ({
  getCoffeeShops: () => dispatch(getCoffeeShops())
});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(HomePage);
