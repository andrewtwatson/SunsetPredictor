import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

/*
class SmallThinText extends Component {
    render() {
        return (
            <Text {...this.props} style={{...styles.smallThinText,  ...this.props.style }} >
                {this.props.children}
            </Text>
        )
    }
}
*/

const SmallThinText = props => {
    return (<Text {...props} style={[styles.smallThinText, { ...props.style }]}>{props.children}</Text>);
}

export { SmallThinText };

const styles = StyleSheet.create({
    smallThinText: {
        color: 'white',
        fontSize: 15,
        //fontFamily: 'sans-serif',
    }
});