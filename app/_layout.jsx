import { Stack } from "expo-router";
import "../global.css"

export default function RootLayout() {
  return <Stack screenOptions={{headerShown: false}}>
    <Stack.Screen name="index" />
    <Stack.Screen name="Electritioncompo/electritioncall" />
      <Stack.Screen name="Plumbcompo/plumbercall" />
      <Stack.Screen name="Gascompo/gascall" />
      <Stack.Screen name="nav/healthcare" />
      <Stack.Screen name="nav/publiccare" />
      <Stack.Screen name="Autocompo/autocall" />
      <Stack.Screen name="Carcompo/carcall" />
      <Stack.Screen name="nav/mechanicrep" />
   {/* <Stack.Screen name="(tabs)" /> */}

  </Stack>;
}
