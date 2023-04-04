import { useFonts } from 'expo-font';

export default function fonts(){
    const [fontsLoaded] = useFonts({
        Arial: require('./assets/arial.ttf'),
      });
}