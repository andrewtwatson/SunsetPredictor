import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import Navigator from "./src/components/Navigator.js";

const styleData = require('./src/style.json');

function Main() {
    return (
        <PaperProvider >
            <App />
        </PaperProvider>
    );
}

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator/ >
    </SafeAreaView>
  );
}

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: styleData.primaryColor,
        accent: styleData.secondaryColor,
        text: styleData.secondaryColor,
    },
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
});

export default Main;