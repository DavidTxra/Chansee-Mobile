import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

class JoueurItem extends React.Component {
  render() {
    const joueur = this.props.joueur;
    return (
      <View style={styles.container}>
        <Text style={styles.name}>
          {joueur.firstname} {joueur.lastname}
        </Text>
        <View>
          <Image style={styles.photo} source={joueur.photo} />
          {/* <Text style={styles.properties}>Taille : {joueur.size} cm</Text>
          <Text style={styles.properties}>Poids : {joueur.weight} kg</Text>
          <Text style={styles.properties}>Poste : {joueur.role} </Text> */}
          <Text style={styles.description}>{joueur.description} </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Modifier"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc"
  },
  name: {
    flex: 1,
    marginTop: 45,
    color: "#ffffff",
    fontSize: 30,
    textAlign: "center"
  },
  photo: {
    flex: -1,
    marginTop: 20,
    // height: 500,
    // width: "100%",
    flexDirection: "column"
    // justifyContent: "center",
    // alignItems: "center"
  },
  description: {
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5,
    color: "#ffffff",
    fontSize: 17,
    textAlign: "center"
  },
  properties: {
    flex: 1,
    marginTop: 5,
    flexDirection: "column",
    fontSize: 13,
    textAlign: "center"
  },
  buttonContainer: {
    flex: 2,
    margin: 20
  }
});

export default JoueurItem;
