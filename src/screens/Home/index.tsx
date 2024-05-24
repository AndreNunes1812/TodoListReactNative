import React from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.viewTodo}>
          <Image
            source={require('../../../assets/images/Logo.png')}
            style={styles.image}
          />
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Adcione uma nova tarefa"
            placeholderTextColor="$6B6B6B"
            onChangeText={text => () => null}
            value={null}
          />
          <TouchableOpacity style={styles.button} onPress={null}>
            <Image source={require('../../../assets/images/trash.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.info}>
          <View style={styles.created}>
            <Text style={styles.text}>Criadas </Text>
            <View style={styles.circle}>
              <Text style={styles.counter}>10</Text>
            </View>
          </View>
          <View style={styles.done}>
            <Text style={styles.text}>Concluidas</Text>
            <View style={styles.circle}>
              <Text style={styles.counter}>10</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
