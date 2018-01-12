import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#27ae60',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {
    // borderColor: 'pink',
    // borderStyle: 'solid',
    // borderWidth: 1,

    height: 100,
    width: 100,
  },

  dice: {
    position: 'absolute',

    // borderColor: 'red',
    // borderStyle: 'solid',
    // borderWidth: 1,

    height: 100,
    width: 100,
  },

  diceSide: {
    borderColor: 'pink',
    borderStyle: 'dashed',
    borderWidth: 1,

    height: 100,
    width: 100,

    backgroundColor: '#ffffff',
  },

  diceSideFront: {
    backgroundColor: '#ffffff',

    height: 100,
    width: 100,
  },

});