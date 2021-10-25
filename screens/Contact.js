import React, { useState } from 'react'
import {
  Pressable,
  Text,
  StyleSheet,
  Linking,
  View,
  TouchableOpacity,
} from 'react-native'
import SvgUri from 'expo-svg-uri'
import Header from '../components/Header'
import SmallText from '../components/Text'

const Setting = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header>Contact Us</Header>
      <View style={styles.imageContainer}>
        <SvgUri
          style={styles.image}
          source={require('../assets/icon/contact-icon.svg')}
        />
      </View>
      <View style={styles.line}></View>
      <SmallText style={styles.uppertext}>
        You can reach us via our email and social media handles
      </SmallText>
      <SmallText style={styles.emailtitle}>Emall Address</SmallText>
      <View style={styles.emailbody}>
        <View style={styles.linkcontainer}>
          <SmallText style={styles.emaillink}>contactus@prunedge.com</SmallText>
        </View>
        <View style={styles.copycontainer}>
          <TouchableOpacity>
            <SmallText style={styles.emailcopy}>Copy</SmallText>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.addcontainer}>
        <SvgUri
          style={styles.icon}
          source={require('../assets/icon/home-icon.svg')}
        />
        <View style={styles.addcontent}>
          <SmallText style={styles.addtitle}>
            Vist Us, We will love to see you
          </SmallText>
          <SmallText style={styles.addtext}>
            7b, Omo-Ighodalo, Ogudu GRA Road
          </SmallText>
        </View>
      </View>
      <View style={styles.mediacontainer}>
        <SvgUri
          style={styles.medicon}
          source={require('../assets/icon/twitter.svg')}
        />
        <View style={styles.addcontent}>
          <Pressable
            onPress={() =>
              Linking.openURL('https://www.instagram.com/prunedge')
            }
          >
            <SmallText style={styles.addtext}>Twitter Page</SmallText>
          </Pressable>
        </View>
      </View>
      <View style={styles.mediacontainer}>
        <SvgUri
          style={styles.medicon}
          source={require('../assets/icon/social-facebook.svg')}
        />
        <View style={styles.addcontent}>
          <Pressable
            onPress={() => Linking.openURL('https://www.facebook.com/Prunedge')}
          >
            <SmallText style={styles.addtext}>Facebook Page</SmallText>
          </Pressable>
        </View>
      </View>
      <View style={styles.mediacontainer}>
        <SvgUri
          style={styles.medicon}
          source={require('../assets/icon/instagram-icon.svg')}
        />
        <View style={styles.addcontent}>
          <Pressable
            onPress={() => Linking.openURL('https://twitter.com/prunedge')}
          >
            <SmallText style={styles.addtext}>Instagram Page</SmallText>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 60,
    alignItems: 'center',
  },
  line: {
    borderWidth: 1,
    borderColor: '#c8cacf',
    width: 300,
    marginLeft: 50,
  },
  uppertext: {
    fontSize: 12,
    color: '#393A4A',
    textAlign: 'center',
    lineHeight: 46,
  },
  emailtitle: {
    color: '#137EE0',
    fontSize: 14,
    fontWeight: '500',
    paddingLeft: 20,
  },
  emailbody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 45,
  },
  emaillink: {
    color: '#000000',
    paddingLeft: 10,
  },
  linkcontainer: {
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 10,
    width: '84%',
    justifyContent: 'space-between',
    borderColor: '#f2f2f2',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
  },
  copycontainer: {
    backgroundColor: '#137EE0',
    width: '16%',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
  emailcopy: {
    color: '#FFFFFF',
  },
  addcontainer: {
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: 23,
    marginTop: 12,
    padding: 15,
    height: 72,
    borderColor: '#000000',
    borderRadius: 8,
  },
  icon: {
    paddingRight: 10,
    paddingTop: 4,
  },
  addtitle: {
    color: '#137EE0',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18,
  },
  addtext: {
    color: '#393A4A',
    fontWeight: '400',
    fontSize: 12,
  },
  mediacontainer: {
    flexDirection: 'row',
    borderWidth: 1,
    marginHorizontal: 23,
    marginTop: 14,
    padding: 15,
    height: 50,
    borderRadius: 8,
    borderColor: '#000000',
  },
  medicon: {
    paddingRight: 10,
  },
})
