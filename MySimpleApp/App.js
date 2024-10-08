import React, { useState } from 'react';
import { Text, View, TextInput, Button, StyleSheet, Alert, Image, ImageBackgroundComponent } from 'react-native';
import LocalImage from './assets/favicon.png';
import LocalImage2 from './assets/splash.png';

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

      <Image2
        styles={styles.Image}
        source={LocalImage2}
      />
      <Image
        style={styles.image}
        source={LocalImage}
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
  Image2: {
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
