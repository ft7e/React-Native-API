/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, StyleSheet} from 'react-native';
function PageButton(props) {
  return (
    <Button
      style={styles.btn}
      onPress={props.handlePageChange}
      title={props.number.toString()}
      color="#000000"
      accessibilityLabel="Learn more about this purple button"
    />
  );
}
const styles = StyleSheet.create({
  btn: {
    width: 100,
    backgroundColor: 'gray',
  },
});

export default PageButton;
