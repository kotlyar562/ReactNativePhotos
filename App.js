import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Provider } from 'react-redux'
import store from './src/store'
import ImageList from './src/screens/ImagesList'
import ImageView from './src/screens/ImageView'

const Navigation = createStackNavigator(
  {
    List: {
      screen: ImageList,
    },
    Photo: {
      screen: ImageView,
    },
  },
  {
    initialRouteName: 'List',
  }
)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
