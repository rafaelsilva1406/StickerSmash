import { Link, Stack } from "expo-router";
import { View } from "react-native";
import { styles } from "../styles/main";

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{title:"Oops! Not Found"}}></Stack.Screen>
            <View style={styles.container}>
                <Link href="/" style={styles.button}>
                    return to Home!
                </Link>
            </View>
        </>
    );
}