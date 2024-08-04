import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import p1_background from "../assets/p1_background.png";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={p1_background} style={styles.image}>
            <Text style={styles.ptxt}>To Do List</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("AppScreen")}
            >
                <Text style={styles.btnText}>Explore</Text>
            </TouchableOpacity>
        </ImageBackground>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },

    ptxt: {
        margin: 40,
        fontSize: 30,
    },

    button: {
        width: 180,
        height: 50,
        backgroundColor: "orange",
        margin: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50
    },

    btnText: {
        color: "white",
        fontSize: 20,
    },
});
