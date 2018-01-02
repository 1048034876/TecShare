import React, { Component } from 'react';
import { View, Text, FlatList, Button } from 'react-native';

class  FlatListExample extends Component {
	constructor(props, context) {
		super(props, context);
		this.handleScroll = this.handleScroll.bind(this);
	}
	handleScroll() {
		this._flatList.scrollToOffet({
			animated: true,
			offset: 2000
		});
	}
	refreshing() {
		let timer = setTimeout(() => {
			clearTimeout(timer);
			alert("刷新成功")
		}, 1500);
	}
	_onLoad() {
		let timer = setTimeout(() => {
			clearTimeout(timer);
			alert("加载成功")
		}, 1500);
	}
	_renderItem(item) {
		var txt = "第" + item.index + "个" + "title=" + item.item.title;
		var bgColor = item.index % 2 == 0 ? "#eee" : "#ccc";
		return (
			<Text style={{flex: 1, height: 100, backgroundColor: bgColor, textAlign: "center", textAlignVertical: "center", color: "#fff", fontSize: 30}}>
				{txt}
			</Text>
		)
	}
	_header() {
		return (
			<Text style={{textAlignVertical: "center", color: "#fff", fontSize: 30, backgroundColor: "#ccc"}}>这是头部</Text>
		)
	}
	_footer() {
		return (
			<Text style={{textAlignVertical: "center", color: "#fff", fontSize: 30, backgroundColor: "#ccc"}}>这是尾部</Text>
		)
	}
	_separator() {
		return (
			<View style={{height: 2, backgroundColor: "yellow"}} />
		)
	}
	render() {
		var data = [];
		for (var i = 0; i < 100; i++) {
			data.push({
				key: i,
				title: i + ""
			});
		}
		return (
			<View style={{flex: 1}}>
				<Button
					title="滚动到指定位置"
					onPress={this.handleScroll}
				/>
				<View style={{flex: 1}}>
					<FlatList
						ref={(flatList) => this._flatList = flatList}
						ListHeaderComponent={this._header}
						ListFooterComponent={this._footer}
						ItemSeparatorComponent={this._separator}
						renderItem={this._renderItem}
						onRefresh={this.refreshing}
						refreshing={false}
						onEndReachedThreshold={10}
						onEndReached={this._onLoad}
						numColumns={3}
						columnWrapperStyle={{borderWidth: 1, borderColor: "#ddd", paddingLeft: 20}}
						getItemLayout={(data, index) => ({length: 100, offset: (100+2) * index, index})}
						data={data}
					/>
				</View>
			</View>
		)
	}
}

export default FlatListExample;