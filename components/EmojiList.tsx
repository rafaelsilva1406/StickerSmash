import { styles } from "@/styles/main";
import { useState } from "react";
import { FlatList, Pressable } from "react-native";
import { Image } from "expo-image";


type Props = {
    onSelect: (image: string) => void;
    onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {
    const [emoji] = useState([
        require("../assets/images/emoji1.png"),
        require("../assets/images/emoji2.png"),
        require("../assets/images/emoji3.png"),
        require("../assets/images/emoji4.png"),
        require("../assets/images/emoji5.png"),
        require("../assets/images/emoji6.png"),
    ]);

    return (
        <FlatList
            horizontal
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({item, index}) => (
                <Pressable 
                    onPress={() => {
                        onSelect(item);
                        onCloseModal();
                    }}
                >
                    <Image source={item} key={index} style={styles.imageEmoji} />
                </Pressable>
            )}
        >

        </FlatList>
    );
}