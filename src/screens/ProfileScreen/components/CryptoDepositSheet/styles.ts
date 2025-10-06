import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingTop: 40,
    },
    iconContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#1a1a1a',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    mainText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 24,
        lineHeight: 24,
    },
    messageBox: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: '#00A8E8',
        borderRadius: 12,
        padding: 16,
        width: '100%',
    },
    messageText: {
        fontSize: 14,
        color: '#fff',
        lineHeight: 20,
        textAlign: 'center',
    },
});
