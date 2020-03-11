import * as React from 'react';
import { View, Text } from 'react-native';

type PropsType = {
  navigation: {
    navigate: Function,
  },
};

export default class SplashScreen extends React.Component {
  async componentDidMount() {
    setTimeout(async () => {
      this.props.navigation.navigate('Login')
    }, 2000);
  }
  
  render() {
    return(
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Splash Screen</Text>
      </View>
    )
  }
}

