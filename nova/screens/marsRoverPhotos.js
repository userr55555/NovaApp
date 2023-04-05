import * as React from 'react';
import { Text, View, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity, Modal, Button } from 'react-native';
import { styles } from '../Style'

import Constants from 'expo-constants';

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export function MarsRoverPhotos({ navigation }) {
    const [images, setImages] = React.useState([]);
    const [modal, showModal] = React.useState(false);
    const API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=900&page=1&api_key=PvKYVgxKPEez8BdWPQNhMZBrG9D6zdCJSsCYBbdQ';

    React.useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => setImages(data.photos))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const renderItem = ({ item }) => (
        <SafeAreaView>
            <TouchableOpacity onPress={() => showModal(true)}>
                <View>
                    <Image
                        source={{ uri: item.img_src }}
                        style={{ width: '75%', height: 200, margin: 10 }}
                        resizeMode="cover"
                    />

                    <Button title="Show Modal" onPress={() => { showModal(true) }} />
                    <Modal visible={modal} onRequestClose={() => { showModal(false) }}>
                        <View style={lol.container}>
                            <View style={lol.modalView}>
                                <Image
                                    source={{ uri: item.img_src }}
                                    style={{ width: '75%', height: 200, margin: 10 }}
                                    resizeMode="cover"
                                />

                                <Text>{item.id}</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );

    return (
        <View style={[styles.container, { flex: 1 }]}>
            <Text> Mars Rover Photos</Text>
            <Text>Camera: Curiosity</Text>
            <TouchableOpacity onPress={() => showModal(true)}>
                <FlatList
                    data={images}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </TouchableOpacity>
        </View>
    );
}

const lol = StyleSheet.create({
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
        justifyContent: "center"
    },
})