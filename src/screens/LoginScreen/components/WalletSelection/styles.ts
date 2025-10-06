import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        padding: 16,
        width: "100%",
    },
    title: {
        fontSize: 22,
        color: "#fff",
        fontWeight: "600",
        marginBottom: 30,
        alignSelf: "center"
    },
    titleAlign: { marginBottom: 10, },
    subtitle: {
        fontSize: 12,
        color: "#949494",
        marginBottom: 20,
        textAlign: "center"
    },
    input: {
        width: "100%",
        padding: 15,
        borderWidth: 1,
        borderColor: "#949494",
        borderRadius: 16,
        color: "#fff",
        marginBottom: 15,
        flexDirection: "row",
        alignItems: "center",
    },
    inputStyle: {
        flex: 1,
        marginLeft: 5,
    },
    buttonContainer: {
        paddingVertical: 25,
    },
});

export default styles;
