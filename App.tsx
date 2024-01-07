import { SafeAreaView, StyleSheet, Text, View } from "react-native";

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
          <View style={styles.btn}></View>
          <View style={styles.btn}></View>
          <View style={styles.btn}></View>
        </View>


        <View style={styles.box}>
          <View></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    //alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    //backgroundColor: 'pink',
    flex: 1,
  },
  btn: {
    marginHorizontal: 5,
    backgroundColor: 'blue',
    width: 70,
    height: 50,
  },
  box: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 6},
    shadowRadius: 15,
    shadowOpacity: 0.5,
  },
});
export default App;
