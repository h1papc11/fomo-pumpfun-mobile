import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        color: "#fff",
        textAlign: "center",
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 14,
        color: "#ccc",
        textAlign: "center",
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    codeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "90%",
        marginBottom: 30,
        alignSelf: "center"
    },
    codeInput: {
        width: 44,
        height: 44,
        borderWidth: 1,
        borderColor: "#9794AA",
        borderRadius: 8,
        color: "#fff",
        fontSize: 22,
        textAlign: "center",
        backgroundColor: "rgba(255,255,255,0.05)",
    },
    selectedCodeInput: { borderColor: '#3AB5F8' },
    loginButton: {
        marginTop: 10,
    },
    loginButtonText: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
    },
});

export default styles;
