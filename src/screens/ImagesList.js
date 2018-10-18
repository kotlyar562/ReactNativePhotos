import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'
import { connect } from 'react-redux'

import { loadData, loadNext } from '../reducer'
import Loading from '../components/Loading'
import ImageItem from '../components/ImageItem'
import LoadMore from '../components/LoadMore'
import ErrorMessage from '../components/Error'

class ImageList extends Component {
  static navigationOptions = {
    title: 'Список фотографий',
  }

  componentDidMount = () => {
    this.props.loadData(1)
  }

  toPhoto = (title, img) => () => {
    this.props.navigation.navigate('Photo', {
      title,
      img,
    })
  }

  render() {
    const { data, loadNext, loading, error } = this.props
    return (
      <View>
        {error ? (
          <ErrorMessage error={error} />
        ) : (
          <ScrollView>
            {data.map((item, index) => (
              <ImageItem
                toPhoto={this.toPhoto}
                key={item.id + index}
                item={item}
              />
            ))}
            {loading && <Loading />}
            {!loading && <LoadMore handler={loadNext} />}
          </ScrollView>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
  loading: state.loading,
  error: state.error,
})

const mapDispatchToProps = dispatch => ({
  loadData: page => dispatch(loadData(page)),
  loadNext: () => dispatch(loadNext()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageList)
