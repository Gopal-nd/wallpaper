import React, { useState } from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import useWallpapers, { FullWallpaper } from '@/hooks/useWallpapers';
import { Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ImageCard } from '@/components/ImageCard';
import { DownloadPicture } from '@/components/BottomSheet';

const IMAGES_PER_LOAD = 2; // Number of images to load at a time

export default function Explore() {
  const wallpapers: FullWallpaper[] = useWallpapers();
  const [displayedWallpapers, setDisplayedWallpapers] = useState<FullWallpaper[]>(wallpapers.slice(0, IMAGES_PER_LOAD));
  const [page, setPage] = useState<number>(1);
  const [selectedWallpaper, setSelectedWallpaper] = useState<null | FullWallpaper>(null);

  const loadMoreImages = () => {
    const nextPage = page + 1;
    const startIndex = page * IMAGES_PER_LOAD;
    const endIndex = startIndex + IMAGES_PER_LOAD;

    if (startIndex < wallpapers.length) {
      const newImages = wallpapers.slice(startIndex, endIndex);
      setDisplayedWallpapers((prevImages) => [...prevImages, ...newImages]);
      setPage(nextPage);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView
        text='Explore'
        headerImage={<Image style={{ flex: 1 }} source={{ uri: 'https://imgs.search.brave.com/fK5vAPC1LQBLA-6Di-TOeorQUI2V7R_uUXbi-YK8wzI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS85OS82/Ni83VWt0WFlULndl/YnA' }} />}
        headerBackgroundColor={{
          dark: 'black',
          light: 'white'
        }}
      >
        <ThemedView style={{ display: 'flex', flex: 1, gap: 10, flexDirection: 'row' }}>
          <ThemedView style={{ flex: 1 }}>
            <FlatList
              data={displayedWallpapers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => <ImageCard wallpaper={item} onPress={() => setSelectedWallpaper(item)} />}
              keyExtractor={(item) => item.name}
              onEndReached={loadMoreImages} // Trigger loading more images when scrolled near the end
              onEndReachedThreshold={0.5} // Adjust the threshold as needed
            />
          </ThemedView>
          <ThemedView style={{ flex: 1 }}>
            <FlatList
              data={displayedWallpapers.filter((_, index) => index % 2 !== 0)}
              renderItem={({ item }) => <ImageCard wallpaper={item} onPress={() => setSelectedWallpaper(item)} />}
              keyExtractor={(item) => item.name}
              onEndReached={loadMoreImages} // Trigger loading more images when scrolled near the end
              onEndReachedThreshold={0.5} // Adjust the threshold as needed
            />
          </ThemedView>
        </ThemedView>
      </ParallaxScrollView>
      {selectedWallpaper && <DownloadPicture onClose={() => setSelectedWallpaper(null)} wallpaer={selectedWallpaper} />}
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
  },
  text: {
    color: 'black',
  },
};
