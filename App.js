/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <View style={styles.newContainer(darkMode)}>
      <StatusBar backgroundColor={darkMode ? '#282C35' : 'white'} barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <TouchableOpacity testID='btnChange' onPress={changeDarkMode} style={styles.button(darkMode)}>
        <Text style={styles.textButton(darkMode)}>Switch</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  newContainer: darkMode => ({
    backgroundColor: darkMode ? '#282C35' : 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  button: darkMode => ({
    padding: 20,
    backgroundColor: darkMode ? 'white' : '#282C35',
    borderRadius: 20,
  }),
  textButton: darkMode => ({
    color: darkMode ? '#282C35' : 'white',
    fontWeight: 'bold'
  }),
});

export default App;
