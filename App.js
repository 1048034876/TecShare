import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import ComponentMainPage from './src/components/ComponentMain';
import ImageExamplePage from './src/components/ImageExample';
import ButtonExamplePage from './src/components/ButtonExample';
import FlatListExamplePage from './src/components/FlatListExample';
import KeyboardAvoidingViewPage from './src/components/KeyboardAvoidingViewExample';
import ModalExamplePage from './src/components/ModalExample';
import PickerExamplePage from './src/components/PickerExample';
import SliderExamplePage from './src/components/SliderExample';
import SwitchExamplePage from './src/components/SwitchExample';
import TextInputExamplePage from './src/components/TextInputExample';
import ViewPagerExamplePage from './src/components/ViewPagerExample';
import AlertExamplePage from './src/components/AlertExample';
import ClipboardExamplePage from './src/components/ClipboardExample';
import KeyboardExamplePage from './src/components/KeyboardExample';
import PanResponderExamplePage from './src/components/PanResponderExample';
export default StackNavigator({
	ComponentMain: {
		screen: ComponentMainPage,
	},
	ImageExample: {
		screen: ImageExamplePage,
	},
	ButtonExample: {
		screen: ButtonExamplePage,
	},
	FlatListExample: {
		screen: FlatListExamplePage,
	},
	KeyboardAvoidingViewExample: {
		screen: KeyboardAvoidingViewPage
	},
	ModalExample: {
		screen: ModalExamplePage
	},
	PickerExample: {
		screen: PickerExamplePage
	},
	SliderExample: {
		screen: SliderExamplePage
	},
	SwitchExample: {
		screen: SwitchExamplePage
	},
	TextInputExample: {
		screen: TextInputExamplePage
	},
	ViewPagerExample: {
		screen: ViewPagerExamplePage
	},
	AlertExample: {
		screen: AlertExamplePage
	},
	ClipboardExample: {
		screen: ClipboardExamplePage
	},
	KeyboardExample: {
		screen: KeyboardExamplePage
	},
	PanResponderExample: {
		screen: PanResponderExamplePage
	}
});