



import { View, StyleSheet, Image, useColorScheme, Pressable } from "react-native";
import { ThemedText } from "./ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from '@/constants/Colors';
import { FullWallpaper } from "@/hooks/useWallpapers";

export type Wallpaper = {
    name: string,
    uri: string
}

export function ImageCard({ wallpaper, onPress }: {
    wallpaper: FullWallpaper,
    onPress: () => void
}) {
    const theme = useColorScheme() ?? 'light'

    return <Pressable onPress={onPress}>
        <View style={{marginBottom: 10}}>
            <Image source={{uri: wallpaper.uri}} style={styles.image} />
            <View style={styles.labelContainer}>
                <ThemedText style={styles.label}>{wallpaper.name}</ThemedText>
                <View style={styles.iconContainer}>
                    <Ionicons
                    
                        name={'heart'}
                        size={18}
                        color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                    />
                </View>
            </View>
        </View>
    </Pressable>
}

const styles = StyleSheet.create({
    iconContainer: {
        display: "flex",
        justifyContent: "center"
    },
    image: {
        flex: 1,
        height: 250,
        borderRadius: 20
    },
    label: {
        color: "white"
    },
    labelContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(0, 0 , 0, 0.5)",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        
    }
})