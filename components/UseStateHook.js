import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

export default function UseStateHook() {

    const [numero, setNumero] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.respostaText}>{numero}</Text>
      <Divider style={styles.divider}/>
      <TouchableOpacity style={[styles.btn, styles.btnAumenta]} onPress={() => { setNumero(numero + 1); }}>
        <Text style={styles.btnText}>Aumentar valor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.btndimi]} onPress={() => { setNumero(numero - 1); }}>
        <Text style={styles.btnText}>Diminui valor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.btnmult]} onPress={() => { setNumero(numero * 2); }}>
        <Text style={styles.btnText}>Multiplicar Valor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },
  btn: {
    backgroundColor: 'powderblue',
    borderRadius: 8,
    marginBottom: 30,
    height: 40,
    padding: 10,
    width: 120,
    alignItems: 'center'
  },
  btnAumenta: {
    backgroundColor: 'green'
  },
  btndimi: {
    backgroundColor: 'red'
  },
  btnmult: {
    backgroundColor: 'blue'
  },
  btnText: {
    color: '#fff'
  },
  respostaText: {
    paddingBottom: 10,
    fontSize: 40
  },
  divider: {
    backgroundColor: '#000',
    height: 2,
    width: '80%',
    marginBottom: 40
  }
});
