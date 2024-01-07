import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-start',
            marginLeft: 15,
          }}>
          <View style={styles.btn}>
            <Text style={styles.txt}>Work</Text>
          </View>
          <View style={styles.btn}>
            <Text style={styles.txt}>Study</Text>
          </View>
          <View style={styles.btn}>
            <Text style={styles.txt}>Buy</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.todoWrapper}>
            <TouchableOpacity style={styles.checkBtn}></TouchableOpacity>
            <View style={styles.todo}></View>
          </View>
          <View style={styles.todoWrapper}>
            <TouchableOpacity style={styles.checkBtn}></TouchableOpacity>
            <View style={styles.todo}></View>
          </View>
          <View style={styles.todoWrapper}>
            <TouchableOpacity style={styles.checkBtn}></TouchableOpacity>
            <View style={styles.todo}></View>
          </View>
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
    flex: 1,
  },
  btn: {
    marginLeft: 5,
    backgroundColor: 'pink',
    width: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
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
  txt: {
    color: 'grey',
    fontSize: 18,
  },
  todoWrapper: {
    //backgroundColor: 'grey',
    marginHorizontal: 20,
    height: 80,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkBtn: {
    backgroundColor: 'lightblue',
    borderRadius: 50,
    height: 30,
    width: 30,
  },
  todo: {
    backgroundColor: 'lightgrey',
    width: 270,
    height: 60,
    borderRadius: 20,
  },
});
export default App;
