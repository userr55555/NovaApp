import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import {
  FetchImagesRequest,
  SetSelectedImage,
  ClearSelectedImage,
  FetchImagesFailure,
  FetchImagesSuccess,
} from '../redux/actions/index';
import ImageProgress from 'react-native-image-progress';
import {styles} from "../Style"



const mapStateToProps = (state) => {
  return {
    images: state.reducer.images,
    isLoading: state.reducer.isLoading,
    error: state.reducer.error,
    selectedImage: state.reducer.selectedImage,
  };
};

const mapDispatchToProps = {
  FetchImagesRequest,
  FetchImagesSuccess,
  FetchImagesFailure,
  SetSelectedImage,
  ClearSelectedImage,
};

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

function MarsRoverPhotos({
  navigation,
  images,
  selectedImage,
  FetchImagesRequest,
  FetchImagesSuccess,
  FetchImagesFailure,
  SetSelectedImage,
  ClearSelectedImage,
  route
}) {
    const {user, bday} = route.params;
  const API_URL =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=900&page=1&api_key=PvKYVgxKPEez8BdWPQNhMZBrG9D6zdCJSsCYBbdQ';

  const [imagesFetched, setImagesFetched] = React.useState(false);

React.useEffect(() => {

    if(!imagesFetched){
      FetchImagesRequest();
      fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        FetchImagesSuccess(data.photos);
      })
      .catch((error) => {
        FetchImagesFailure(error);
      });
      setImagesFetched(true);
    }
    }, []);

  const handleImageSelection = (image) => {
    SetSelectedImage(image);
  };

  const handleModalClose = () => {
    ClearSelectedImage();
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleImageSelection(item)}>
      <View>
        <ImageProgress
          source={{ uri: item.img_src }}
          style={{ width: '75%', height:150, margin: 10, borderRadius: 10}}
          resizeMode="cover"
          borderRadius={2}
        />
        <Text style={{color:"white", marginLeft: 10}}>{item.id}</Text>
        <Text style={{color:"white", marginLeft: 10, fontSize: 11}}>More details...</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { flex: 1}]}>
      <TouchableOpacity
          onPress={() => navigation.navigate('Registered', { user: user, bday:bday })}>
          <Text style={[styles.goBack, { marginTop: 30 }]}> {'< Go back'}</Text>
        </TouchableOpacity>
      <Text style={[styles.cardTitle,{fontWeight:"bold", marginTop: 20, paddingBottom:5, fontSize: 30}]}>Mars Rover Photos</Text>
      <Text style={[styles.cardTitle,{fontWeight:"bold",  paddingBottom:5, fontSize: 20}]}>Curiosity Camera</Text>

      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {selectedImage ? (
        <Modal visible={true} onRequestClose={() => handleModalClose()}>
          <View style={[styles.container,{color:"white"}]}>
            <Card style={modalStyle.modalView}>
            <Text style={{color:"white", textAlign: "center", padding:10, fontWeight: "bold"}}>{selectedImage.camera.full_name}</Text>
              <ImageProgress
                source={{ uri: selectedImage.img_src }}
                style={{ width: '100%', height: 200}}
                resizeMode="cover"
              />
              <Text style={{color:"white", padding:5}}>ID: {selectedImage.id}</Text>
              <Text style={{color:"white", padding:5}}>Sol: {selectedImage.sol}</Text>
              <Text style={{color:"white", padding:5}}>Launch Date: {selectedImage.rover.launch_date}</Text>
              <Text style={{color:"white", padding:5}}>Landing Date: {selectedImage.rover.landing_date}</Text>
              <Text style={{color:"white", padding:5}}>Status: {selectedImage.rover.status}</Text>
              <Button title="Close" onPress={() => handleModalClose()} />
            </Card>
          </View>
        </Modal>
      ) : null}
    </View>
  );
}


const modalStyle = StyleSheet.create({
  modalView: {
    backgroundColor: '#587cc4',
    borderRadius: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  goBack: {
    color: 'white',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MarsRoverPhotos);
