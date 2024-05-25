import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Svg, {Line} from 'react-native-svg';

import {styles} from './styles';

import {Task} from '../../components/task';

export function Home() {
  const [tasks, setTasks] = useState(['Andre Souza Nunes']);
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
            <Image source={require('../../../assets/images/plus.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.task}>
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
          <View
            style={[
              {marginTop: 10, marginLeft: 30, justifyContent: 'space-between'},
            ]}>
            <Svg height="2" width="88%">
              <Line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="gray"
                strokeWidth="1"
                strokeDasharray="2, 2"
              />
            </Svg>
          </View>
          <FlatList
            data={tasks}
            keyExtractor={item => item}
            renderItem={({item}) => <Task key={item} name={item} />}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={() => (
              <View style={styles.empty}>
                <Image
                  style={styles.imageTrash}
                  source={require('../../../assets/images/clipboard.png')}
                />
                <Text style={styles.emptyText}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.emptyTextCria}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            )}
          />
        </View>
      </View>
    </>
  );
}
