import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    nextButton: {
        fontSize: 14,
        color: '#949494',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#949494',
        paddingHorizontal: 16,
        paddingVertical: 15,
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        marginLeft: 5,
        fontSize: 14,
        color: '#fff',
    },
    tabContainer: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        marginBottom: 16,
        gap: 8,
    },
    tab: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: 'transparent',
    },
    activeTab: {
        backgroundColor: '#00A8E8',
    },
    tabText: {
        fontSize: 12,
        fontWeight: '500',
        color: '#949494',
    },
    activeTabText: {
        color: '#fff',
    },
    recipientItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#1a1a1a',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 12,
    },
    recipientInfo: {
        flex: 1,
    },
    username: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4,
    },
    followers: {
        fontSize: 12,
        color: '#949494',
    },
});
