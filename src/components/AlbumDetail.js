/**
 * Created by alvinoktavianus on 6/30/2017.
 */

import React, {Component} from 'react'
import {View, Text} from 'react-native'

import Card from './Card'

class AlbumDetail extends Component {
  render() {
    const {album} = this.props;
    return (
      <Card>
        <Text>{album.title}</Text>
      </Card>
    )
  }
}

export default AlbumDetail