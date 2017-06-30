/**
 * Created by alvinoktavianus on 6/28/2017.
 */

import React, {Component} from 'react'
import {View, Text} from 'react-native'

class Header extends Component {
  render() {
    const {textStyle, viewStyle} = styles;
    const {headerText} = this.props;
    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{headerText}</Text>
      </View>
    )
  }
}

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 7.5,
    paddingBottom: 7.5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header