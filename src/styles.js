import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ecc71',
    flexDirection: 'column',
  },

  wrapper: {
    alignSelf: 'center',
    justifyContent: 'center',
    flex: 10,
    height: 200,
    width: 200,
  },

  dice: {
    position: 'absolute',
    height: 200,
    width: 200,
  },

  diceSide: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    height: 200,
    width: 200,
  },

  number: {
    fontSize: 100,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  text: {
    color: 'white',
    fontSize: 24,
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
  },

  button: {
    backgroundColor: '#27ae60',
    flex: 1,
  },

});