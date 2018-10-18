import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Loading = () => (
  <View>
    <Text style={styles.loading}>Загрузка...</Text>
  </View>
)

const styles = StyleSheet.create({
  loading: {
    fontSize: 16,
    color: '#5555ff',
    marginTop: 20,
  },
})

export default Loading
