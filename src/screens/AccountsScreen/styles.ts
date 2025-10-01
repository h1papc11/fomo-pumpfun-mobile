import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
        padding: 20,
    },
    header: {
        color: "white",
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        marginVertical: 20,
    },
    sectionTitle: {
        color: "white",
        fontSize: 14,
        fontWeight: "500",
        marginTop: 10,
        marginBottom: 6,
    },
    accountCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#1c1c1e",
        borderRadius: 12,
        padding: 15,
        marginBottom: 12,
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 22,
        marginRight: 12,
    },
    accountInfo: {
        flex: 1,
    },
    accountName: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    accountAddress: {
        color: "gray",
        fontSize: 13,
        marginTop: 2,
    },
    rightSection: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    balance: {
        color: "white",
        fontSize: 15,
        fontWeight: "600",
        marginRight: 8,
    },
    addButtonSpacing: {
        marginTop: "auto",
        marginBottom: 20,
    },
});

export default styles;
