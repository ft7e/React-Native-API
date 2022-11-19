/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';

const Character = props => {
  return (
    <View style={styles.mainCharConainer}>
      <Image source={{uri: props.image}} style={styles.charImage} />
      <Text style={styles.charText}>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  charImage: {
    width: 100,
    height: 100,
  },
  charText: {
    color: '#fff',
    marginBottom: 1,
    marginTop: 1,
    fontSize: 15,
    width: 100,
    textAlign: 'center',
  },
  mainCharConainer: {
    marginRight: 2,
    marginLeft: 2,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default Character;
