import React from 'react';
import { Image, StyleSheet, Dimensions, Text } from 'react-native';
import topo from '../../assets/feliz_triste.jpg';

const width = Dimensions.get('screen').width;

export default function Cesta(){
    return <>
        <Image source={topo} style={estilos.topo}/>
        <Text style={estilos.titulo}>Detalhe da Cesta</Text>
    </>
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 760 / 1265 * width
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        marginTop: 16
    }
})