import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    caixaResultado: {
        flex: 1,
        minHeight: '20%',
        marginTop: 20,
        paddingTop:15,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    informacao: {
        fontSize: 18,
        color: "#2A2A2A",
        fontWeight: "bold",
    },
    valorResult: {
        fontSize: 48,
        color: "#FF0043",
        fontWeight: "bold",
    },
    boxShareButton: {
        width:'100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    shared: {
        backgroundColor: '#1877f2',
        borderRadius: 50,
        paddingVertical: 5,
    },
    sharedText: {
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    }
});

export default styles;