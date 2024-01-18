import {SafeAreaView, StyleSheet, View} from 'react-native';

import Header from './src/component/Header';
import PageSelection from './src/component/PageSelection';
// @ts-ignore
function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Header />
        <PageSelection />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginVertical: 10,
    flex: 1,
  },
});

export default App;
