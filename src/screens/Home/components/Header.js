import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import logo from '../../../assets/logo.png';

export default function Header() {
    return <View>
        <Image source={logo} />
        <Text>Olá, Seu nome!</Text>
        <Text>Encontre os melhores produtores</Text>
    </View>
}

const styles = StyleSheet.create({

});