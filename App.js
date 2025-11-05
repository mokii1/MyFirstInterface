import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Вітаю у React Native!</Text>

      {/* Поле введення імені */}
      <TextInput
        style={styles.input}
        placeholder="Введіть своє ім’я"
        value={name}
        onChangeText={setName}
      />

      {/* Кнопка з реакцією на натискання */}
      <Button
        title="Натисни мене"
        onPress={() => alert(`Привіт, ${name || 'користувачу'}!`)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6f8',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    width: '80%',
    marginBottom: 20,
  },
});