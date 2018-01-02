import React, { Component } from 'react';
import { View, Text, Button, CheckBox } from 'react-native';

class ButtonExample extends Component {
    constructor(props, context) {
        super(props, context);
        this.handlePress = this.handlePress.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            title: "这是一个按钮",
            checked: false,
        }
    }
    handlePress() {
        this.setState({
            title: "按钮的文字变了"
        })
    }
    handleChange() {
        this.setState({
            title: "这是checkbox的回调函数",
            checked: !this.state.checked,
        })
    }
    render() {
        const { title } = this.state;
        return (
            <View>
                <Button
                    color="#eee"
                    title={this.state.title}
                    onPress={this.handlePress}
                />
                <Text>为Button设置color属性时，在IOS中是按钮文字颜色，在android中是按钮背景颜色</Text>
                <CheckBox
                    onValueChange={this.handleChange}
                    value={this.state.checked}
                />
            </View>
        )
    }
}

export default ButtonExample;