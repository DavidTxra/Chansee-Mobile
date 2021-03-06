import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import Fire from "../Fire";

export default class ProfileScreen extends React.Component {
    state = {
        user: {}
    };

    unsubscribe = null;

    componentDidMount() {
        const user = this.props.uid || Fire.shared.uid;

        this.unsubscribe = Fire.shared.firestore
            .collection("users")
            .doc(user)
            .onSnapshot(doc => {
                this.setState({ user: doc.data() });
            });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ marginTop: 64, alignItems: "center" }}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={
                                this.state.user.avatar
                                    ? { uri: this.state.user.avatar }
                                    : require("../assets/logo.png")
                            }
                            style={styles.avatar}
                        />
                    </View>
                    <Text style={styles.name}>{this.state.user.name}</Text>
                </View>
                <View style={styles.statsContainer}>
                <View style={styles.stat}>
                        <Text style={styles.statAmount}>Défenseur</Text>
                        <Text style={styles.statTitle}>Poste</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statAmount}>21</Text>
                        <Text style={styles.statTitle}>Âge</Text>
                    </View>
                    <View style={styles.stat}>
                        <Text style={styles.statAmount}>Gauche</Text>
                        <Text style={styles.statTitle}>Pied dominant</Text>
                    </View>
                </View>

                <Button
                    onPress={() => {
                        Fire.shared.signOut();
                    }}
                    title="Déconnexion"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profile: {
        marginTop: 64,
        alignItems: "center"
    },
    avatarContainer: {
        shadowColor: "#151734",
        shadowRadius: 30,
        shadowOpacity: 0.4
    },
    avatar: {
        width: 136,
        height: 136,
        borderRadius: 68
    },
    name: {
        marginTop: 24,
        fontSize: 16,
        fontWeight: "600"
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 32
    },
    stat: {
        alignItems: "center",
        flex: 1
    },
    statAmount: {
        color: "#4F566D",
        fontSize: 18,
        fontWeight: "300"
    },
    statTitle: {
        color: "#C3C5CD",
        fontSize: 12,
        fontWeight: "500",
        marginTop: 4
    }
});