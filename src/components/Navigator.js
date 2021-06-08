import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BottomNavigation, Text } from 'react-native-paper';
import SunsetRateScreen from "./SunsetRateScreen.js";
import SunsetPredictScreen from "./SunsetPredictScreen.js";

const styleData = require('../style.json');

const SunsetRateRoute = () => <SunsetRateScreen />;
const SunsetPredictRoute = () => <SunsetPredictScreen />;


/**
 * This class should hold the navigation menu at the bottom and then delegate out to diffent
 * things based on what is selected.
 */
//const SunsetRateScreenConst = () => <Text>Music</Text>;

const Navigator = () => {
    const [index, setIndex] = useState(0);

    const [routes] = useState([
        { key: 'sunsetRate', title: 'Rate', icon: 'history', color: '#000000' },
        { key: 'sunsetPredict', title: 'Predict', icon: 'album', color: '#009688' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        sunsetRate: SunsetRateRoute,
        sunsetPredict: SunsetPredictRoute,
    });


    return (
        <>
            <BottomNavigation
                navigationState={{ index, routes }}
                onIndexChange={setIndex}
                renderScene={renderScene}
                shifting={true}
            />
        </>
    );
}

const styles = StyleSheet.create({
    mainView: {
        flex: 9,
        //backgroundColor: styleData.color.primaryColor,
        borderWidth: 0,
    },
    navigationBar: {
        flex: 1,
        borderWidth: 0,
        backgroundColor: styleData.color.secondaryColor,
    },
    text: {
        color: styleData.color.secondaryColor,
    },
});

export default Navigator;