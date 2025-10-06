import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    subheader: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "500",
        marginBottom: 5,
        alignSelf: "center"
    },
    subtitleSmall: {
        fontSize: 12,
        color: "#fff",
        marginBottom: 20,
        textAlign: "center",
    },
    buttonContainer: { paddingVertical: 25 },
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
    inputContainer: { justifyContent: 'flex-start', width: "100%", paddingBottom: 12 },
    inputText: { fontSize: 16, fontWeight: "500", color: "#ffffff" },
    input: {
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderColor: "#949494",
        borderRadius: 16,
        color: "#fff",
        marginBottom: 15,
        paddingVertical: 25
    },
})

export default styles