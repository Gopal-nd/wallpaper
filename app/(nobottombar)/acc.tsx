import { Button, Text, View } from 'react-native';

import { useRouter } from 'expo-router';
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';


export default function Account() {
  const router = useRouter();

  const handleDismiss = (count: number) => {
    router.dismiss(count)
  };

  return (
    <ThemedSafeAreaView style={{ flex: 1 }}>


    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to first screen" onPress={() => handleDismiss(3)} />
        <Text>Account</Text>
    </View>
    </ThemedSafeAreaView>
  );
}
