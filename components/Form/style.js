import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        alignItems: 'center',
        paddingTop: 30,
    },
    form: {
        width: '100%',
        height: 'auto',
        marginTop: 30,
        padding: 10,
        alignItems: 'center',
    },
    formLabel: {
        color: "#2A2A2A",
        fontSize: 18,
    },
    formInput: {
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#FF004355',
        height: 40,
        margin: 12,
        textAlign: 'center'
    },
    formButton: {
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#FF0043',
        paddingVertical: 14,
        marginTop: 30,
    },
    formTextButton: {
        fontSize:20,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    styleErrorMsg: {
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        
    },
    exibicaoResultado: {
        width: '100%',
        height: '50%',
        alignItems: 'center',
    },
    mostraListaImc: {
        marginTop: 20,
        textAlign: 'center',
    },
    resultadoItemImc: {
        fontSize: 26,
        color: '#FF0043',
        minHeight: '10%',
        width: "100%",
        padding: 20,

    },
    textoResoltadoItemImc: {
        color: '#FF0043',
        fontSize: 20
    }
});

export default styles;