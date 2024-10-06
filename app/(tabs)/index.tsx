import { DownloadPicture } from '@/components/BottomSheet';
import { ImageCard } from '@/components/ImageCard';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedView } from '@/components/ThemedView';
import { useLibraryWallpapers, useLikedWallpapers, useSuggestedWallpapers, Wallpaper } from '@/hooks/useWallpapers';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const Tab = createMaterialTopTabNavigator();

export default function Foryou() {
  return (
    <SafeAreaView style={{flex: 1}}>
    <Tab.Navigator>
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
    </SafeAreaView>
  );
}


function Liked() {
  const [wallpaper , setWallpaper] = useState<null|Wallpaper>();
  const likedWallpaers = useLikedWallpapers()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ParallaxScrollView text='Liked' headerImage={<Image style={{ flex: 1 }} source={{ uri: 'https://img.freepik.com/free-photo/vestrahorn-mountains-stokksnes-iceland_335224-667.jpg?w=900&t=st=1728220135~exp=1728220735~hmac=17de20307c4902b054e5b1ba93042f7257a203130ee08f244efcec5ddb5d0e5d' }} />} headerBackgroundColor={{
        dark: 'black',
        light: 'white'
      }}>

        <ThemedView style={{ display: 'flex', flex: 1, gap: 10, flexDirection: 'row' }}>
          <ThemedView style={{ flex: 1 }}>
            <FlatList
              data={likedWallpaers.filter((_, index) => index % 2 === 0)}
              renderItem={({ item }) => <ImageCard wallpaper={item} onPress={() => setWallpaper(item)} />}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>
          <ThemedView style={{ flex: 1 }}>
            <FlatList
              data={likedWallpaers.filter((_, index) => index % 2 !== 0)}
              renderItem={({ item }) => <ImageCard wallpaper={item} onPress={() => setWallpaper(item)} />}
              keyExtractor={(item) => item.name}
            />
          </ThemedView>

        </ThemedView>
      </ParallaxScrollView>
      {wallpaper && <DownloadPicture onClose={() => setWallpaper(null)} wallpaer={wallpaper} />}
    </SafeAreaView>
  );
}

function Suggested() {
  const [selectedwallparets, setSelectedwallpares] = useState<null|Wallpaper>(null);
  const suggested = useSuggestedWallpapers()
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ParallaxScrollView text='Suggested' headerImage={<Image style={{ flex: 1 }} source={{ uri: 'https://wallpapers.com/images/featured-small/cool-pictures-1n59bkbhc8mieulq.webp' }} />} headerBackgroundColor={{
      dark: 'black',
      light: 'white'
    }}>

      <ThemedView style={{ display: 'flex', flex: 1, gap: 10, flexDirection: 'row' }}>
        <ThemedView style={{ flex: 1 }}>
          <FlatList
            data={suggested.filter((_, index) => index % 2 === 0)}
            renderItem={({ item }) => <ImageCard wallpaper={item} onPress={() => setSelectedwallpares(item)} />}
            keyExtractor={(item) => item.name}
          />
        </ThemedView>
        <ThemedView style={{ flex: 1 }}>
          <FlatList
            data={suggested.filter((_, index) => index % 2 !== 0)}
            renderItem={({ item }) => <ImageCard wallpaper={item} onPress={() => setSelectedwallpares(item)} />}
            keyExtractor={(item) => item.name}
          />
        </ThemedView>

      </ThemedView>
    </ParallaxScrollView>
    {selectedwallparets && <DownloadPicture  onClose={() => setSelectedwallpares(null)} wallpaer={selectedwallparets}  />}
  </SafeAreaView>
  );
}
function Library() {
  const [selectedwallparets, setSelectedwallpares] = useState<null|Wallpaper>(null);
  const library = useLibraryWallpapers()
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ParallaxScrollView text='Library' headerImage={<Image style={{ flex: 1 }} source={{ uri: 'https://imgs.search.brave.com/eUsj8SKZO3aVONppQVO-kqAK9GUqw0xrLama--G2YCg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9nZXR3/YWxscGFwZXJzLmNv/bS93YWxscGFwZXIv/ZnVsbC8wL2MvMi8y/NzI2NTEuanBn' }} />} headerBackgroundColor={{
      dark: 'black',
      light: 'white'
    }}>

      <ThemedView style={{ display: 'flex', flex: 1, gap: 10, flexDirection: 'row' }}>
        <ThemedView style={{ flex: 1 }}>
          <FlatList
            data={library.filter((_, index) => index % 2 === 0)}
            renderItem={({ item }) => <ImageCard wallpaper={item} onPress={() => setSelectedwallpares(item)} />}
            keyExtractor={(item) => item.name}
          />
        </ThemedView>
        <ThemedView style={{ flex: 1 }}>
          <FlatList
            data={library.filter((_, index) => index % 2 !== 0)}
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