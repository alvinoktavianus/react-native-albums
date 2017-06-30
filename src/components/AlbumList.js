/**
 * Created by alvinoktavianus on 6/30/2017.
 */

import React, {Component} from 'react'
import {View, Text} from 'react-native'
import axios from 'axios'

import AlbumDetail from './AlbumDetail'

class AlbumList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: []
    }
  }

  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({albums: response.data}))
  }

  renderAlbums() {
    const {albums} = this.state;
    return albums.map((album, id) =>
      <AlbumDetail key={id} album={album}/>
    )
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}

export default AlbumList