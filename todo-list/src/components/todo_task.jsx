import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function TodoTask({item, toggleDone}) {
  let doneIcon = false;
  if(item.done) {
    doneIcon = <AntDesign style={styles.taskDone} name="checksquareo" size={24} color="black" />;
  }

  return (
    <Pressable style={styles.task} onPress={() => toggleDone(item.key)}>
      <Text style={styles.taskText}>{item.task}</Text>
      {doneIcon}
    </Pressable>
  );
  }
const styles = StyleSheet.create({
  task: {
    borderColor: '#b9b9b9',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 50
  },
  taskText: {
    flexGrow: 1
  },
  taskDone: {
    width: 30
  }
  });