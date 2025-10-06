import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "600",
        marginBottom: 5,
        alignSelf: "center"
    },
    subtitle: {
        fontSize: 14,
        color: "#fff",
        marginBottom: 30,
        alignSelf: "center"
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
    buttonContainer: { paddingVertical: 25 },
    loginButton: { marginBottom: 0 }
})

export default styles