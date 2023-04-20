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

import Constants from 'expo-constants';

// You can import from local files

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
  ClearSelectedImage
}) {
  const API_URL =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=900&page=1&api_key=jk0tEhdHzBqHh7ocLh09zLELJKaHpgiJ3jDVb9bn';

  const [imagesFetched, setImagesFetched] = React.useState(false);

React.useEffect(() => {
    FetchImagesRequest();
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        FetchImagesSuccess(data.photos);
      })
      .catch((error) => {
        FetchImagesFailure(error);
      });
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
          style={{ width: '75%', height: 200, margin: 10 }}
          resizeMode="cover"
        />
        <Text>{item.id}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { flex: 1 }]}>
      <Text>Mars Rover Photos</Text>
      <Text>Camera: Curiosity</Text>

      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />

      {selectedImage ? (
        <Modal visible={true} onRequestClose={() => handleModalClose()}>
          <View style={styles.container}>
            <Card style={modalStyle.modalView}>
              <ImageProgress
                source={{ uri: selectedImage.img_src }}
                style={{ width: '100%', height: 200 }}
                resizeMode="cover"
              />
              <Text>{selectedImage.id}</Text>
              <Text>{selectedImage.camera.name}</Text>
              <Button title="Close" onPress={() => handleModalClose()} />
            </Card>
          </View>
        </Modal>
      ) : null}
    </View>
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
});
const modalStyle = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MarsRoverPhotos);
