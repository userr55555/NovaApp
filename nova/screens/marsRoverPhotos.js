import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity, Modal, Button } from 'react-native';
import { styles } from '../Style'
import ProgressBar from 'react-native-progress/Bar';
import ImageProgress from 'react-native-image-progress';

import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export function MarsRoverPhotos({ navigation }) {
    const [images, setImages] = React.useState([]);
    const [modal, showModal] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);
    const API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=900&page=1&api_key=PvKYVgxKPEez8BdWPQNhMZBrG9D6zdCJSsCYBbdQ';

    React.useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setImages(data.photos))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => setSelectedImage(item)}>
            <View>
                <ImageProgress source={{ uri: item.img_src }} style={{ width: '75%', height: 200, margin: 10 }} resizeMode="cover" />
                <Text>{item.id}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={[styles.container, { flex: 1 , paddingTop:90}]}>
            <View style={styles.imageContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Registered', { user: 'name' })}>
          <Text style={[styles.goBack, {marginTop:10}]}> {'< Go back'}</Text>
        </TouchableOpacity>
      </View>
            <Text>Mars Rover Photos</Text>
            <Text>Camera: Curiosity</Text>
            <FlatList data={images} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
            {selectedImage ? (
                <Modal visible={true} onRequestClose={() => setSelectedImage(null)}>
                    <View style={styles.container}>
                        <Card style={modalStyle.modalView}>
                            <ImageProgress source={{ uri: selectedImage.img_src }} style={{ width: '100%', height: 200 }} resizeMode="cover" />
                            <Text>{selectedImage.id}</Text>
                            <Text>{selectedImage.camera.name}</Text>
                            <Button title="Close" onPress={() => setSelectedImage(null)} />
                        </Card>
                    </View>
                </Modal>
            ) : null}
        </View>
    );
}

const modalStyle = StyleSheet.create({
    modalView: {
        modalView: {
            backgroundColor: "white",
            height: "auto",
            padding: 10,
            borderColor: "black",
            borderStyle: "solid",
            borderWidth: 1,
            borderRadius: 5
        }
    },
    container: {
        backgroundColor: "rgba(1,1,0,0.8)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
       
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
})