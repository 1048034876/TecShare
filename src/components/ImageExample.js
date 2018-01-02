import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
	},
	items: {
		width: "100%",
		height: 300,
	}
})
class ImageExample extends Component {
	constructor(props, context) {
		super(props, context)
	}
	render() {
		return (
			<View>
				<ScrollView>
				<Image source={require("../images/1.jpg")}
       				style={{width: 400, height: 400}}
				/>
				<Image source={require("../images/1.jpg")}
       				style={{width: 400, height: 400, resizeMode: "cover"}}
				/>
				<Image source={require("../images/1.jpg")}
       				style={{width: 400, height: 400, resizeMode: "contain"}}
				/>
				</ScrollView>
			</View>
		)
	}
}

export default ImageExample;