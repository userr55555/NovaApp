import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Registered } from './screens/registeredScreen';
import Register from './screens/registerScreen';
import { SignIn } from './screens/signInScreen';
import { Astronomy } from './screens/astronomyDetails';
import { RandomAstronomy } from './screens/randomAstronomy';
import MarsRoverPhotos from './screens/marsRoverPhotos';
import { PlanetaryInfo } from './screens/PlanetaryInfo';
import { Provider } from 'react-redux';
import store from './redux/store/index';

export default function App() {
  const Stack = createStackNavigator();
  const options = {
    headerStyle: { backgroundColor: '#587cc4', borderColor: '#587cc4' },
  };
  return (
    <View style={styles.container}>
      <Provider store={store}>
        <NavigationContainer >
          <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false, ...TransitionPresets.FadeFromBottomAndroid }}>
              <Stack.Screen
                name="Register"
                component={Register}
                options={{ title: '' }}
              />
              <Stack.Screen
                name="Registered"
                component={Registered}
                options={{ title: '' }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ title: '' }}
              />
              <Stack.Screen
                name="Astronomy"
                component={Astronomy}
                options={{ title: '' }}
              />
              <Stack.Screen
                name="RandomAstronomy"
                component={RandomAstronomy}
                options={{ title: '' }}
              />
              <Stack.Screen
                name="MarsRoverPhotos"
                component={MarsRoverPhotos}
                options={{ title: '' }}
              />
              <Stack.Screen
                name="PlanetaryInfo"
                component={PlanetaryInfo}
                options={{ title: '' }}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#587cc4',
    padding: 8,
  },
});
