import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-elements';

export function Astronomy({ route, navigation }) {
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
            <Text>{'Patagonian Plankton Swirls'}</Text>
          </Card.Title>
          <Card.Image
            source={{
              uri: 'https://www.nasa.gov/sites/default/files/patagonianshelf_vir_2014336_lrg.jpg',
            }}
            style={{ borderRadius: 10 }}
          />
          <View>
            <Text style={styles.cardDescription}>
              Phytoplankton create rich blooms of color in the Atlantic Ocean
              near South America in this enhanced color image from Dec. 2, 2014.
              The Patagonian Shelf Break is a biologically rich patch of ocean
              where airborne dust from the land, iron-rich currents from the
              south, and upwelling currents from the depths provide a bounty of
              nutrients for phytoplankton. The bands of color seen here not only
              reveal the location of plankton, but also the dynamic eddies and
              currents that carry them.
            </Text>
            <Text style={styles.cardCredit}>
            Image Credit: NASA/Norman Kuring; NOAA; DOD
            </Text>
            <Text style={styles.cardCredit}>Last Updated: Mar 31, 2023 </Text>
            <Text style={styles.cardCredit}>Editor: Monika Luabeya</Text>
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
