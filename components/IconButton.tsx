import { styles } from "@/styles/main";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

type Props = {
    icon: keyof typeof MaterialIcons.glyphMap;
    label: string;
    onPress: () => void;
}

export default function IconButton({icon, label, onPress}: Props) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            <MaterialIcons name={icon} size={23} color="#fff"/>
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}