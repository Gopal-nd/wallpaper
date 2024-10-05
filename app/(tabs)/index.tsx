import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';
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
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Liked!</Text>
    </View>
  );
}

function Suggested() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>suggested!</Text>
    </View>
  );
}
function Library() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Library!</Text>
    </View>
  );
}