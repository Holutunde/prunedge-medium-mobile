import React, { useEffect } from 'react'
import {
  Animated,
  Dimensions,
  ScrollAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  FlatList,
} from 'react-native'
import SvgUri from 'expo-svg-uri'
import NormalText, { BoldText } from '../components/Text'

const { width, height } = Dimensions.get('window')

const WorkShop = () => {
  const LatestContent = [
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
    {
      title: '11 tips for when you are moving to a new office space',
      artimg: require('../assets/icon/articleframe.svg'),
      author: 'Aminat Otunbade',
    },
  ]
  return (
    <ScrollView>
      <FlatList
        data={LatestContent}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.latestcontainer}>
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
    </ScrollView>
  )
}

export default WorkShop

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  latestcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 22,
    marginTop: 10,
    height: 80,
  },
})
