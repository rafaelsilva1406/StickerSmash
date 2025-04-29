import { styles } from "@/styles/main";
import { Image } from "expo-image";

type Props = {
    imgSource: string;
}

export default function ImageViewer({imgSource}: Props) {
    return <Image source={imgSource} style={styles.image} />;
}