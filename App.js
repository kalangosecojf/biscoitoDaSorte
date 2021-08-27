import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';


const App = () => {

  const list = [
    'Siga os bons e aprenda com eles.',
    'O bom-senso vale mais do que muito conhecimento.',
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'Tomar uma atitude é o primeiro passo para dar vida ao sonho.'
  ]


  const [imgBiscoito, setImgBiscoito] = useState(require('./images/biscoito.png'));
  const [txtBiscoito, setTextBiscoito] = useState('');

  const quebrarBiscoito = () => {
    setImgBiscoito(require('./images/biscoitoQuebrado.png'));
    setTextBiscoito(list[Math.floor(Math.random() * list.length)])
  }

  const resetarBiscoito = () => {
    setImgBiscoito(require('./images/biscoito.png'));
    setTextBiscoito('')
  }

  return (
    <View >
      <View
        style={styles.viewImg}>
        <Image
          style={styles.img}
          source={imgBiscoito}
        />

        <Text
          style={styles.text}
        >{txtBiscoito}</Text>
      </View>
      <View style={styles.viewButton}>
        <Button
          style={styles.btnQuebrar}
          title="Quebrar o Biscoito"
          onPress={quebrarBiscoito}
          color='#D2691E'
        />
      </View>
      <View style={styles.viewButton}>
        <Button
          style={styles.btnResetar}
          title="Resetar"
          color='#C0C0C0'
          onPress={resetarBiscoito}
        />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'with',
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  img: {
    width: 100,
    height: 100,
  },
  viewImg: {
    flex: 2,
    padding: 20,
    backgroundColor: 'with',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewButton: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
    color: '#D2691E',
    justifyContent: 'center',
  },
  btnQuebrar: {
    padding: 20,
    color: '#F0f0f0'
  },
  btnResetar: {
    padding: 20,
    color: '#F0f0f0'
  },
  box1: {
    flex: 2,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 2,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 2,
    margin: 6,
    padding: 6,
    borderColor: 'red',
  },
  scroll: {
    padding: 20,
  }
});
