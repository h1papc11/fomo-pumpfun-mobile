import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    container: {
        borderRadius: 24,
        padding: 24,
        alignItems: "center",
        width: "90%",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 6,
        borderWidth: 1,
        borderColor: "#fff"
    },
    closeBtn: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 1,
        backgroundColor: "#191919",
        borderRadius: 100,
        padding: 5
    },
    icon: {
        width: 60,
        height: 60,
        marginBottom: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: "600",
        textAlign: "center",
        marginBottom: 15,
    },
    message: {
        fontSize: 12,
        textAlign: "center",
    },
});

export default styles