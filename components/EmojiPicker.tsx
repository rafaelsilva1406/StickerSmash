import { styles } from "@/styles/main";
import { MaterialIcons } from "@expo/vector-icons";
import { Modal, Pressable, View, Text } from "react-native";

type Props = {
    isVisible: boolean;
    children: React.ReactNode;
    onClose: () => void;
};

export default function EmojiPicker({isVisible, children, onClose}: Props) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <View style={styles.modalContent}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    );
}