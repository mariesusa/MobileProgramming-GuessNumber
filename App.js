import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [guessNumber, setGuessNumber] = useState(0);
  const [result, setResult] = useState('');
  const [random, setRandom] = useState(Math.floor(Math.random() * 100 + 1));
  const [guesses, setGuesses] = useState(1);

  const pressButton = () => {
     
    setGuesses(guesses + 1)

    if (guessNumber == random) {
      
      Alert.alert('You guessed the number in ' + guesses + ' guesses')
    } else if (guessNumber < random) {
      setResult('Your guess ' + guessNumber + ' is too low')
    } else if (guessNumber > random) {
      setResult('Your guess ' + guessNumber + ' is too high')
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Guess a number between 1-100
        {'\n'}
      { result }
      </Text>
      <StatusBar style="auto" /> 

    <TextInput style={styles.input}
    keyboardType= 'numeric'
    onChangeText={guessNumber => setGuessNumber (guessNumber)}
    value={guessNumber}
    />

    <View style={styles.button}>
      <Button onPress={pressButton} title='MAKE GUESS' />
    </View>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    alignItems: 'center'
  },
  input : {
    width: 50,
    borderColor: 'black',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5
  },
  button : {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 5
}

});
