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


export function Registered({ route, navigation }) {
  const { user  } = route.params;
  const url = 'https://api.nasa.gov/planetary/apod?api_key=PvKYVgxKPEez8BdWPQNhMZBrG9D6zdCJSsCYBbdQ';
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then((x) => x.json())
      .then((json) => setData(json));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
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
          <Card.Title style={styles.cardTitle}><Text>Your Astronomy photo of the day...</Text></Card.Title>
          <Card.Image
            source={{
              uri: data.hdurl,
            }} style={{borderRadius: 10}}
          />
         <TouchableOpacity onPress={() => navigation.navigate('Astronomy')}>
            <Text style={styles.cardSubtitle}> {'More info'}</Text>
          </TouchableOpacity>
        </Card>
      </View>

      <View style={[styles.cardContainer, {marginTop:275}]}>
        <Card containerStyle={styles.cardStyle}>
          <Card.Title style={styles.cardTitle}>
            <Text>Take a trip to Mars...</Text>
          </Card.Title>
          <Card.Image
            source={{
              uri: 'https://photojournal.jpl.nasa.gov/jpegMod/PIA03154_modest.jpg',
            }}
            style={{ borderRadius: 10 }}
          />
          <TouchableOpacity onPress={() => alert('Link clicked!')}>
            <Text style={styles.cardSubtitle}>More info</Text>
          </TouchableOpacity>
        </Card>
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
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    marginTop:30
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
    top: 175,
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
    borderBottomWidth: 1,
    borderBottomColor: 'white'
    }
});
