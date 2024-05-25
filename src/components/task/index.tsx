import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export function Task() {
  const [task, setTask] = useState('');

  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity style={[{marginLeft: 10}]}>
            <Image source={require('../../../assets/images/check.png')} />
          </TouchableOpacity>
          <View style={styles.textAli}>
            <Text>
              Integer urna interdum massa libero auctor neque turpis turpis
              semper.
            </Text>
          </View>
          <TouchableOpacity>
            <Image
              style={[{with: 32, height: 32, borderRadius: 4}]}
              source={require('../../../assets/images/trash.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
