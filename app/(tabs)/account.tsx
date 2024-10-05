import { DownloadPicture } from '@/components/BottomSheet';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function Account() {
  const [open, setOpen] = useState(false);

  return (
    <SafeAreaView style={{flex: 1}}>

    <View style={{ flex: 1,  }}>
        <Text>Account</Text>
      <Button title="open" onPress={() => setOpen(true)}/>
        {open &&< DownloadPicture onClose={() => setOpen(false)}/>
        }
    </View>
        </SafeAreaView>
  );
}
