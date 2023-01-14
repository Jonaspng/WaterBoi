import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, DocumentIcon } from 'react-native-heroicons/solid';
import { Provider as PaperProvider } from 'react-native-paper';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import WeeklyIntake from './components/WeeklyIntake/WeeklyIntake';

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <HomeIcon />
            )
          }}/>
          <Tab.Screen name='About' component={AboutScreen} options={{
            tabBarLabel: 'About',
            tabBarIcon: () => (
              <DocumentIcon />
            )
          }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
    
  );
}
