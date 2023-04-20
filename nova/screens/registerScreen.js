import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { useValidation } from 'react-native-form-validator';
import Constants from 'expo-constants';
import { connect } from 'react-redux';
import store from '../redux/store/index'

import {
  Set_User,
  Set_Bday,
  Set_Email,
  Set_Password,
} from '../redux/actions/index';

const mapStateToProps = (state) => {
  return {
    user: state.reducer.user,
    bday: state.reducer.bday,
    password: state.reducer.password,
    email: state.reducer.email,
  };
};

const mapDispatchToProps = {
  Set_User,
  Set_Bday,
  Set_Email,
  Set_Password,
};

function Register({
  user,
  bday,
  password,
  email,
  Set_User,
  Set_Bday,
  Set_Email,
  Set_Password,
  navigation,
}) {
  // define functions for validation
  const {
    validate,
    isFieldInError,
    getErrorsInField,
    getErrorMessages,
    isFormValid,
  } = useValidation({
    state: { user, bday, email, password },
  });

  const submitHandler = () => {
    validate({
      user: { required: true },
      email: { email: true, required: true },
      bday: { date: 'YYYY-MM-DD', required: true },
      password: { required: true },
    });

    if (isFormValid()) {
      console.log(email);
      navigation.navigate('Registered', {
        user: user,
        email: email,
        bday: bday,
        password: password,
      });
    } else {
      Alert.alert('Invalid Registration', 'Please fill in the reqired fields.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.novaLogo}>
        <Image
          style={{ height: 100, width: 300 }}
          source={require('../assets/nova-logo-bg.png')}
        />
      </View>

      <Text style={styles.createAcc}>Create your account</Text>

      <TextInput
        style={styles.txtbox}
        placeholder="Username"
        value={user}
        onChangeText={(input) => {
          Set_User(input);
        }}
      />

      {isFieldInError('user') &&
        getErrorsInField('user').map((errorMessage) => (
          <Text style={{ color: 'red' }}>{errorMessage}</Text>
        ))}

      <TextInput
        style={styles.txtbox}
        placeholder="Email"
        value={email}
        onChangeText={(input) => {
          Set_Email(input);
        }}
      />

      {isFieldInError('email') &&
        getErrorsInField('email').map((errorMessage) => (
          <Text style={{ color: 'red' }}>{errorMessage}</Text>
        ))}

      <TextInput
        style={styles.txtbox}
        placeholder="Birthday YYYY-MM-DD"
        value={bday}
        onChangeText={(input) => {
          Set_Bday(input);
        }}
      />

      {isFieldInError('bday') &&
        getErrorsInField('bday').map((errorMessage) => (
          <Text style={{ color: 'red' }}>{errorMessage}</Text>
        ))}

      <TextInput
        style={styles.txtbox}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(input) => {
          Set_Password(input);
        }}
      />

      {isFieldInError('password') &&
        getErrorsInField('password').map((errorMessage) => (
          <Text style={{ color: 'red' }}>{errorMessage}</Text>
        ))}

      <TouchableOpacity onPress={submitHandler}>
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
        <Text style={styles.signInText}>Have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SignIn');
          }}>
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
  createAcc: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 8,
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
    borderBottomColor: 'white',
  },
  novaLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
