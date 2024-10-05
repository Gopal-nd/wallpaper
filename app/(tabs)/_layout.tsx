import { Ionicons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import { SafeAreaView } from 'react-native';

export default function Layout() {
  return (
    
    <Tabs initialRouteName="index" screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }} >

      <Tabs.Screen name="index" options={{
        title: 'For You',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? "home" : "home-outline"} color={color} size={24} />
        )
      }} />
      <Tabs.Screen name="explore" options={{
        title: 'Explore',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? "shapes" : "shapes"} color={color} size={24} />
        )
      }} />
      <Tabs.Screen name="account" options={{
        title: 'Account',
        tabBarIcon: ({ color, focused }) => (<Ionicons name={focused ? "settings" : "settings-outline"} size={24} color={color} />)
      }} />
    </Tabs>
  );
}
