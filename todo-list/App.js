import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
import TodoTask from './src/components/todo_task';
import React, { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    { key: '1', task: 'Go shopping', done: false},
    { key: '2', task: 'Visit friends', done: true},
    { key: '3', task: 'Study', done: false}
    ]);
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <TodoTask item={item}/>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  list: {
    padding: 25
  }
});
