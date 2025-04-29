import { View } from "react-native";
import { styles } from "../../styles/main";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import * as ImagePicker from "expo-image-picker";
import { useEffect, useRef, useState } from "react";
import IconButton from "@/components/IconButton";
import CircleButton from "@/components/CircleButton";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiList from "@/components/EmojiList";
import EmojiSticker from "@/components/EmojiSticker";
import * as MediaLibrary from "expo-media-library";
import { captureRef } from "react-native-view-shot";

const PlaceholderImage = require("../../assets/images/background-image.png");

export default function Index() {
  const imageRef = useRef(null);
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();


  const [selectImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [pickedEmoji, setPickedEmoji] = useState<string | undefined>(undefined)

  useEffect(() => {
    if(!permissionResponse?.granted) {
      requestPermission();
    }
  },[]);

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if(!result.canceled) {
      setSelectedImage(result.assets[0].uri);
      setShowAppOptions(true);
    } else {
      alert("You did not select any image.");
    }
  };

  const onReset = () => {
    setShowAppOptions(false);
    setPickedEmoji(undefined);
  };

  const onModalClose = () => {
    setIsModalVisible(false);
  };

  const onAddSticker = () => {
    setIsModalVisible(true);
  };

  const onSaveImageAsync = async () => {
    try{
      const localUri = await captureRef(imageRef);

      await MediaLibrary.saveToLibraryAsync(localUri);
      
      if(localUri){
        alert("Saved!");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <View ref={imageRef} collapsable={false} style={styles.imageContainer}>
        <ImageViewer imgSource={selectImage || PlaceholderImage} />
        {pickedEmoji && (
          <EmojiSticker imageSize={40} stickerSource={pickedEmoji}/>
        )}
      </View>
      {showAppOptions ? (
        <View style={styles.optionsContainer}> 
          <View style={styles.optionsRow}>
            <IconButton icon="refresh" label="Reset" onPress={onReset}/>
            <CircleButton onPress={onAddSticker} />
            <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
          </View>
        </View>
      ) : (
        <View style={styles.footerContiner}>
          <Button label="Choose a photo" theme="primary" onPress={pickImageAsync} />
          <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
        <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
      </EmojiPicker>
    </View>
  );
}


