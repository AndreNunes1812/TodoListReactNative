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

type TaskItem = {
  text: string;
  isChecked: boolean;
  isCanceled: boolean;
};

type FieldName = keyof TaskItem;

export function Home() {
  const [tasks, setTasks] = useState<TaskItem[]>([]);
  const [newTask, setNewTask] = useState<TaskItem>({
    isChecked: false,
    isCanceled: false,
    text: '',
  });

  const handleAddTask = () => {
    setTasks(prevTasks => [...prevTasks, newTask]);
    setNewTask({
      isChecked: false,
      isCanceled: false,
      text: '',
    });
  };

  const handleInputChange = (field: FieldName, value: string) => {
    setNewTask(prevState => ({
      ...prevState,
      [field]: value,
    }));
  };

  const toggleCheck = (index: number) => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? {...task, isChecked: !task.isChecked} : task,
      ),
    );
  };

  const getCreatedTasksCount = () => {
    return tasks.length;
  };

  const getCompletedTasksCount = () => {
    return tasks.filter(task => task.isChecked).length;
  };

  const onRemove = (index: number) => {
    setTasks(prevTasks =>
      prevTasks.map((task, i) =>
        i === index ? {...task, isCanceled: true} : task,
      ),
    );
  };

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
            onChangeText={text => handleInputChange('text', text)}
            value={newTask.text}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddTask}>
            <Image source={require('../../../assets/images/plus.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.task}>
          <View style={styles.info}>
            <View style={styles.created}>
              <Text style={styles.text}>Criadas </Text>
              <View style={styles.circle}>
                <Text style={styles.counter}>{getCreatedTasksCount()}</Text>
              </View>
            </View>
            <View style={styles.done}>
              <Text style={styles.text}>Concluidas</Text>
              <View style={styles.circle}>
                <Text style={styles.counter}>{getCompletedTasksCount()}</Text>
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
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item, index}) => (
              <Task
                index={index}
                text={item.text}
                isChecked={item.isChecked}
                isCanceled={item.isCanceled}
                toggleCheck={() => toggleCheck(index)}
                onRemove={() => onRemove(index)}
              />
            )}
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
