import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    icon: {
        width: 150,
        height: 150,
        marginBottom: 30,
        resizeMode: "contain",
    },
    title: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "600",
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 14,
        color: "#fff",
        marginBottom: 30,
    },
    subtitleSmall: {
        fontSize: 12,
        color: "#fff",
        marginBottom: 20,
        textAlign: "center",
    },
    subheader: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "500",
        marginBottom: 5,
    },
    buttonOutline: {
        width: "100%",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#1e1e1e",
        marginBottom: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#333",
    },
    button: {
        width: "100%",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#2a2a2a",
        marginBottom: 15,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    helperText: {
        fontSize: 12,
        color: "#949494",
        marginTop: 5,
    },
    orContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 16,
    },
    line: {
        flex: 1,
        height: 2,
        backgroundColor: "#191919",
    },
    orText: {
        color: "#191919",
        marginVertical: 20,
        marginHorizontal: 8,
        fontSize: 16
    },
    input: {
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderColor: "#949494",
        borderRadius: 12,
        color: "#fff",
        marginBottom: 15,
        paddingVertical: 20
    },
    loginButton: {
        width: "100%",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#00aaff",
        alignItems: "center",
        marginBottom: 20,
    },
    loginText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "600",
    },
    footerImage: {
        width: 150,
        height: 40,
        alignSelf: "center",
        marginVertical: 16,
    },
    buttonContainer: { paddingVertical: 25 },
    inputContainer: { justifyContent: 'flex-start', width: "100%", paddingBottom: 12 },
    inputText: { fontSize: 16, fontWeight: "500", color: "#ffffff" }
});

export default styles;
