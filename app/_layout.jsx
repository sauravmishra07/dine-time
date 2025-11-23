import { Stack } from "expo-router";
import '../global.css';
import { Text } from "react-native";
export default function RootLayout() {
  return <Stack screenOptions={{headerShown: false, animation: 'slide_from_right' }}> 
    <Stack.Screen name="index"/>
    <Stack.Screen name="{tabs}"/>
  </Stack>;
}
