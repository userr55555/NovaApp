{
  /*
 Before using this code install these two dependencies
 npm install @ja-ka/react-native-fade-in-flatlist --force
npm install --save react-native-really-awesome-button --force
also remove the default keyword after export if it dosent export
 
 */
}
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  SafeAreaView, TouchableOpacity
} from 'react-native';
export function PlanetaryInfo({navigation}) {
  
  const [inputText, setInputText] = React.useState('');
  const [bodyInfo, setBodyInfo] = React.useState([]);
  const [infoError, setInfoError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleButtonPress = async (release) => {
    setTimeout(release, 1000);
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://api.le-systeme-solaire.net/rest/bodies/${inputText}`
      );
      const data = await response.json();
      const newBodyInfo = [
        { key: 'Name', value: data.englishName },
        {
          key: 'Mass',
          value: `${data.mass.massValue} x 10^${data.mass.massExponent} kg`,
        },
        {
          key: 'Volume',
          value: `${data.vol.volValue} x 10^${data.vol.volExponent} kg`,
        },
        { key: 'Gravity', value: `${data.gravity} m/s²` },
        { key: 'Escape Velocity', value: `${data.escape / 1000} km/s` },
        { key: 'Mean Radius', value: `${data.meanRadius} km` },
        { key: 'Equatorial Radius', value: `${data.equaRadius} km` },
        { key: 'Polar Radius', value: `${data.polarRadius} km` },
        { key: 'Density', value: `${data.density} g/cm³` },
        { key: 'Orbital Period', value: `${data.sideralOrbit} days` },
        { key: 'Rotation Period', value: `${data.sideralRotation} hours` },
        { key: 'Flattening', value: `${data.flattening} ` },
        { key: 'Axial Tilt', value: `${data.axialTilt} ` },
      ];
      setBodyInfo(newBodyInfo);
      setInfoError(false);
    } catch (error) {
      console.error(error);
      setBodyInfo([]);
      setInfoError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const renderBodyInfoItem = ({ item }) => (
    <View style={styles.infoContainer}>
      <Text>
        <Text style={styles.infoKey}>{item.key}:</Text>
        <Text style={styles.infoValue}>{item.value}</Text>
      </Text>
    </View>
  );

  return (
    // <SafeAreaView>
    <ImageBackground
      source={{
        uri: 'https://e0.pxfuel.com/wallpapers/437/824/desktop-wallpaper-in-a-nutshell-solar-system-poster-solar-system-cute-solar-system.jpg',
      }}
      style={styles.backgroundImage}>
      <View style={styles.container}>
      <TouchableOpacity
          onPress={() => navigation.navigate('Registered', { user: 'name' })}>
          <Text style={[styles.goBack, {marginTop:10}]}> {'< Go back'}</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Explore Celestial Bodies..</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setInputText(text)}
          value={inputText}
          placeholder="Enter a celestial body name.."
        />
        <Button
          progress
          title="Search"
          name="bruce"
          onPress={handleButtonPress}
          style={styles.button}>
        </Button>

        {infoError ? (
          <Text style={styles.error}>
            Error: Could not find information for input
          </Text>
        ) : null}
        {isLoading ? <ActivityIndicator style={styles.loader} /> : null}
        {bodyInfo.length > 0 ? (
          <FlatList
            data={bodyInfo}
            renderItem={renderBodyInfoItem}
            keyExtractor={(item) => item.key}
          />
        ) : null}
      </View>
    </ImageBackground>
    // </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#CCFFE5',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  input: {
    height: 50,
    width: '80%',
    borderColor: '#9E9E9E',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 30,
    fontSize: 18,
    color: 'white',
  },
  error: {
    marginTop: 10,
    textAlign: 'center',
    color: '#D32F2F',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderBottomColor: '#FFC107',
    marginBottom: 30,
  },
  infoKey: {
    fontWeight: 'bold',
    marginRight: 5,
    color: '#b4f0f0',
    fontSize: 17,
    textTransform: 'uppercase',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    textShadowColor: 'white', // example of additional styling
  },
  infoValue: {
    fontWeight: 'normal',
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic', // example of additional styling
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  goBack:{
    color: 'white',
   fontFamily: 'Arial',
   marginLeft: 10


 },
});
