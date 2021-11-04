import React, { useContext } from 'react'
import {
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
  View,
  Image,
  FlatList,
} from 'react-native'
import SvgUri from 'expo-svg-uri'
import { ThemeContext } from '../Util/ThemeContext'
import NormalText, { BoldText } from '../components/Text'
import { TouchableOpacity } from 'react-native-gesture-handler'

const { width } = Dimensions.get('window')

const onBoardings = [
  {
    title: "Let's Travelling",
    description: 'Designers have discovered  a new way to exploit NFTs..',
    author: 'Posted by Lateef Jakande',
    img: require('../assets/icon/Rectangle-icon.svg'),
  },
  {
    title: 'Navigation',
    description: 'Designers have discovered  a new way to exploit NFTs..',
    author: 'Posted by Lateef Jakande',
    img: require('../assets/icon/Rectangle-icon.svg'),
  },
  {
    title: 'Destination',
    description: 'Save and comment on hot topics and inside gists',
    author: 'Posted by Lateef Jakande',
    img: require('../assets/icon/Rectangle-icon.svg'),
  },
  {
    title: 'Destination',
    description: 'Save and comment on hot topics and inside gists',
    author: 'Posted by Lateef Jakande',
    img: require('../assets/icon/Rectangle-icon.svg'),
  },
]

const Latest = [
  {
    background: require('../assets/icon/latest-icon.svg'),
    title: 'NFTs are beyond....',
    text: 'Lorem ipsum dolor sit amet, consectetur....',
    author: 'Aishat Otunbade',
  },
  {
    background: require('../assets/icon/latest-icon.svg'),
    title: 'NFTs are beyond....',
    text: 'Lorem ipsum dolor sit amet, consectetur....',
    author: 'Aishat Otunbade',
  },
  {
    background: require('../assets/icon/latest-icon.svg'),
    title: 'NFTs are beyond....',
    text: 'Lorem ipsum dolor sit amet, consectetur....',
    author: 'Aishat Otunbade',
  },
  {
    background: require('../assets/icon/latest-icon.svg'),
    title: 'NFTs are beyond....',
    text: 'Lorem ipsum dolor sit amet, consectetur....',
    author: 'Aishat Otunbade',
  },
  {
    background: require('../assets/icon/latest-icon.svg'),
    title: 'NFTs are beyond....',
    text: 'Lorem ipsum dolor sit amet, consectetur....',
    author: 'Aishat Otunbade',
  },
  {
    background: require('../assets/icon/latest-icon.svg'),
    title: 'NFTs are beyond....',
    text: 'Lorem ipsum dolor sit amet, consectetur....',
    author: 'Aishat Otunbade',
  },
  {
    background: require('../assets/icon/latest-icon.svg'),
    title: 'NFTs are beyond....',
    text: 'Lorem ipsum dolor sit amet, consectetur....',
    author: 'Aishat Otunbade',
  },
  {
    background: require('../assets/icon/latest-icon.svg'),
    title: 'NFTs are beyond....',
    text: 'Lorem ipsum dolor sit amet, consectetur....',
    author: 'Aishat Otunbade',
  },
]

