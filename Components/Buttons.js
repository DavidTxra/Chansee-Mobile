import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

class Buttons extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>incroyable</Text>
        <Button title="Oui" onPress={() => {}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#aaa",
    alignItems: "center",
    justifyContent: "center"
  }
});
export default Buttons;
