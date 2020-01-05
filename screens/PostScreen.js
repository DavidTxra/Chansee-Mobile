import React from 'react';
import {View, Text, StyleSheet, Platform, SafeAreaView} from 'react-native';
import { Tile } from 'react-native-elements';
import Swiper from 'react-native-deck-swiper';
import { Card } from '../components/Card'
import { HomeScreenPics } from '../constants/Pics'

export default class PostScreen extends React.Component {
    render () {
        return (
            <SafeAreaView style={styles.container}>
        <Swiper
          cards={HomeScreenPics}
          renderCard={Card}
          infinite // keep looping cards infinitely
        //   backgroundColor="#3DD2B5"
        backgroundColor="green"
          cardHorizontalMargin={0}
          stackSize={2} // number of cards shown in background
          
        />

        
      </SafeAreaView>
      
        );
    }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    }
});