import {StyleSheet, Text, TouchableOpacity} from 'react-native';

// @ts-ignore
function HeaderBtn({name}) {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.btxt}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
  btxt: {
    color: 'grey',
    fontSize: 18,
  },
});

export default HeaderBtn;
