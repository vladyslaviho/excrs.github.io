import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { GlobalStyles } from './data/styles';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cryptopair}>
      <Text>Hi</Text>
      <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: GlobalStyles.colors.background
  },
cryptopair:{
  flex:1,
  height: 200,
  width: 200,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: GlobalStyles.colors.container,
  borderRadius: 40,
  margin: 20
}
});
