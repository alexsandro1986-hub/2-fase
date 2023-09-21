import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";



export default function Info(){
const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text>Tela informações</Text>
            <Button  title="ir Home" onPress={()=> navigation.navigate('Home')}/>
            <Button  title="voltar Sobre" onPress={()=> navigation.navigate('Sobre')}/>

       </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})