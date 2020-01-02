// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import * as firebase from 'firebase'

// export default class RegisterScreen extends React.Component {
//     state = {
//         email: "",
//         displayName: ""
//     }

//     componentDidMount() {
//         const { email, displayName } = firebase.auth().currentUser;

//         this.setState({ email, displayName });
//     }

//     signOutUser = () => {
//         firebase.auth().signOut();
//     };

//     render() {
//         return (
//             <View style={styles.container}> 
//                 <Text>Hi {this.state.email}!</Text>

//                 <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
//                     <Text>Logout</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     }
// });

import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, Statusbar } from 'react-native';
import * as firebase from 'firebase';
import {Ionicons} from '@expo/vector-icons';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


var choix = [
    {label: "Joueur", value: 0},
    {label: "Club", value: 1},
];

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        header: null
        
    };

    

    state = {
        name: "",
        email: "",
        password: "",
        // choix:"",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            // .then(this.state.choix.updateIsActiveIndex(0))
            .then(userCredentials => {
                return userCredentials.user.updateProfile({
                   displayName: this.state.name 
                })
            })
            .catch(error => this.setState({ errorMessage: error.message }))
    };


    

    render() {
        
        return (
            
            <View style={styles.container}> 
                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>
                </TouchableOpacity>
                {/* <Image source={require("../logo_chansee_v1.png")} style={{marginTop: 90, alignSelf: "center"}}></Image> */}
                <Text style={styles.greeting}>{`Inscription`}</Text>

                <View style={styles.errorMessage}>
                    {this.state.errorMessage && <Text style={styles.error}>{this.state.errorMessage}</Text>}
                </View>

                <View style={styles.form}>
                    <View>
                        <Text style={styles.inputTitle}>Nom</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none" 
                            onChangeText={name => this.setState({ name })}
                            value={this.state.name}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Adresse mail</Text>
                        <TextInput 
                            style={styles.input} 
                            autoCapitalize="none" 
                            onChangeText={email => this.setState({ email })}
                            value={this.state.email}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <Text style={styles.inputTitle}>Mot de passe</Text>
                        <TextInput 
                            style={styles.input} 
                            secureTextEntry 
                            autoCapitalize="none" 
                            onChangeText={password => this.setState({ password })}
                            value={this.state.password}
                        ></TextInput>
                    </View>

                    <View style={{ marginTop: 32 }}>
                        <RadioForm style={styles.boutonRadio}
                           radio_props={choix} 
                           onPress={(value) => {}}
                           buttonSize={15}
                           selectedButtonColor={'#3BD1B3'}
                           
                           labelColor={"#8A8F9E"}
                           fontSize={10}
                           textTransform={"uppercase"}
                           formHorizontal={true}
                           buttonColor={'#3BD1B3'}
                           labelStyle={{left: -9}}
                           value={this.state.choix} 
                        />
                    </View>
                </View>
             
                
                <TouchableOpacity style={styles.button} onPress={this.handleSignUp}>
                    <Text style={{color: "#FFF", fontWeight: "500"}}>S'inscrire  </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{alignSelf: "center", marginTop: 32}} 
                    onPress={() => this.props.navigation.navigate("Register")}
                >
                    
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    greeting: {
        fontSize: 35,
        fontWeight: "400",
        textAlign: "center",
        marginTop: 160, 
    },
    errorMessage: {
        height: 72,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 30
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: "center"
    },
    form: {
        marginBottom: 48,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
    },



    boutonRadio: {
        fontSize: 35,
        fontWeight: "400",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
    },



    input: {
        borderBottomColor: "#8A8F9E",
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: "#161F3D"

    },
    button: {
        marginHorizontal: 30,
        backgroundColor: "#3BD1B3",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"

    },
    back: {
        position: "absolute",
        top: 48,
        left: 32,
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "rgba(21, 22, 48, 0.1)",
        alignItems: "center",
        justifyContent: "center"
    }
});