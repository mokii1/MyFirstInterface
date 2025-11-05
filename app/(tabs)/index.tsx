import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вітаю у React Native!</Text>
      <TextInput
        style={styles.input}
        placeholder="Введіть своє ім’я"
        onChangeText={setName}
      />
      <Button
        title="Натисни мене"
        onPress={() => alert(`Привіт, ${name || 'користувачу'}!`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, width: '80%', marginBottom: 20 },
});
