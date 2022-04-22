import React from 'react';
import { Text, View, TouchableOpacity, Share } from 'react-native'
import styles from './style';

export default function ResultIMC(props){

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC hoje é: " + props.resultImc
        })
    }

    return(
        <View style={styles.caixaResultado}>
            <Text style={styles.informacao}>{props.msgResultado}</Text>
            <Text style={styles.valorResult}>{props.resultImc}</Text>
            <View style={styles.boxShareButton}>
                <TouchableOpacity 
                    onPress={onShare}
                    style={styles.shared}>
                    <Text style={styles.sharedText}>Share</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}