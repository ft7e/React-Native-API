import React from 'react';
import {View, StyleSheet} from 'react-native';

function Container(props) {
  return <View style={styles.container}>{props.children}</View>;
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#000',
    padding: 40,
    height: '100%',
  },
});
export default Container;
