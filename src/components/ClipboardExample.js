import React, { Component } from 'react';
import { View,Text, Clipboard } from 'react-native';

class ClipboardExample extends Component {
	constructor(props, context) {
		super(props, context);
		this._setClipboardContent = this._setClipboardContent.bind(this);
		this.state = {
			content: ""
		};
	}
	async _setClipboardContent(){
		Clipboard.setString('Hello World');
		try {
			var content = await Clipboard.getString();
			this.setState({content});
		} catch (e) {
			this.setState({content: e.message});
		}
	}
	render() {
		return (
			<View>
				<Text onPress={this._setClipboardContent} style={{color: 'blue'}}>
					Tap to put "Hello World" in the clipboard
				</Text>
				<Text style={{color: 'red', marginTop: 20}}>
					{this.state.content}
				</Text>
			</View>
		);
	}
}

export default ClipboardExample;