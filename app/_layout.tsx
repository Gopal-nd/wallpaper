
import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout() {

    return <GestureHandlerRootView>
   <Stack screenOptions={{headerShown: false}}>


   <Stack.Screen name="(nobottombar)/about" options={{headerShown: true,
    headerTitle: 'About',
    headerTitleAlign: 'center', 
    headerBackTitle: 'Back'
}} />   
</Stack>
    </GestureHandlerRootView>
}