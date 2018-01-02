import React, { Component } from 'react';
import { View,Text,  Alert, TouchableHighlight } from 'react-native';

class AlertExample extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            message: "waiting for alert"
        };
    }
    render() {
        return (
            <View>
                <TouchableHighlight style={{borderRadius: 5, marginBottom: 5}}
                    onPress={() => Alert.alert('Alert Title', this.state.message)}
                >
                    <View style={{backgroundColor: '#eeeeee', padding: 10}}>
                        <Text>Alert with message and default button</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{borderRadius: 5, marginBottom: 5}}
                    onPress={() => Alert.alert(
                        'Alert Title',
                        this.state.message,
                        [{text: 'OK', onPress: () => console.log('OK Pressed!')}]
                    )}
                >
                    <View style={{backgroundColor: '#eeeeee', padding: 10}}>
                        <Text>Alert with one button</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{borderRadius: 5, marginBottom: 5}}
                    onPress={() => Alert.alert(
                        'Alert Title',
                        this.state.message,
                        [{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
                        {text: 'OK', onPress: () => console.log('OK Pressed!')}]
                    )}
                >
                    <View style={{backgroundColor: '#eeeeee', padding: 10}}>
                        <Text>Alert with two buttons</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{borderRadius: 5, marginBottom: 5}}
                    onPress={() => Alert.alert(
                        'Alert Title',
                        null,
                        [{text: 'Foo', onPress: () => console.log('Foo Pressed!')},
                        {text: 'Bar', onPress: () => console.log('Bar Pressed!')},
                        {text: 'Baz', onPress: () => console.log('Baz Pressed!')}]
                    )}
                >
                    <View style={{backgroundColor: '#eeeeee', padding: 10}}>
                        <Text>Alert with three buttons</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={{borderRadius: 5, marginBottom: 5}}
                    onPress={() => Alert.alert(
                        'Foo Title',
                        this.state.message,
                        '..............'.split('').map((dot, index) => ({
                        text: 'Button ' + index,
                        onPress: () => console.log('Pressed ' + index)
                        }))
                    )}
                >
                    <View style={{backgroundColor: '#eeeeee', padding: 10}}>
                        <Text>Alert with too many buttons</Text>
                    </View>
                </TouchableHighlight>
            </View>
        )
    }
}

export default AlertExample;