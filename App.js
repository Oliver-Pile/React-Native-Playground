import { StyleSheet,Text, View, SafeAreaView, Button } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
    };

  
    const resetCount = () => {
      setCount(0);
      };
    
  return (
    <SafeAreaView style={styles.container}>
      <Text>{count}</Text>
      <Button onPress={increaseCount} title="+1" />
      <Button onPress={resetCount} title="Reset" />
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});