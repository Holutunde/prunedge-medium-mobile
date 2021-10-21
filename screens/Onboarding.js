import React from 'react'
import {
  Animated,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native'
import SvgUri from 'expo-svg-uri'
import Button from '../components/Button'

const { width, height } = Dimensions.get('window')

const onBoardings = [
  {
    title: "Let's Travelling",
    description: 'Create, write and post your own stories',
    img: require('../assets/icon/onboarding1.svg'),
  },
  {
    title: 'Navigation',
    description:
      'Read stories and hot gists from your favorites and colleagues',
    img: require('../assets/icon/onboarding2.svg'),
  },
  {
    title: 'Destination',
    description: 'Save and comment on hot topics and inside gists',
    img: require('../assets/icon/onboarding3.svg'),
  },
]

const OnBoarding = ({ navigation }) => {
  const scrollX = new Animated.Value(0)

  const renderContent = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false },
        )}
      >
        {onBoardings.map((item, index) => (
          <View key={`img-${index}`} style={styles.imageAndtextcontainer}>
            <View style={styles.imgcontainer}>
              <SvgUri
                source={item.img}
                resizeMode="center"
                style={styles.img}
              />
            </View>
            <View style={styles.textcontainer}>
              <Text style={styles.text}>{item.description}</Text>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    )
  }

  const renderDots = () => {
    const dotPosition = Animated.divide(scrollX, width)

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          })

          const dotSize = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 22, 10],
            extrapolate: 'clamp',
          })

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[styles.dot, { width: dotSize }]}
            />
          )
        })}
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require('../assets/images/Prunedgesplash.png')}
        />
      </View>
      <View>{renderContent()}</View>
      <View style={styles.dotsRootContainer}>{renderDots()}</View>
      <View style={styles.button}>
        <Button onPress={() => navigation.navigate('Home')} text="Continue" />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    position: 'absolute',
    top: 40,
    left: 27,
  },
  image: {
    width: 90,
    height: 26,
    resizeMode: 'contain',
  },
  imgcontainer: {
    paddingTop: 200,
  },
  img: {
    alignItems: 'center',
    width: '100%',
    height: '70%',
  },
  textcontainer: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontFamily: 'UbuntuRegular',
    width: '60%',
  },
  imageAndtextcontainer: {
    width: width,
    height: '100%',
  },
  dotsRootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    bottom: height > 700 ? '22%' : '20%',
  },
  button: {
    alignItems: 'center',
  },
  dotsContainer: {
    flexDirection: 'row',
  },
  dot: {
    borderRadius: 6,
    backgroundColor: '#0050C8',
    marginHorizontal: 3,
    height: 7,
  },
})

export default OnBoarding
