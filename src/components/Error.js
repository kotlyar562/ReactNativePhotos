import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ErrorMessage = ({ error }) => (
  <View>
    <Text style={styles.error}>{error}</Text>
  </View>
)

const styles = StyleSheet.create({
  error: {
    fontSize: 16,
    color: '#ff5555',
    marginTop: 20,
  },
})

export default ErrorMessage
