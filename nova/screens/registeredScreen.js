import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Animated,
  Image,
  SafeAreaView, TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-elements';


export function Registered({ route }) {
  const { user  } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://apod.nasa.gov/apod/image/2303/PIA21923_fig1SeeingTitan1024.jpg',
          }}
          style={styles.profilePicture}
        />
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.welcomeText}>Welcome, </Text>
          <Text style={styles.userName}>{user}</Text>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <Card containerStyle={styles.cardStyle}>
          <Card.Title style={styles.cardTitle}>Your Astronomy photo of the day...</Card.Title>
          <Card.Image
            source={{
              uri: 'https://www.nasa.gov/sites/default/files/patagonianshelf_vir_2014336_lrg.jpg',
            }} style={{borderRadius: 10}}
          />
        <TouchableOpacity onPress={() => alert('Link clicked!')}>
            <Text style={styles.cardSubtitle}>More info</Text>
          </TouchableOpacity>
        </Card>
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
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    position: 'absolute',
    top: 10,
    left: 0,
    zIndex: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 110,
    fontFamily: 'Arial',
    color: 'white',
  },
  welcomeText: {
    fontSize: 20,
    fontFamily: 'Arial',
    color: 'white',
    marginTop: 110,
  },
  cardContainer: {
    position: 'absolute',
    top: 150,
    left:0,
    width: '100%'
  },
  cardStyle: {
    backgroundColor: '#587cc4',
    borderRadius: 10,
    margin: 10,
    borderColor: '#587cc4'
  },
  cardTitle: {
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Arial',
  },
   cardSubtitle: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial',
    marginTop: 10,
    fontSize: 12,
    textDecorationLine: 'underline',
    textDecorationColor: '#fff',
    textDecorationThickness: 1,
    }
});