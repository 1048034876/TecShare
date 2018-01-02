import React, { Component } from 'react';
import { View, Text, TextInput, KeyboardVoidingView, KeyboardAvoidingView } from 'react-native';

class KeyboardVoidingViewExample extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <View style={{flex: 1, alignItems: "center"}}>
                <KeyboardAvoidingView behavior="padding" style={{flex: 1, justifyContent: "center", width: "70%"}}>
                    <TextInput
                        underlineColorAndroid={"#fff"}
                        placeholder="这是使用了KeyboardAvoidingView的输入框"
                        style={{borderRadius: 5, borderWidth: 1, height:50, paddingHorizontal: 10}}
                    />
                </KeyboardAvoidingView>
            </View>
        );
    }
}

export default KeyboardVoidingViewExample;