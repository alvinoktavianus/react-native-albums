/**
 * Created by alvinoktavianus on 6/30/2017.
 */

import React, {Component} from 'react'
import {View, Text} from 'react-native'

class AlbumDetail extends Component {
  render() {
    const {album} = this.props;
    return (
      <View>
        <Text>{album.title}</Text>
      </View>
    )
  }
}

export default AlbumDetail