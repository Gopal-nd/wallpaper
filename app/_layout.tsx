
import { ThemedSafeAreaView } from '@/components/ThemedSafeAreaView';
import { Slot, Stack } from 'expo-router';
import { View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function Layout() {

    return <GestureHandlerRootView>
        <ThemedSafeAreaView style={{ flex: 1 }}>

   <Stack screenOptions={{headerShown: false}}>


   <Stack.Screen name="(nobottombar)/licence" options={{headerShown: true,
    headerTitle: 'About',
    headerTitleAlign: 'center', 
    headerBackTitle: 'Back'
}} />   
   <Stack.Screen name="(nobottombar)/acc" options={{headerShown: true,
    headerTitle: 'Account',
    headerTitleAlign: 'center', 
    headerBackTitle: 'Back'
}} />   
   <Stack.Screen name="(nobottombar)/privacy" options={{headerShown: true,
    headerTitle: 'Privacy',
    headerTitleAlign: 'center', 
    headerBackTitle: 'Back'
}} />   
   <Stack.Screen name="(nobottombar)/terms" options={{headerShown: true,
    headerTitle: 'Terms and Conditions',
    headerTitleAlign: 'center', 
    headerBackTitle: 'Back'
}} />   
</Stack>
</ThemedSafeAreaView>
    </GestureHandlerRootView>
}