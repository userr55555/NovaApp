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

export function SignIn({ navigation }) {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View style={styles.container}>
      <Image
        style={{ height: 100, width: 300 }}
        source={require('../assets/nova-logo-bg.png')}
      />
      <Text style={styles.logInAcc}>Login to your account</Text>
      <TextInput
        style={styles.txtbox}
        placeholder="Username"
        value={user}
        onChangeText={setUser}
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
            password: password,
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
            {'Sign In'}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.reg}>
        <Text style={styles.regText}>{'Dont have an account? '}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.regLink}>{'Register now'}</Text>
        </TouchableOpacity>
      </View>
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
  txtbox: {
    borderColor: '#39518f',
    borderWidth: 1,
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    color: '#39518f',
  },
  logInAcc:{
    textAlign:'center',
     color: 'white',
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8
  },
  reg: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  regText: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 13,
  },
  regLink: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
});
