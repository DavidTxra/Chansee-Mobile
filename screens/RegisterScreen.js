import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, StatusBar } from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as firebase from 'firebase';

export default class RegisterScreen extends React.Component {
    
    static navigationOptions = {
        header:null
    };
    
    state = {
        name: "",
        email: "",
        password: "",
        errorMessage: null
    };

    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
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

                <StatusBar borStyle="light-content"></StatusBar>

                <Image 
                    source={require('../assets/stade.png')} 
                    style={{marginTop:-110,marginLeft:0,opacity:0.7}}
                ></Image>

                <TouchableOpacity style={styles.back} onPress={() => this.props.navigation.goBack()}>
                    <Ionicons name="ios-arrow-round-back" size={32} color="#FFF"></Ionicons>    
                </TouchableOpacity>  

            <View style={{position:"absolute",top:64,alignItems:"center",width:"100%"}}>
                <Text style={styles.greeting}>{`Inscription`}</Text>
                <TouchableOpacity style={styles.avatar}>
                    <Ionicons 
                        name="ios-add" 
                        size={40} 
                        color="#FFF"
                        style={{marginTop:6,marginLeft:2}}
                    ></Ionicons>    
                </TouchableOpacity> 
            </View>

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
        marginTop: 32,
        fontSize: 35,
        fontWeight: "400",
        textAlign: "center"
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
        marginBottom: 58,
        marginHorizontal: 30
    },
    inputTitle: {
        color: "#8A8F9E",
        fontSize: 10,
        textTransform: "uppercase"
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
        backgroundColor: "green",
        borderRadius: 4,
        height: 52,
        alignItems: "center",
        justifyContent: "center"
    },
    back: {
        position: "absolute",
        top:48,
        left:32,
        width:32,
        height:32,
        borderRadius:16,
        backgroundColor:"rgba(21,22,48,0.1)",
        alignItems:"center",
        justifyContent:"center"
    },
    avatar: {
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:"#E1E2E6",
        marginTop:48,
        justifyContent:"center",
        alignItems:"center"
    }
});