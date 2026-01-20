import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import Animated, {
    scrollTo,
    useAnimatedRef,
    useAnimatedScrollHandler,
    useDerivedValue,
    useSharedValue,
} from 'react-native-reanimated';
import { sliders } from '../sliders';
import { SliderItem } from './SliderItem';


const InfiniteSlider = () => {
    const { width } = useWindowDimensions();
    const sliderWidth = width*0.8;
    const gap = width * 0.05;
    const totalItemWidth = sliderWidth + gap;

    const x = useSharedValue(0);
    const [data, setData] = useState(sliders);
    const ref = useAnimatedRef();
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const interval = useRef();
    const offset = useSharedValue(0);

    const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
    };

    const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig }]);

    const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
        x.value = e.contentOffset.x;
    },
    onMomentumEnd: (e) => {
        offset.value = e.contentOffset.x;
    },
    });

    useDerivedValue(() => {
    scrollTo(ref, offset.value, 0, true);
    });

    useEffect(() => {
    if (isAutoPlay === true) {
        interval.current = setInterval(() => {
        offset.value += totalItemWidth;
        }, 3500);
    } else {
        clearInterval(interval.current);
    }
    return () => {
        clearInterval(interval.current);
    };
    }, [isAutoPlay, offset]);


    return (
    <View style={styles.container}>
        <Animated.FlatList
        ref={ref}
        style={{ height: 200, flexGrow: 0 }}
        onScrollBeginDrag={() => {
            setIsAutoPlay(false);
        }}
        onScrollEndDrag={() => {
            setIsAutoPlay(true);
        }}
        onScroll={onScroll}
        scrollEventThrottle={16}
        horizontal
        bounces={false}
        snapToInterval={sliderWidth +gap}
        decelerationRate='fast'
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: (width - sliderWidth) / 2 }}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        onEndReached={() => setData([ ...data, ...sliders])}
        onEndReachedThreshold={0.5}
        data={data}
        keyExtractor={(_, index) => ` ${index}`}
        renderItem={({ item }) => {
            return <SliderItem item={item}/>;
        }}
        />
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InfiniteSlider;
