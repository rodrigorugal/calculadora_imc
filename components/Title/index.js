import React from 'react';
import {
    View, 
    Text
} from 'react-native';
import styleTop from './style';

export default function Title(){
    return(
        <View style={styleTop.boxTitle}>
            <Text style={styleTop.textTitle}> CALCULE_IMC </Text>
        </View>
    )
}