const Home = ({ navigation }) => {
  const { theme } = useContext(ThemeContext)
  const scrollX = new Animated.Value(0)
  const scrollY = new Animated.Value(0)
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
                styles={{
                  height: 360,
                  width: 100,
                  alignItems: 'center',
                }}
                source={item.img}
                resizeMode="center"
              />
            </View>
            <View
              style={{
                position: 'absolute',
                paddingLeft: 50,
                width: 260,
                marginTop: 80,
              }}
            >
              <BoldText
                style={{
                  marginTop: 5,
                  fontSize: 16,
                  color: 'white',
                }}
              >
                {item.description}
              </BoldText>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 5,
                }}
              >
                <NormalText
                  style={{
                    fontSize: 12,
                    color: 'white',
                  }}
                >
                  {item.author} 6 hours ago
                </NormalText>
              </View>
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
              style={[
                styles.dot,
                {
                  width: dotSize,
                  backgroundColor: theme === 'light' ? '#0050C8' : '#C4C4C4',
                },
              ]}
            />
          )
        })}
      </View>
    )
  }

  const renderlatest = () => {
    return (
      <Animated.ScrollView
        horizontal
        pagingEnabled
        scrollEnabled
        decelerationRate={0}
        scrollEventThrottle={15}
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollY } } }],
          { useNativeDriver: false },
        )}
      >
        {Latest.map((item, index) => (
          <View key={`img-${index}`} style={styles.contentcontainer}>
            <View style={styles.contentimage}>
              <SvgUri
                styles={{
                  height: 360,
                  width: 100,
                  alignItems: 'center',
                }}
                source={item.background}
                resizeMode="center"
              />
            </View>
            <View
              style={{
                paddingLeft: 50,
                width: 260,
                marginTop: 10,
              }}
            >
              <BoldText
                style={{
                  marginTop: 5,
                  fontSize: 16,

                  width: '70%',
                }}
              >
                {item.title}
              </BoldText>
              <NormalText
                style={{
                  fontSize: 12,
                }}
              >
                {item.text}
              </NormalText>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '77%',
                  marginTop: 7,
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                  }}
                >
                  <SvgUri
                    source={require('../assets/icon/rounded-img-icon.svg')}
                    resizeMode="center"
                  />
                  <NormalText
                    style={{
                      fontSize: 12,
                      paddingLeft: 5,
                    }}
                  >
                    {item.author}
                  </NormalText>
                </View>
                <SvgUri
                  source={require('../assets/icon/small-bookmark-icon.svg')}
                  resizeMode="center"
                />
              </View>
            </View>
          </View>
        ))}
      </Animated.ScrollView>
    )
  }

  const renderlatestDots = () => {
    const dotlocation = Animated.divide(scrollY, width)

    return (
      <View style={styles.dotsContainer}>
        {onBoardings.map((item, index) => {
          const opacity = dotlocation.interpolate({
            inputRange: [index - 1, index + 1, index + 4],
            outputRange: [0.6, 1, 0.6],
            extrapolate: 'clamp',
          })

          const dotSizeing = dotlocation.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 22, 10],
            extrapolate: 'clamp',
          })

          return (
            <Animated.View
              key={`dot-${index}`}
              opacity={opacity}
              style={[
                styles.dot,
                {
                  width: dotSizeing,
                  backgroundColor: theme === 'light' ? '#0050C8' : '#C4C4C4',
                },
              ]}
            />
          )
        })}
      </View>
    )
  }
  const ArticleContent = [
    {
      id: '1',
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      id: '2',
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      id: '3',
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      id: '4',
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
  ]
  const Events = [
    {
      id: '1',
      title: 'Prunedge Quarterly workshop with Microsoft',
      artimg: require('../assets/icon/Rectangle-icon.svg'),
      author: 'Aminat Otunba',
    },
    {
      id: '2',
      title: 'Prunedge Quarterly workshop with Microsoft',
      artimg: require('../assets/icon/Rectangle-icon.svg'),
      author: 'Aminat Otunba',
    },
    {
      id: '3',
      title: 'Prunedge Quarterly workshop with Microsoft',
      artimg: require('../assets/icon/Rectangle-icon.svg'),
      author: 'Aminat Otunba',
    },
    {
      id: '4',
      title: 'Prunedge Quarterly workshop with Microsoft',
      artimg: require('../assets/icon/Rectangle-icon.svg'),
      author: 'Aminat Otunba',
    },
  ]
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === 'light' ? '#fff' : '#272833' },
      ]}
    >
      <View style={styles.logo}>
        <Image
          style={styles.image}
          source={require('../assets/images/Prunedgesplash.png')}
        />
      </View>
      <ScrollView>
        <View>{renderContent()}</View>
        <View style={styles.dotsRootContainer}>{renderDots()}</View>
        <View style={styles.articlehearder}>
          <BoldText style={{ fontSize: 18 }}>Latest</BoldText>
          <TouchableOpacity onPress={() => navigation.navigate('Latest')}>
            <NormalText
              style={{ paddingTop: 5, fontSize: 12, color: '#0050C8' }}
            >
              EXPLORE ALL
            </NormalText>
          </TouchableOpacity>
        </View>
        <View>{renderlatest()}</View>
        <View style={styles.dotsRootContainer}>{renderlatestDots()}</View>

        <View style={styles.articleSection}>
          <View style={styles.articlehearder}>
            <BoldText style={{ fontSize: 18 }}>All Articles</BoldText>
            <NormalText
              style={{ paddingTop: 5, fontSize: 12, color: '#0050C8' }}
            >
              EXPLORE ALL
            </NormalText>
          </View>
          <View>
            <FlatList
              data={ArticleContent}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.articlecontainer}>
                  <SvgUri source={item.artimg} resizeMode="center" />
                  <View style={{ paddingLeft: 18, width: 260 }}>
                    <BoldText
                      style={{
                        marginTop: 5,
                        fontSize: 16,
                      }}
                    >
                      {item.title}
                    </BoldText>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: 'row',
                        }}
                      >
                        <SvgUri
                          source={require('../assets/icon/rounded-img-icon.svg')}
                          resizeMode="center"
                        />
                        <NormalText
                          style={{
                            fontSize: 12,
                            paddingLeft: 5,
                          }}
                        >
                          {item.author} 6 hours ago
                        </NormalText>
                      </View>
                      <SvgUri
                        source={require('../assets/icon/small-bookmark-icon.svg')}
                        resizeMode="center"
                      />
                    </View>
                  </View>
                </View>
              )}
            />
          </View>

          <View style={styles.eventsection}>
            <View style={styles.articlehearder}>
              <BoldText style={{ fontSize: 18 }}>Events</BoldText>
              <NormalText
                style={{ paddingTop: 5, fontSize: 12, color: '#0050C8' }}
              >
                EXPLORE ALL
              </NormalText>
            </View>
            <FlatList
              data={Events}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.eventcontainer}>
                  <View style={styles.imgcontainer}>
                    <SvgUri
                      styles={{
                        height: 360,
                        width: 100,
                      }}
                      source={item.artimg}
                      resizeMode="center"
                    />
                  </View>
                  <View
                    style={{
                      position: 'absolute',
                      paddingLeft: 50,
                      width: 260,
                      marginTop: 80,
                    }}
                  >
                    <BoldText
                      style={{
                        marginTop: 5,
                        fontSize: 16,
                        color: 'white',
                      }}
                    >
                      {item.title}
                    </BoldText>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 5,
                      }}
                    >
                      <NormalText
                        style={{
                          fontSize: 12,
                          color: 'white',
                        }}
                      >
                        {item.author} 6 hours ago
                      </NormalText>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  logo: {
    height: 80,
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 27,
  },
  image: {
    width: 90,
    height: 26,

    resizeMode: 'contain',
  },
  contentcontainer: {
    marginTop: 10,
    alignItems: 'center',
    width: width / 2,
  },
  contentimage: {
    alignItems: 'center',
  },
  imageAndtextcontainer: {
    marginTop: 30,
    width: width,
    height: 200,
  },
  imgcontainer: {
    alignItems: 'center',
  },
  img: {
    alignItems: 'center',
    width: '100%',

    height: 160,
  },
  textcontainer: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'red',
    fontSize: 18,
    fontFamily: 'UbuntuRegular',
    width: '60%',
  },
  dotsRootContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 15,
  },

  dotsContainer: {
    flexDirection: 'row',
  },
  dot: {
    borderRadius: 6,

    marginHorizontal: 3,
    height: 7,
  },
  articleSection: {},
  articlehearder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 30,
    marginTop: 20,
  },
  articlecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: 10,
    height: 80,
  },
  artimg: {
    height: 360,
    width: 100,
  },
  eventcontainer: {
    marginTop: 20,
    width: width,
  },
})

export default Home
