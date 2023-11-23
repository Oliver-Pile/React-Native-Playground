import { StyleSheet,Text, View, SafeAreaView, Button } from 'react-native';
import React, { useState } from 'react';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';

export default function App() {
  const [count, setCount] = useState(0);

  const increaseCount = (by) => {
    setCount(count + by);
    };

  const decrementCount = () => {
    setCount(count - 1);
    };


  const resetCount = () => {
    setCount(0);
    };
    
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.count}>{count}</Text>
      <View style={styles.row}>
        <Button color="red" onPress={decrementCount} title="-1" />
        <Button color="green" onPress={() => increaseCount(1)} title="+1" />
      </View>
      <Button color="orange" onPress={() => increaseCount(10)} title="Bonus" />
      <Button color="purple" onPress={resetCount} title="Reset" />
    </SafeAreaView>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 50,
    marginBottom: 40
  },
  row: {
    flexDirection: "row",
    columnGap: 20,
    marginBottom: 20
  }
});