import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    margin: 20,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFF',
    fontSize: 16,
    marginRight: 23,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  button: {
    borderRadius: 5,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -35,
    marginLeft: 24,
  },
  viewTodo: {
    width: 375,
    height: 173,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'row',
    width: '100%',
    height: 247,
    justifyContent: 'space-between',
    marginTop: 25,
    paddingLeft: 18,
    paddingRight: 20,
  },
  created: {
    flexDirection: 'row',
  },
  circle: {
    width: 30,
    height: 25,
    borderRadius: 999,
    paddingLeft: 5,
    backgroundColor: '#262626',
    justifyContent: 'center',
  },
  text: {
    color: '#4EA8DE',
    fontWeight: 'bold',
    marginRight: 5,
  },
  counter: {
    color: '#D9D9D9',
    fontSize: 12,
  },
  done: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
