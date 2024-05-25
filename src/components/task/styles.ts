import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    flexDirection: 'row',
    width: 327,
    height: 64,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#262626',
    marginBottom: 4,
  },
  textAli: {
    width: 235,
    height: 40,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 19.6,
    color: '#F2F2F2',
    marginTop: 15,
  },

  canceledText: {
    textDecorationLine: 'line-through',
    color: '#6B6B6B',
  },
});
