import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,Button,SafeAreaView,Alert,focus } from 'react-native';
import Btn from './src/components/Btn';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        keyboardType='text'
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        keyboardType="password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        keyboardType="email-adress"
      />
      <Btn
        nameButton="Login"
      />
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
  input: {
    borderRadius:12,
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
});
