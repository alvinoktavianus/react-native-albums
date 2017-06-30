/**
 * Created by alvinoktavianus on 6/30/2017.
 */

import React, {Component} from 'react'
import {View, Text} from 'react-native'

class Card extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginTop: 10,
    marginRight: 5
  }
};

export default Card