import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

import HomeIcon from '../assets/icon/home-nav-icon.svg'
import ExploreIcon from '../assets/icon/explore-nav-icon.svg'
import BookmarkIcon from '../assets/icon/bookmark-nav-icon.svg'
import SettingIcon from '../assets/icon/setting-nav-icon.svg'

const BottomTab = ({ navigation }) => {
  const activeIndex = navigation.state.index
  const links = [
    {
      text: 'Home',
      link: 'HomeStack',
      renderIcon: (style) => <HomeIcon {...style} />,
      index: 0,
    },
    {
      text: 'Explore',
      link: 'ExploreStack',
      renderIcon: (style) => <ExploreIcon {...style} />,
      index: 1,
    },
    {
      text: 'Bookmarks',
      link: 'BookmarkStack',
      renderIcon: (style) => <BookmarkIcon {...style} />,
      index: 2,
    },
    {
      text: 'Settings',
      link: 'SettingStack',
      renderIcon: (style) => <SettingIcon {...style} />,
      index: 3,
    },
  ]

  return (
    <SafeAreaView style={styles.container}>
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
              {/* //{renderIcon(iconStyles)} */}
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
    elevation: 5,
    shadowRadius: 10,
    shadowColor: 'rgba(0, 0, 0, .1)',
    shadowOffset: {
      height: -3,
      width: 0,
    },
    shadowOpacity: 1,
  },
  content: {
    // borderTopWidth: 1,
    // borderTopColor: borderGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    // paddingHorizontal: 20,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  itemText: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
  },
})

export default BottomTab
