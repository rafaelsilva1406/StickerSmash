import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: "#E29E3C",
            headerStyle: {
                backgroundColor: "#222"
            },
            headerShadowVisible: false,
            headerTintColor: "#fff",
            tabBarStyle: {
                backgroundColor: "#222"
            }
        }}
    > 
    <Tabs.Screen name="index" options={{
      headerTitle: "Sticker Smash",
      tabBarIcon: ({focused, color}) => (
        <Ionicons 
            name={focused ? "home-sharp" : "home-outline"} 
            color={color}
            size={30} 
        />
      )
      }} />
  </Tabs>
  );
}
