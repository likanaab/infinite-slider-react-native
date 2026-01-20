import { StyleSheet, useWindowDimensions, View } from 'react-native';
import Animated from 'react-native-reanimated';

export function SliderItem({item}){
    const { width } = useWindowDimensions();
    const sliderWidth = width*0.8;
    const gap = width * 0.05;

    return(
    <View style={{ width:sliderWidth, marginHorizontal:gap/2 }}>
        <Animated.Image
        resizeMode='cover'
        style={[style.image]}
        source={item.image}
        />
    </View>
    )
}

const style = StyleSheet.create({
    image:{
        width: "100%",
        borderRadius:20,
        height:200,
    }
}) 
