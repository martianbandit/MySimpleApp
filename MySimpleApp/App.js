import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert, Image } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handlePress = () => {
    setSubmittedText(text);
    Alert.alert('Texte soumis', text);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue dans MySimpleApp</Text>
      <Image 
        style={styles.image}
        source={{ uri: 'https://via.placeholder.com/150' }} 
      />
      <TextInput
        style={styles.input}
        placeholder="Saisir du texte"
        value={text}
        onChangeText={setText}
      />
      <Button title="Soumettre" onPress={handlePress} />
      <Text style={styles.output}>Texte soumis : {submittedText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginBottom: 16,
    borderRadius: 10,
  },
  output: {
    fontSize: 18,
    marginTop: 16,
    textAlign: 'center',
  },
});
