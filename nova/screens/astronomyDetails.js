import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-elements';

export function Astronomy({ route, navigation }) {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then((x) => x.json())
      .then((json) => setData(json));
  }, []);

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
          <Card.Image
            source={{
              uri: data.hdurl,
            }}
            style={{ borderRadius: 10 }}
          />
          <View>
            <Text style={styles.cardDescription}>
              {data.explanation}
            </Text>
            <Text style={styles.cardCredit}>Date: {data.date} </Text>
          </View>
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
