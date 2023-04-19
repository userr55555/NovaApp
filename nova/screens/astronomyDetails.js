import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView, Animated, Easing } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-elements';


export function Astronomy({ route, navigation }) {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=PvKYVgxKPEez8BdWPQNhMZBrG9D6zdCJSsCYBbdQ';
  const [data, setData] = React.useState([]);
  var fadeValue = React.useRef(new Animated.Value(0)).current;
  var opacity = fadeValue;

  const fadeFunc = () => {
    Animated.sequence([
      Animated.delay(1000),
      Animated.timing(fadeValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ]).start();
  };

  const apiFetch = () => {
    fetch(url)
      .then((x) => {
        if (x.ok) {
          return x.json();
        } else {
          throw new Error('API response not ok.');
        }
      })
      .then((json) => setData(json)).catch((err) => console.log(err));
    
  };

  const render = () => {
    apiFetch();
    fadeFunc();
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Registered', { user: 'name' })}>
          <Text style={[styles.goBack, {marginTop:30}]}> {'< Go back'}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardContainer}>
        <Card containerStyle={styles.cardStyle}>
          <Card.Title style={styles.cardTitle}>
            <Text>{data.title}</Text>
          </Card.Title>
          <Animated.View>
          <Card.Image
            source={{
              uri: data.hdurl,
            }}
            style={{ borderRadius: 10 }}
          />
          </Animated.View>
          <Animated.View style={{opacity}}>
            <Text style={styles.cardDescription}>
              {data.explanation}
            </Text>
            <Text style={styles.cardCredit}>Date: {data.date} </Text>
          </Animated.View>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#587cc4',
    padding: 8,
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
  goBack:{
     color: 'white',
    fontFamily: 'Arial',

  },
  cardContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: '100%',
  },
  cardStyle: {
    backgroundColor: '#587cc4',
    borderRadius: 10,
    margin: 10,
    borderColor: '#587cc4',
  },
  cardTitle: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Arial',
  },
  cardDescription: {
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Arial',
    marginTop: 10,
    fontSize: 12,
   
  },
  cardCredit: {
    textAlign: 'left',
    color: 'white',
    fontFamily: 'Arial',
    marginTop: 10,
    fontSize: 12,
    
  },
});
