import React, { useState } from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from "react-native";


import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function Welcome() {
    const [visible, setVisible] = useState(false);// constante que salva o valor do estado e a funcao que atualiza o valor do state

    function handleVisibility(){
        if(visible == true){
            setVisible(false)
        } else {
            setVisible(true)

        }
    }

    return (
        <SafeAreaView style={style.container}> 
            <Text style={style.title}>
                Gerencie {'\n'}
                 suas plantas de {'\n'}
                 forma fácil
            </Text>
            {
                visible &&
                <Image source={wateringImg} style={style.image}/>
            }
            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas.
                Nós cuidamos de lmebrar você sempre que precisar.
            </Text>
            <TouchableOpacity 
                style={style.button} 
                activeOpacity={0.7}
            >
                <Text style={style.buttonText}>Ir</Text>
            </TouchableOpacity>
            <Button title="Ocultar img" onPress={handleVisibility} />
            <Button title="o que será?" />
            {/* <Button /> */}
            {/* <Button /> */}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({

    container: {
      flex: 1,//para alinhar na tela toda, ocupar td o espaço
      justifyContent: 'center',
      alignItems: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading
    },
    subtitle:{
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 20,
        color: colors.heading
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56
    },
    image: {
        width: 292,
        height: 284
    },
    buttonText: {
        color: colors.white,
        fontSize: 24
    }
  })