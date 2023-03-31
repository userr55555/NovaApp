import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';
import Constants from 'expo-constants';

export function Register({ navigation }) {
  const [user, setUser] = React.useState('');
  const [bday, setBday] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        style={{ height: 100, width: 300 }}
        source={require('../assets/nova-logo-bg.png')}
      />
      <Text style={styles.createAcc}>Create your account</Text>

      <TextInput
        style={styles.txtbox}
        placeholder="Username"
        value={user}
        onChangeText={setUser}
      />
      <TextInput
        style={styles.txtbox}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.txtbox}
        placeholder="Birthday YYYY-MM-DD"
        value={bday}
        onChangeText={setBday}
      />
      <TextInput
        style={styles.txtbox}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Registered', {
            user: user,
            email: email,
            bday: bday,
          });
        }}>
        <View
          style={{
            backgroundColor: '#39518f',
            padding: 10,
            borderRadius: 10,
            margin: 5,
            textAlign: 'center',
          }}>
          <Text style={{ color: 'white', fontSize: 18, fontFamily: 'Arial' }}>
            Register
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.signIn}>
        <Text style={styles.signInText}>Have an account? </Text>{' '}
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInLink}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#587cc4',
    padding: 8,
  },
  txtbox: {
    borderColor: '#39518f',
    borderWidth: 1,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    color: '#39518f',
  },
  createAcc:{
    textAlign:'center',
     color: 'white',
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8
  },
  signIn: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  signInText: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 13,
  },
  signInLink: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 12,
    textDecorationLine: 'underline',
    textDecorationColor: '#fff',
    textDecorationThickness: 1,
  },
});