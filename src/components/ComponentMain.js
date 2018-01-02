import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';

const styles = StyleSheet.create({
    items: {
        width: "100%",
        height: 60,
        backgroundColor: "#fff",
        marginVertical: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    }
});

class ComponentMain extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <ScrollView>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("ImageExample")}>
                        <Text>Image</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("ButtonExample")}>
                        <Text>Button</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("FlatListExample")}>
                        <Text>FlatList</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("KeyboardAvoidingViewExample")}>
                        <Text>KeyboardAvoidingView</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("ModalExample")}>
                        <Text>Modal</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("PickerExample")}>
                        <Text>Picker</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("SliderExample")}>
                        <Text>Slider</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("SwitchExample")}>
                        <Text>Switch</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("TextInputExample")}>
                        <Text>TextInput</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("ViewPagerExample")}>
                        <Text>ViewPagerAndroid</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("AlertExample")}>
                        <Text>Alert</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("ClipboardExample")}>
                        <Text>Clipboard</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("KeyboardExample")}>
                        <Text>Keyboard</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.items} onPress={() => navigation.navigate("PanResponderExample")}>
                        <Text>PanResponder</Text>
                    </TouchableHighlight>
                </ScrollView>
            </View>
        )
    }
}

export default ComponentMain;

