import {Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './styles';

type Props = {
  text: string;
  isChecked: boolean;
  isCanceled: boolean;
  onRemove: () => void;
  toggleCheck: () => void;
};

export function Task({
  text,
  isChecked,
  isCanceled,
  onRemove,
  toggleCheck,
}: Props) {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.box}>
          <TouchableOpacity
            style={[{marginLeft: 10}]}
            onPress={() => toggleCheck(!isChecked)}>
            {isChecked ? (
              <Image source={require('../../../assets/images/checked.png')} />
            ) : (
              <Image source={require('../../../assets/images/check.png')} />
            )}
          </TouchableOpacity>
          <View style={styles.textAli}>
            <Text
              style={isCanceled && isChecked ? styles.canceledText : undefined}>
              {text}
            </Text>
          </View>
          <TouchableOpacity onPress={() => onRemove(isCanceled)}>
            <Image
              style={{width: 32, height: 32, borderRadius: 4}}
              source={require('../../../assets/images/trash.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
