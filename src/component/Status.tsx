import {StyleSheet, Text, View} from 'react-native';
import {ProgressView} from '@react-native-community/progress-view';
import { useEffect, useState } from "react";

function Status() {
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
    <>
      <View style={styles.statusWrapper}>
        <View style={styles.percentWrapper}>
          <Text style={styles.statusText}>0%</Text>
        </View>
        <ProgressView
          style={styles.statusBar}
          progressTintColor="black"
          trackTintColor="grey"
          progress={0}
        />
      </View>
      <View style={styles.timeWrapper}>
        <Text style={styles.timeText}>오늘은 {formatTime()} 입니다</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  timeWrapper: {
    height: 30,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 15,
    color: 'grey',
  },
  statusWrapper: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  statusText: {
    fontSize: 15,
    color: 'grey',
  },
  statusBar: {
    width: 250,
  },
  percentWrapper: {
    height: 60,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Status;
