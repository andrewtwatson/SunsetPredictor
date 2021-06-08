import React from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Slider from '@react-native-community/slider';
import { SmallThinText } from './util/TextDesigns.js';
import { sendRatingPost } from '../ConnectToServer.js';

const styleData = require('../style.json');

/**
 * Holds the information for the screen with the slider and submit button
 */
function addZeros(num) {
    var value = Number(num);
    var res = num.toFixed(1).split(".");
    // If there is no decimal point or only one decimal place found.
    if (res.length == 1 || res[1].length < 2) {
        // Set the number to one decimal place
        value = value.toFixed(1);
    }
    if (value === '10.0')
        value = '10.0 ';
    // Return updated or original number.
    return value;
}

/**
 * Sends Data to the server and acts accordingly on the response.
 */
function sendData(rating) {
    Alert.alert("pressed");
    sendRatingPost(rating);
}

class SunsetRateScreen extends React.Component {
    static defaultProps = {
        value: 1,
    };

    state = {
        sliderValue: this.props.value,
    };

    render() {
        return (
            <View style={styles.outer} >
                <View style={styles.sliderValueView}>
                    <Text style={styles.sliderValueText} >{addZeros(this.state.sliderValue)}</Text>
                </View>
                <View style={styles.sliderView}>
                    <Slider
                        style={styles.slider}
                        minimumValue={1}
                        maximumValue={10}
                        step={0.1}
                        onValueChange={value => this.setState({ sliderValue: value })}
                    />
                </View>
                <SmallThinText style={styles.smallText} >Rate today's sunset out of 10</SmallThinText>
                <View style={styles.buttonView}>
                    <Button
                        color={styleData.color.secondaryColor}
                        mode="contained"
                        style={styles.button}
                        // onPress={() => Alert.alert("you submited " + addZeros(this.state.sliderValue))}
                        onPress={() => sendData(15)}
                    >
                        <Text style={{color:'white', fontSize:40}}>submit</Text>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        //alignContent: 'stretch',
        flexGrow: 1,
        backgroundColor: styleData.color.primaryColor,
    },
    sliderValueView: {
        flex: 3,
        //borderWidth: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    sliderValueText: {
        fontSize: 100,
        fontVariant: ['tabular-nums'],
        textAlign: 'center',
        color: styleData.color.secondaryColor,
    },
    sliderView: {
        flex: 4,
        width: 220,
        //borderWidth: 5,
    },
    slider: {
        flex: 1,
        //borderWidth: 5,
    },
    smallText: {
        flex: 1,
        fontStyle: 'italic',
        //borderWidth: 5,
    },
    buttonView: {
        flex: 2,
        //borderWidth: 5,
        paddingBottom: 20,
    },
    button: {
        width: 200,
    }
});

export default SunsetRateScreen;