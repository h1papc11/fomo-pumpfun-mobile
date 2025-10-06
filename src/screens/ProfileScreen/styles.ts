import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    scroll: {
        flexGrow: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: 20
    },
    profileSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 10,
    },
    username: {
        fontSize: 15,
        fontWeight: "500",
        color: "#fff",
    },
    wallet: {
        fontSize: 12,
        color: "#949494",
    },
    walletIdContainer: { flexDirection: "row", gap: 5, justifyContent: "center", alignItems: 'center' },
    menuIcon: {
        fontSize: 20,
        color: "#fff",
    },
    balanceContainer: {
        marginTop: 80,
        alignSelf: "center"
    },
    balance: {
        fontSize: 20,
        fontWeight: "500",
        color: "#fff",
    },
    subBalance: {
        fontSize: 12,
        color: "#949494",
        fontWeight: "400",
        textAlign: "center"
    },
    statsContainer: {
        flexDirection: "row",
        justifyContent: 'space-evenly',
        width: "60%",
        alignSelf: "center",
        marginTop: 30
    },
    stat: {
        alignItems: "center",
    },
    statValue: {
        fontSize: 13,
        fontWeight: "500",
        color: "#fff",
    },
    statLabel: {
        fontSize: 12,
        color: "#949494",
        fontWeight: "400"
    },
    tabs: {
        flexDirection: "row",
        marginTop: 30,
        gap: 20,
        paddingLeft: 10
    },
    activeTab: {
        color: "#25E9FF",
        fontSize: 12,
        fontWeight: "600",
        borderBottomWidth: 1,
        borderBottomColor: "#25E9FF",
    },
    tab: {
        fontSize: 12,
        fontWeight: "600",
        color: "#aaa",
    },
    coinsRow: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingHorizontal: 10,
    },
    coinIcon: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    coinTitle: {
        fontSize: 14,
        color: "#fff",
    },
    coinSubtitle: {
        fontSize: 12,
        color: "#aaa",
    },
    coinValue: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
    },
    coinHeaderTextStyle: { fontSize: 10, fontWeight: '400', color: "#949494", marginBottom: 10 },
    coinInitialContainer: { flexDirection: "row" },
    coinMiddleContainer: { alignItems: "center", flex: 1 },
    coinListContainer: { marginTop: 15 },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },
    innerContainer: {
        width: "100%",
        alignItems: "center"
    },
    avatarContainer: {
        marginBottom: 16,
        alignItems: "center"
    },
    overlayAvatar: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: "#222",
        justifyContent: "center",
        alignItems: "center"
    },
    avatarEmoji: {
        width: 84,
        height: 84,
        resizeMode: 'contain'
    },
    cameraBtn: {
        position: "absolute",
        bottom: 0,
        right: 0,
        backgroundColor: "#000",
        borderRadius: 12,
        padding: 4
    },
    cameraIcon: {
        fontSize: 12,
        color: "#fff"
    },
    label: {
        width: "100%",
        marginTop: 8,
        marginBottom: 4,
        fontSize: 14,
        fontWeight: "600",
        color: "#fff"
    },
    input: {
        width: "100%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 12,
        padding: 10,
        color: "#fff",
        marginBottom: 8,
        paddingVertical: 15
    },
    hint: {
        fontSize: 12,
        color: "#aaa",
        marginBottom: 12,
        alignSelf: "flex-start"
    },
    saveBtn: {
        marginTop: 12,
        width: "100%",
        backgroundColor: "#3AB5F8",
        padding: 14,
        borderRadius: 8,
        alignItems: "center"
    },
    saveBtnText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16
    },
    // Action Buttons
    actionButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 30,
        paddingHorizontal: 20,
    },
    actionButton: {
        alignItems: "center",
    },
    actionIconContainer: {
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 8,
    },
    actionButtonLabel: {
        fontSize: 12,
        color: "#fff",
        fontWeight: "500",
    },
    // Complete Profile Card
    completeProfileCard: {
        backgroundColor: "#1a1a1a",
        borderRadius: 16,
        marginHorizontal: 20,
        marginTop: 24,
        overflow: "hidden",
    },
    completeProfileBackgroundImage: {
        borderRadius: 16,
        opacity: 0.3,
    },
    completeProfileCardContent: {
        flexDirection: "row",
        alignItems: "center",
        padding: 16,
    },
    progressCircle: {
        width: 56,
        height: 56,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 12,
        position: "relative",
    },
    progressText: {
        position: "absolute",
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
    },
    completeProfileTextContainer: {
        flex: 1,
    },
    completeProfileTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 4,
    },
    completeProfileSubtitle: {
        fontSize: 12,
        color: "#949494",
    },
    // Balances Section
    balancesSection: {
        backgroundColor: "#1a1a1a",
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 20,
        marginTop: 16,
    },
    balancesSectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    balancesSectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        marginLeft: 8,
    },
    balanceItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    balanceItemLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    balanceIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    balanceTokenName: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 4,
    },
    balanceTokenAmount: {
        fontSize: 12,
        color: "#949494",
    },
    balanceTokenValue: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
    },
    // Transaction Section
    transactionSection: {
        backgroundColor: "#1a1a1a",
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 20,
        marginTop: 16,
    },
    transactionSectionHeader: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    transactionSectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        color: "#fff",
        marginLeft: 8,
    },
    transactionItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    transactionItemLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    transactionIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    transactionTitle: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 4,
    },
    transactionSubtitle: {
        fontSize: 12,
        color: "#949494",
    },
    transactionItemRight: {
        alignItems: "flex-end",
    },
    transactionAmount: {
        fontSize: 14,
        fontWeight: "600",
        color: "#fff",
        marginBottom: 4,
    },
    transactionTime: {
        fontSize: 12,
        color: "#949494",
    },
});
