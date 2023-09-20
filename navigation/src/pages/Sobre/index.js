import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";

export default function Sobre(){
   const navigation = useNavigation();
   
    return(
        <View style={styles.container}>
            <Text>Tela Sobre</Text>
            <Button  title="voltar Home" onPress={()=> navigation.navigate('Home')}/>
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