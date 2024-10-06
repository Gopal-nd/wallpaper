
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import useWallpapers from '@/hooks/useWallpapers';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageCard, Wallpaper } from '@/components/ImageCard';
import { useState } from 'react';
import { DownloadPicture } from '@/components/BottomSheet';

export default function Explore() {
  // const color = useThemeColor()
  const walpapers = useWallpapers()
  const [selectedwallparets, setSelectedwallpares] = useState<null | Wallpaper>(null)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView headerImage={<Image style={{ flex: 1 }} source={{ uri: 'https://imgs.search.brave.com/fK5vAPC1LQBLA-6Di-TOeorQUI2V7R_uUXbi-YK8wzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85OS82/Ni83VWt0WFlULndl/YnA' }} />} headerBackgroundColor={{
        dark: 'black',
        light: 'white'
      }}>

        <ThemedView style={{ display: 'flex', flex: 1, gap: 10, flexDirection: 'row' }}>
          <ThemedView style={{ flex: 1 }}>
            <FlatList
              data={walpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => <ImageCard wallpaper={item} onPress={() => setSelectedwallpares(item)} />}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={{ flex: 1 }}>
            <FlatList
              data={walpapers.filter((_, index) => index % 2 !== 0)}
              renderItem={({ item }) => <ImageCard wallpaper={item} onPress={() => setSelectedwallpares(item)} />}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>

        </ThemedView>
      </ParallaxScrollView>
      {selectedwallparets && <DownloadPicture onClose={() => setSelectedwallpares(null)} wallpaer={selectedwallparets} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  text: {
    color: 'black',
  },
});
