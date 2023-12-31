import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Sobre from "./src/pages/Sobre";
import Home from "./src/pages/Home";
import Info from "./src/pages/Info";
const Stack = createNativeStackNavigator();


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Sobre' component={Sobre} />
      <Stack.Screen name='Info' component={Info} />
     </Stack.Navigator>
    </NavigationContainer>
  )
}
