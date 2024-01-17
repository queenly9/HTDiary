import {SafeAreaView, StyleSheet, View} from 'react-native';

import Header from './src/component/Header';
import WorkPage from './src/page/WorkPage';
import {RecoilRoot} from 'recoil';
// @ts-ignore
function App(): JSX.Element {
  return (
    <RecoilRoot>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Header />
          <WorkPage />
        </View>
      </SafeAreaView>
    </RecoilRoot> 
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
