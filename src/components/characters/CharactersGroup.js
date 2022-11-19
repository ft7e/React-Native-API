import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Character from './Character';

function CharactersGroup(props) {
  return (
    <View style={styles.charContainer}>
      {props.data.map((element, index) => {
        return (
          <Character name={element.name} image={element.image} key={index} />
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  charContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default CharactersGroup;
