import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';

class PickerExample extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            language: ""
        };
    }
    render() {
        return (
            <Picker
                style={{width: 300, backgroundColor: "#fff"}}
                mode={"dropdown"}
                selectedValue={this.state.language}
                onValueChange={(lang) => this.setState({language: lang})}
            >
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
            </Picker>
        )
    }
}

export default PickerExample;