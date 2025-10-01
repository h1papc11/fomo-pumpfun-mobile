import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    buttonSolid: {
        width: "100%",
        paddingVertical: 20,
        borderRadius: 16,
        backgroundColor: "#3AB5F8",
        marginBottom: 15,
    },
    buttonOutline: {
        width: "100%",
        paddingVertical: 20,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#9794AA",
        marginBottom: 20,
        alignItems: "center",
    },
    leftButtonAlign: { alignItems: 'flex-start', },
    buttonContent: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 15
    },
    leftButtonContainer: { alignItems: "flex-start", justifyContent: "flex-start", },
    assetIcon: {
        width: 22,
        height: 22,
        resizeMode: "contain",
        marginRight: 10,
    },
    vectorIcon: {
        marginRight: 10,
    },
    svgIcon: { marginRight: 10 },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "500",
    },
    rightIcons: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end"
    },
});

export default styles;
