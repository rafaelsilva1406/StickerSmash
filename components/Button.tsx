import { styles } from "@/styles/main";
import { FontAwesome } from "@expo/vector-icons";
import { Pressable, View, Text } from "react-native";

type Props = {
    label: string;
    theme?: "primary";
    onPress?: () => void;
}

export default function Button({label, theme, onPress}: Props) {
    if(theme === "primary") {
        return (
            <View style={[
                    styles.buttonContainer,
                    { borderWidth: 4, borderColor: "#E29E3C", borderRadius: 18}
                    ]}>
                <Pressable
                    style={[styles.button, { backgroundColor: "#fff"}]}
                    onPress={onPress}>
                    <FontAwesome
                        name="picture-o"
                        size={18}
                        style={styles.buttonIcon}
                    />
                   <Text style={[styles.buttonLabel, { color: "#25292e"}]}>
                        {label}
                    </Text>
                </Pressable>
            </View>
        );
    }
    return (
        <View style={styles.buttonContainer}>
            <Pressable
                style={styles.button}
                onPress={onPress}>
               <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    );
}