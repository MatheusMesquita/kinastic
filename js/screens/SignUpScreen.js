import * as React from 'react';
import { View, Text } from 'react-native';

type PropsType = {
  navigation: {
    navigate: Function,
  },
};

export default class SignUpScreen extends React.Component {
    render() {
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Sign Up Screen</Text>
            </View>
        )
    }
}

