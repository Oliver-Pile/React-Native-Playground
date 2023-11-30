import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TodoTask({item}) {
  return (
    <View style={styles.task}>
      <Text>{item.task}</Text>
    </View>
  );
  }
const styles = StyleSheet.create({
  task: {
    /* styles here */
  },
  });