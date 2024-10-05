import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Explore() {
  return (
    <SafeAreaView style={{flex: 1}}>

    <View style={styles.container}>
      <Text style={styles.text}>Explore</Text>
      <Link href="/about" >
     # About
      </Link>
    </View>
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
