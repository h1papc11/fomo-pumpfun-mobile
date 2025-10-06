import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#949494',
        paddingHorizontal: 16,
        paddingVertical: 15,
        marginBottom: 16,
    },
    searchInput: {
        flex: 1,
        marginLeft: 5,
        fontSize: 14,
        color: '#fff',
    },
    coinItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#1a1a1a',
    },
    coinLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    coinIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    coinName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
        marginBottom: 4,
    },
    coinAmount: {
        fontSize: 12,
        color: '#949494',
    },
    coinValue: {
        fontSize: 14,
        fontWeight: '600',
        color: '#fff',
    },
});
