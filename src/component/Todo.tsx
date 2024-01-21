import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';

// @ts-ignore
function Todo({text}) {
  const [isLinked, setIsLinked] = useState<boolean>(false);

  const handelLikePress = () => {
    setIsLinked(!isLinked);
  };

  return (
    <View style={styles.todoWrapper}>
      <TouchableOpacity onPress={handelLikePress}>
        <Icon name={isLinked ? 'heart' : 'heart-o'} size={25} color="pink" />
      </TouchableOpacity>
      <View style={styles.todo}>
        <Text style={styles.todoText}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoWrapper: {
    marginHorizontal: 20,
    height: 80,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  todo: {
    backgroundColor: 'lightgrey',
    width: 270,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  todoText: {
    color: 'grey',
  },
});

export default Todo;
