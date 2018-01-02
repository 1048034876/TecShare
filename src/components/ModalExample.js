import React, { Component } from 'react';
import { View, Text, Modal , TouchableHighlight } from 'react-native';

class ModalExample extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleTrans = this.handleTrans.bind(this);
        this.state = {
            visible: false,
            transparent: false,
        }
    }
    handleClose(visible) {
        this.setState({
            modalVisible: visible
        });
    }
    handleTrans() {
        this.setState({
            transparent: !this.state.transparent
        });
    }
    render() {
        var modalBackgroundStyle = this.state.transparent ? "rgba(0, 0, 0, 0.5)" : "#f5fcff";
        var innerContainerTransStyle = this.state.transparent ? "backgroundColor: '#fff', padding: 20" : "";
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: "center",}}>
                <Modal
                    animationType="fade"
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this.handleClose(false)}}
                >
                    <View style={{flex: 1, justifyContent: "center", padding: 20, backgroundColor: modalBackgroundStyle}}>
                        <View style={{borderRadius: 10, alignItems: "center", backgroundColor: '#fff', padding: 20}}>
                            <Text>This modal was presented {this.state.animationType === 'none' ? 'without' : 'with'} animation.</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default ModalExample;