import React, {Component} from 'react';
import { View, Text, Slider } from 'react-native';

class SliderExample extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: 0,
        }
    }
    render() {
        return (
            <View style={{flex:1}}>
                <Slider />
                <Slider disabled={true}/>
                <Slider maximumTrackTintColor='black'/>
                <Slider minimumTrackTintColor='red'/>
                <Slider style={{borderWidth:1,borderColor:'red'}}/>
                <Text>{this.state.value}</Text>
                <Slider minimumValue={5} maximumValue={20} onValueChange={(value)=>{this.setState({value:value})}} onSlidingComplete={(value)=>{this.setState({value:value})}}/>
                <Slider step={0.2}/>
                <Slider value={0.5}/>
            </View>
        );
    }
}

export default SliderExample;