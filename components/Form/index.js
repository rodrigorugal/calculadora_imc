import React, { useState } from 'react';
import {
    TouchableOpacity, 
    Text, 
    TextInput, 
    View, 
    Vibration, 
    Pressable, 
    Keyboard,
    FlatList
} from 'react-native'
import ResultIMC from './ResultIMC';
import styles from './style';

export default function Form(){

    const [altura, setAltura] = useState(null)
    const [peso, setPeso] = useState(null)
    const [result, setResult] = useState(null)
    const [message, setMessage] = useState('Preencha o Peso e Altura')
    const [textButton, setTextButton] = useState('Calcular')
    const [ errorMsg, setErrorMsg] = useState(null)
    const [ listaIMC, setListaIMC] = useState([])

    const calculate = ()=>{
        let formatoAltura = altura.replace(",", ".")
        let totalImc = (peso/(formatoAltura*formatoAltura)).toFixed(2)
        setListaIMC((arr)=>[...arr,{id: new Date().getTime(), imc:totalImc}])
        setResult(totalImc)
        console.log(listaIMC)
    }

    const verificarIMC =()=>{
        if (result == null) {
            Vibration.vibrate();
            setErrorMsg('Campo obrigatório*')
        }
    }

    const validacao=()=>{
        if (peso != null && altura != null) {
            setMessage('Seu IMC é igual: ')
            calculate()
            setPeso(null)
            setAltura(null)
            setTextButton('Calcular Novamente')
            setErrorMsg(null)
        } 
        else {
            verificarIMC()
            setResult(null)
            setTextButton('Calcular')
            setMessage('Preencha o Peso e Altura')
        }
    }

    return(
        <View style={styles.formContext}>
            {result == null ? 
                <Pressable onPress={Keyboard.dismiss} style={styles.form} >
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.styleErrorMsg}>{errorMsg}</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setAltura}
                        value={altura}
                        placeholder="Ex: 1.80"
                        keyboardType='numeric'
                    />

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.styleErrorMsg}>{errorMsg}</Text>
                    <TextInput
                        style={styles.formInput}
                        onChangeText={setPeso}
                        value={peso}
                        placeholder="Ex: 75.340"
                        keyboardType='numeric'
                    />
                    <TouchableOpacity 
                        style={styles.formButton}
                        onPress={()=> validacao()}
                    >
                        <Text style={styles.formTextButton}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
            :
                <View style={styles.exibicaoResultado}>
                    <ResultIMC resultImc={result} msgResultado={message} />
                    <TouchableOpacity 
                        style={styles.formButton}
                        onPress={()=> validacao()}
                    >
                        <Text style={styles.formTextButton}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList
                showsVerticalScrollIndicator={false}
                style={styles.mostraListaImc}
                data={listaIMC.reverse()}
                renderItem={({item}) => {
                    return (
                        <Text keyExtractor={ (item)=> item.id } style={styles.resultadoItemImc}>
                            <Text style={styles.textoResoltadoItemImc} >Resultado IMC = </Text>
                            {item.imc}
                        </Text>
                    )
                }}
                keyExtractor={(item) => { item.id.toString() }}
            />
        </View>
    )
}