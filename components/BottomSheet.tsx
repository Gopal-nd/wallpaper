import React, { useCallback, useMemo, useRef } from 'react';
import { View, StyleSheet, Button, useColorScheme, Pressable, Text, Image } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Wallpaper } from './ImageCard';
import { ThemedView } from './ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@/constants/Colors';
import { ThemedText } from './ThemedText';
import * as MediaLibrary from 'expo-media-library';
import * as FileSystem from 'expo-file-system';


export const DownloadPicture = ({ onClose,wallpaer}: {
    onClose: () => void
    wallpaer: Wallpaper
}) => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  console.log(wallpaer.uri)

 
  const theme = useColorScheme() ?? 'light';
  // renders
  return (
  
    <BottomSheet
    onClose={onClose}
    snapPoints={["95%"]}
    ref={bottomSheetRef}
    onChange={handleSheetChanges}
    enablePanDownToClose={true}
    handleIndicatorStyle={{ display: "none" }}
    handleStyle={{ display: "none" }}
  >
    <BottomSheetView style={styles.contentContainer}>
      <ThemedView style={{flex: 1}}>
        <Image style={styles.image} source={{uri: wallpaer.uri}} />
        <View style={styles.topbar}>
          <Ionicons
              onPress={onClose}
              name={'close'}
              size={24}
              color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
          />
          <View style={styles.topbarInner}>
            <Ionicons
                name={'heart'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
            />
            <Ionicons
                name={'share'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.text}
                style={{paddingLeft: 4}}
            />
          </View>
        </View>  
        <ThemedView style={styles.textContainer}>
            <ThemedText style={styles.text}>{wallpaer.name}</ThemedText>
          </ThemedView>
        <DownloadButton url={wallpaer.uri} />
      </ThemedView>
    </BottomSheetView>
  </BottomSheet>
                
  );
}

function DownloadButton({ url }: { url: string }) {
  const theme = useColorScheme() ?? 'light';
  return <Pressable onPress={async () => {
    let date = new Date().getTime();
    let fileUri = FileSystem.documentDirectory + `${date}.jpg`;
    
    try {
        await FileSystem.downloadAsync(url, fileUri)
      
          MediaLibrary.createAssetAsync(fileUri)
          alert("Image saved")
        
    } catch (err) {
        console.log("FS Err: ", err)
    }
  }} style={{
    backgroundColor: "black",
    padding: 10,
    marginHorizontal: 40,
    marginVertical: 10,
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
  
    borderWidth: 1,
    borderColor: theme === 'light' ? Colors.light.text : Colors.dark.icon,
  }}>
    <Ionicons
      name={'download'}
      size={24}
      color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
      style={{paddingRight: 4}}
    />
    <Text style={{
      fontSize: 20,
      color: "white",
      fontWeight: "600",
    }}>Download</Text>
  </Pressable>
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
  },
  image: {
    height: "84%",
    borderRadius: 15,
  },
  topbar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%"
  },
  topbarInner: {
    display: "flex",
    flexDirection: "row",
  },
  textContainer: {
    width: "100%"
  },
  text: {
    padding:10,
    textAlign: "center",
    fontSize: 25,
    paddingBottom: 10,
    fontWeight: "600"
  }
});