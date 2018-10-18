import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

const LoadMore = ({ handler }) => (
  <TouchableOpacity style={styles.loadMore} onPress={handler}>
    <Text style={styles.textStyle}>Загрузить еще</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  loadMore: {
    backgroundColor: '#eeffee',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    color: '#007f7f',
    padding: 5,
  },
})

export default LoadMore
