import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

class TextInputExample extends Component {
    constructor(props) {
        super(props);
        this.state = { text: 'Useless Placeholder' };
    }
    
    render() {
        return (
            <TextInput
                style={{height: 150, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => this.setState({text})}
                value={this.state.text}
            />
        );
    }
}

export default TextInputExample;