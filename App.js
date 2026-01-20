import { FlatList, StyleSheet, View, useWindowDimensions, Text } from 'react-native';
import  InfiniteSlider  from './components/Carousel';
import { sliders } from './sliders';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <InfiniteSlider />
    </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer:{
    position:'relative',
    justifyContent:'center',
    alignItems:'center',
    height:300,
  },
  imageWrapper:{
    position:'absolute',
    right:0,
    left:0,
    top:0,
    bottom:0,
    justifyContent:'center',
    alignItems:'center',
  },
  viewBox:{
    justifyContent:'center',
    alignItems:'center',
  }
});
