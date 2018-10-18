import React, { Component } from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default class ImageView extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'Фото'),
    }
  }
  render() {
    const { navigation } = this.props
    const img = navigation.getParam('img', '')
    return (
      <View>
        <Image style={styles.image} source={{ uri: img }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
})
