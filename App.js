import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import Joueurs from "./Data/Joueurs";
// import Buttons from "./Components/Buttons";
import JoueurItem from "./Components/JoueurItem";

export default class App extends React.Component {
  render() {
    return (
      (
        <View style={styles.container}>
          <Text>Chansee</Text>
        </View>
      ),
      (
        <View>
          <FlatList
            data={Joueurs}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <JoueurItem joueur={item} />}
          />
        </View>
      )
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    backgroundColor: "#F73D15",
    textAlign: "center"
  }
});
