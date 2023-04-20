import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Animated,
  Image,
  SafeAreaView, TouchableOpacity, ScrollView, Easing, FlatList
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-elements';

export function Registered({ route, navigation }) {
  const { user, bday } = route.params;
  const url = 'https://api.nasa.gov/planetary/apod?api_key=PvKYVgxKPEez8BdWPQNhMZBrG9D6zdCJSsCYBbdQ';
  const randUrl = `https://api.nasa.gov/planetary/apod?api_key=PvKYVgxKPEez8BdWPQNhMZBrG9D6zdCJSsCYBbdQ&count=1`;
  const bdayUrl = `https://api.nasa.gov/planetary/apod?api_key=PvKYVgxKPEez8BdWPQNhMZBrG9D6zdCJSsCYBbdQ&date=${bday}`;
  const [data, setData] = React.useState([]);
  const [bdayData, setBdayData] = React.useState([]);
  const [randomData, setRandomData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then((x) => x.json())
      .then((json) => setData(json));
    fetch(randUrl)
      .then((x) => x.json())
      .then((json) => setRandomData(json[0]));
    fetch(bdayUrl)
      .then((x) => x.json())
      .then((json) => setBdayData(json));
  }, []);

  const spinValue = React.useRef(new Animated.Value(0)).current;
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ]).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });
  // <ScrollView contentContainerStyle={styles.scrollViewContent}>

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          <Animated.Image
            source={{
              uri: bday > '1995-06-15' ? bdayData.hdurl : 'https://apod.nasa.gov/apod/image/2303/PIA21923_fig1SeeingTitan1024.jpg',
            }}
            style={[
              styles.profilePicture,
              { opacity: fadeAnim, transform: [{ rotate: spin }] },
            ]}
          />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.welcomeText}>Welcome, </Text>
              <Text style={styles.userName}>{user}</Text>
            </View>
            <View style={styles.logOut}>
            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.logOutText}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>


        </View>

        <View style={styles.cardContainer}>
          <Card containerStyle={styles.cardStyle}>
            <Card.Title style={styles.cardTitle}><Text>Your Astronomy photo of the day...</Text></Card.Title>
            <Card.Image
              source={{
                uri: data.url,
              }} style={{ borderRadius: 10 }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Astronomy', { user: user })}>
              <Text style={styles.cardSubtitle}> {'More info'}</Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View style={[styles.cardContainer, { marginTop: 550 }]}>
          <Card containerStyle={styles.cardStyle}>
            <Card.Title style={styles.cardTitle}><Text>Random Astronomy photo of the day...</Text></Card.Title>
            <Card.Image
              source={{
                uri: randomData.hdurl,
              }} style={{ borderRadius: 10 }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('RandomAstronomy', { user: user })}>
              <Text style={styles.cardSubtitle}> {'More info'}</Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View style={[styles.cardContainer, { marginTop: 275 }]}>
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
            <TouchableOpacity onPress={() => navigation.navigate('MarsRoverPhotos', { user: user })}>
              <Text style={styles.cardSubtitle}>More info</Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View style={[styles.cardContainer, { marginTop: 825 }]}>
          <Card containerStyle={styles.cardStyle}>
            <Card.Title style={styles.cardTitle}>
              <Text>Planetary Info</Text>
            </Card.Title>
            <Card.Image
              source={{
                uri: 'https://c4.wallpaperflare.com/wallpaper/630/43/768/space-earth-sun-solar-system-wallpaper-preview.jpg'
                ,
              }}
              style={{ borderRadius: 10 }}
            />
            <TouchableOpacity onPress={() => navigation.navigate('PlanetaryInfo', { user: user })}>
              <Text style={styles.cardSubtitle}>More info</Text>
            </TouchableOpacity>
          </Card>
        </View>


      </SafeAreaView>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    backgroundColor: '#587cc4',
    padding: 8,
    overflow: "scroll",
    height: 1300
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
    marginTop: 30
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
    left: 0,
    width: '100%',


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
  },
  scrollViewContent: {
    backgroundColor: '#587cc4',
    flexGrow: 1,
  },
  flatlistContainer: {
    height: 400,
    overflow: "scroll",
  },
  logOut: {
    textAlign: "right",
    marginLeft: 200
  },
  logOutText: {
    color: "white",
    fontSize: 11,
    fontWeight: "bold"
  }

});

