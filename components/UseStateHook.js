import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';

export default function UseStateHook() {

    const [valor, setValor] = useState(0);
    //useState retorna dois valores: o estado (valor) e a função de 
    //alteração do estado (que altera o valor do estado "valor");

    //Funcionamento dos estados:
    //Toda vez que o valor do estado do componente for alterado, 
    //ele renderiza novamente o seu conteúdo.

    //Na prática: toda vez que o setValor for invocado, o valor do estado
    //será alterado e o componente renderizado de novo.

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text style={styles.respostaText}>{valor}</Text>
      <Divider style={styles.divider}/>
      <TouchableOpacity style={[styles.btn, styles.btnAumenta]} onPress={() => {
            setValor(valor + 1);
            console.log(valor);
        }}>
        <Text style={styles.btnText}>Aumentar Valor</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.btn, styles.btnDiminui]} onPress={() => {
            setValor(valor - 1);
            console.log(valor);
        }}>
        <Text style={styles.btnText}>Diminuir Valor</Text>
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
  btnDiminui: {
    backgroundColor: 'red'
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
