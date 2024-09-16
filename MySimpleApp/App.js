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
        source={{ uri: 'https://dhttps://www.notion.so/integr-ia/Image-de-l-application-102ab155727680888738dc3865c59eda?pvs=4#102ab155727680169ec4de1e15d663e5rive.google.com/file/d/1EcM_cJtGYrxErqLsYLqGBl6dzNKSsxF6/view?usp=drive_link' }} 
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
    justifyContent: 'center',
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
    borderRadius: 4,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
    alignSelf: 'center',
  },
  output: {
    fontSize: 18,
    marginTop: 16,
    textAlign: 'center',
  },
});
