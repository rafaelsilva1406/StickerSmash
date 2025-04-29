import { styles } from "@/styles/main";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, View } from "react-native";

type Props = {
    onPress: () => void;
}

export default function CircleButton({ onPress }: Props) {
    return (
        <View style={styles.circleButtonContainer}>
            <Pressable style={styles.circleButton} onPress={onPress}>
                <MaterialIcons name="add" size={38} color="#25292e" />
            </Pressable>
        </View>
    );
}