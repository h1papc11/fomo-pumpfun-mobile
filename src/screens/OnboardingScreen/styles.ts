import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 40,
    },
    memeTopRight: {
        position: "absolute",
        top: 80,
        right: 50,
        width: 120,
        height: 120,
        resizeMode: "contain",
    },
    memeLeft: {
        position: "absolute",
        top: 300,
        left: 30,
        width: 150,
        height: 90,
        resizeMode: "contain",
    },
    memeBottom: {
        position: "absolute",
        top: 500,
        width: 220,
        height: 140,
        resizeMode: "contain",
        right: 50
    },
    buttonAlign: {
        width: "90%"
    },
    signInText: {
        color: "white",
        fontSize: 16,
        marginBottom: 12,
    },
    signInLink: {
        color: "#3AB5F8",
    },
    terms: {
        color: "#949494",
        fontSize: 12,
        textAlign: "center",
        paddingHorizontal: 20,
    },
});

export default styles;
