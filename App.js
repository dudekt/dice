import React from 'react'
import classnames from 'classnames'
import { Alert, Button, Text, View } from 'react-native'

import { styles } from './src/styles'

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
        number: null,
    }
}


  rollNumber() {
    let randomNumber = Math.floor(Math.random() * 6) + 1 

    this.setState({
      number: randomNumber
    })
  }

  render() {
    return (
      <View
        style={styles.container}
      >
        <View style={styles.wrapper}>
          <View style={styles.dice}>
            <View style={styles.diceSide}>
              <Text style={styles.number}>
                {this.state.number}
              </Text>
            </View>
          </View>
        </View>
        <View
            style={styles.button}
          >
            <Text
              style={styles.text}
              onPress={() => {
                this.rollNumber()
              }}
            >
              Rzucaj kostką
            </Text>
        </View>
      </View>
    );
  }
}

