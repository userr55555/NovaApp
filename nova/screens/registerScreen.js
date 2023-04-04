import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import { useValidation } from 'react-native-form-validator'
import Constants from 'expo-constants';

export function Register({ navigation }) {
  const [user, setUser] = React.useState('');
  const [bday, setBday] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { validate, isFieldInError, getErrorsInField, getErrorMessages } = 
  useValidation({
    state: { user, bday, email, password }
  })

  const submitHandler = () => {
    validate({
      user: {required: true},
      email: {email: true, required: true},
      bday: {date: 'YYYY-MM-DD'},
      password: {required: true}
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.novaLogo}><Image
        style={{ height: 100, width: 300 }}
        source={require('../assets/nova-logo-bg.png')}
      /></View>
      
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

      {isFieldInError('bday') && getErrorsInField('bday').map(errorMessage => (<Text>{errorMessage}</Text>))}

      <TextInput
        style={styles.txtbox}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        onPress={submitHandler}>
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
      <Text>{getErrorMessages()}</Text>
      <View style={styles.signIn}>
        <Text style={styles.signInText}>Have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
          <Text style={styles.signInLink}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    bottom: 20,
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
    borderBottomWidth: 1,
    borderBottomColor: 'white'
  },
  novaLogo:{
    justifyContent:'center',
    alignItems:'center'
  }
});
