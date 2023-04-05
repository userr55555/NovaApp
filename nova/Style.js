import {StyleSheet} from 'react-native'

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

  export {styles}