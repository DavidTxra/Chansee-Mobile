// On importe les components nécessaires.
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack'; 




class HomeScreen extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{color: 'white', fontSize: 40, marginTop: -100}}>Chansee</Text>
        <Button
          title="Joueur "
          onPress={() => navigate('Joueur', {name: 'Joueur'})} //On nous redirige vers la page joueur
        />

        <Button
          title="Club "
          onPress={() => navigate('Club', {name: 'Club'})} //On nous redirige vers la page club
        />
    </View>
    );
  }
}


class JoueurScreen extends React.Component {
  static navigationOptions = {
    title: ' ',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{color: 'white', fontSize: 40, textAlign: 'center',}}>Vous avez choisi Joueur</Text>
      </View>
     
    );
  }
}

class ClubScreen extends React.Component {
  static navigationOptions = {
    title: ' ',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={{color: 'white', fontSize: 40, textAlign: 'center',}}>Vous avez choisi Club</Text>
      </View>
     
    );
  }
}




const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Joueur: {screen: JoueurScreen},
  Club: {screen: ClubScreen},
});

const App = createAppContainer(MainNavigator);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  
});