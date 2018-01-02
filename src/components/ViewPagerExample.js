import React, { Component } from 'react';
import { View, Text, ViewPagerAndroid } from 'react-native';

class ViewPagerExample extends Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return (
            <ViewPagerAndroid
                initialPage={0}
                style={{height: 1000, width: "100%"}}
            >
                <View style={{alignItems: 'center', padding: 20,}}>
                <Text>First page</Text>
                </View>
                <View style={{alignItems: 'center', padding: 20}}>
                <Text>Second page</Text>
                </View>
            </ViewPagerAndroid>
        );
    }
}

export default ViewPagerExample;