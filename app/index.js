import React from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Let's build a currency converter app from app/index.js!</Text>
      </View>
    );
  }
}
