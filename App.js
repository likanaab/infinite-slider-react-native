import { StyleSheet, View } from 'react-native';
import  InfiniteSlider  from './components/Carousel';



export default function App() {
  
  return (
      <View style={styles.container}>
        <InfiniteSlider />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
