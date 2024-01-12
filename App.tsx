import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {useState, useEffect} from 'react';

function App(): JSX.Element {
  const [, setCurrentDateTime] = useState(new Date());

  const updateDateTime = () => {
    setCurrentDateTime(new Date());
  };

  useEffect(() => {
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = () => {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const year = currentTime.getFullYear();
    const month = currentTime.getMonth() + 1;
    const day = currentTime.getDate();

    const formattedTime = `${year}년 ${month}월 ${day}일 ${
      hours < 10 ? '0' : ''
    }${hours}시 ${minutes < 10 ? '0' : ''}${minutes}분 ${
      seconds < 10 ? '0' : ''
    }${seconds}초`;

    return formattedTime;
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-start',
            marginLeft: 15,
          }}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btxt}>Work</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btxt}>Study</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btxt}>Buy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.box}>
          <View style={styles.timeWrapper}>
            <Text style={styles.ttxt}>오늘은 {formatTime()} 입니다</Text>
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
  btxt: {
    color: 'grey',
    fontSize: 18,
  },
  todoWrapper: {
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
  timeWrapper: {
    //backgroundColor: 'red',
    height: 30,
    alignItems: 'center',
  },
  ttxt: {
    fontSize: 15,
    color: 'grey',
  },
  statusWrapper: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  bar: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 10,
    height: 10,
  },
  stxt: {
    fontSize: 15,
    color: 'grey',
  },
});
export default App;
