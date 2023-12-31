import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './src/components/Header';
import TodoTask from './src/components/todo_task';
import AddTask from './src/components/addTask';
import React, { useState } from 'react';

export default function App() {
  const [todos, setTodos] = useState([
    { key: '1', task: 'Go shopping', done: false},
    { key: '2', task: 'Visit friends', done: true},
    { key: '3', task: 'Study', done: false}
    ]);

    const toggleDone = (key) => {
      const objIndex = todos.findIndex((obj => obj.key == key));
      const todosNew = [...todos];
      todosNew[objIndex]['done'] = !todosNew[objIndex]['done'];
      setTodos(todosNew);
    };

    const addTask = (text) => {
      setTodos((prevTodos) => {
        return [{
            key: Math.random().toString(),
            task: text,
            done: false
          }, ...prevTodos]
        });
      }

  return (
    <View style={styles.container}>
      <Header/>
      <AddTask addTask={addTask}/>
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({item}) => (
            <TodoTask item={item} toggleDone={toggleDone}/>
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
