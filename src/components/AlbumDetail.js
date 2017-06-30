/**
 * Created by alvinoktavianus on 6/30/2017.
 */

import React, {Component} from 'react'
import {Text} from 'react-native'

import Card from './Card'
import CardSection from './CardSection'

class AlbumDetail extends Component {
  render() {
    const {album} = this.props;
    return (
      <Card>
        <CardSection>
          <Text>{album.title}</Text>
        </CardSection>
      </Card>
    )
  }
}

export default AlbumDetail