import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Very nice</Text>
      <TouchableOpacity style={styles.buttleStyle} onPress={() => {alert("TEST")}}>
        <Text style={styles.insideBtn}>Button</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textShadowColor: '#585858',
    textShadowOffset: {width:5,height:5},
    textShadowRadius: 10
  },
  buttleStyle: {
    backgroundColor: "#764ABC",
    padding: 7
  },
  insideBtn: {
    color: '#fff'
  }
});