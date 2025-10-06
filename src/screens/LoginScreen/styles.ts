import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footerImage: {
        width: 150,
        height: 40,
        alignSelf: "center",
        marginVertical: 16,
    },
    icon: {
        width: 150,
        height: 150,
        marginBottom: 30,
        resizeMode: "contain",
        alignSelf: "center"
    },
    footerAlign: { marginVertical: 0, marginTop: 10 },
    stepContainer: {
        width: "100%"
    },
    scroll: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
});

export default styles;
