import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

class DisplayImage extends React.Component {
  render() {
    return (
      <View>
        <Image
          style={styles.Image}
          style={{ width: 200, height: 200 }}
          source={require("../assets/man.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f00"
  }
});
export default DisplayImage;
