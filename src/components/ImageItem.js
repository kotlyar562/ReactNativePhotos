import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

export default class ImageItem extends Component {
  render() {
    const { item, toPhoto } = this.props
    const fullName = `${item.user.first_name} ${item.user.last_name}`
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={toPhoto(fullName, item.urls.full)}
      >
        <Image style={styles.smallImage} source={{ uri: item.urls.thumb }} />
        <View style={styles.descriptionContainer}>
          <Text style={styles.user}>{fullName}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'stretch',
    borderBottomWidth: 2,
    borderBottomColor: '#777',
  },
  smallImage: {
    width: 100,
    height: 100,
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
  },
  user: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#707000',
  },
  desc: {
    fontSize: 12,
    color: '#777',
  },
})
