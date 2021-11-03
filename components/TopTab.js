import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'
import SvgUri from 'expo-svg-uri'
import HomeIcon from '../assets/icon/home-nav-icon.svg'
import ExploreIcon from '../assets/icon/explore-nav-icon.svg'
import BookmarkIcon from '../assets/icon/bookmark-nav-icon.svg'
import SettingIcon from '../assets/icon/setting-nav-icon.svg'

const TopTab = ({ navigation }) => {
  const activeIndex = navigation.state.index
  const links = [
    {
      text: 'Latest',
      link: 'LatestStack',
      renderIcon: (style) => <HomeIcon {...style} />,
      index: 0,
    },
    {
      text: 'Popular',
      link: 'PopularStack',
      renderIcon: (style) => <ExploreIcon {...style} />,
      index: 1,
    },
    {
      text: 'Workshops',
      link: 'WorkStack',
      renderIcon: (style) => <BookmarkIcon {...style} />,
      index: 2,
    },
    {
      text: 'Seminars',
      link: 'SeminarStack',
      renderIcon: (style) => <SettingIcon {...style} />,
      index: 3,
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <SvgUri
          style={{ paddingTop: 25, paddingLeft: 25 }}
          source={require('../assets/icon/back-arrow-icon.svg')}
        />
      </TouchableOpacity>
      <View style={styles.content}>
        {links.map(({ index, text, link, renderIcon }) => {
          const active = index === activeIndex
          const iconStyles = {
            height: 20,
            width: 20,
            color: active ? 'blue' : 'green',
          }

          return (
            <TouchableOpacity
              key={link}
              onPress={() => navigation.navigate(link)}
              style={styles.item}
            >
              {/* {renderIcon(iconStyles)} */}
              <Text
                style={{
                  ...styles.itemText,
                  color: active ? '#0050C8' : '#393A4A',
                }}
              >
                {text}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: 100,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  item: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
    textAlign: 'center',
  },
})

export default TopTab
