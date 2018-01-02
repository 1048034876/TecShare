import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';

class SwitchExample extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleValueChange = this.handleValueChange.bind(this);
        this.state = {
            value: true
        }
    }
    handleValueChange() {
        this.setState({
            value: !this.state.value
        });
    }
    render() {
        return (
            <Switch
                onValueChange={this.handleValueChange}
                value={this.state.value}
                onTintColor="#ddd"
                thumbTintColor="#00CCFF"
                tintColor="#6633FF"
                style={{width: 400, height: 100, marginTop: 40}}
            />
        );
    }
}

export default SwitchExample;