import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {Registered} from './screens/registeredScreen';
import {Register} from './screens/registerScreen';
import {SignIn} from './screens/signInScreen';
import {Astronomy} from './screens/astronomyDetails';
import {RandomAstronomy} from './screens/randomAstronomy';
import { MarsRoverPhotos } from './screens/marsRoverPhotos';

export default function App() {
  const Stack = createStackNavigator();
  const options = {
    headerStyle: { backgroundColor: '#587cc4', borderColor: '#587cc4'},
  };
  return (
    <View style={styles.container}>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Group screenOptions={{ headerShown: false , ...TransitionPresets.FadeFromBottomAndroid}}>
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
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
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
