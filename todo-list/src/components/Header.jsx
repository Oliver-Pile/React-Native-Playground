import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
    <Text style={styles.headerText}>To Do List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: '#34ace0',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 18
  }
});