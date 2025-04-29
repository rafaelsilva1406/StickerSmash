import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const [loaded] = useFonts({
     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf")});

  useEffect(() => {
    if(loaded) {
      SplashScreen.hideAsync();
    }
  },[loaded]);

  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      <StatusBar style="light" />
      <Stack> 
    <Stack.Screen name="(tabs)" options={{
      headerShown: false
      }} />
    <Stack.Screen name="+not-found" />
  </Stack>
    </GestureHandlerRootView>
  );
}
