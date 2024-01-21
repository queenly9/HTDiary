import {Image, StyleSheet, TouchableOpacity} from 'react-native';

function CreateTodoBtn() {
  return (
    <TouchableOpacity>
      <Image
        source={require('../image/ImageBtn.png')}
        style={styles.imageBtn}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageBtn: {
    width: 120,
    height: 140,
    position: 'absolute',
    marginLeft: 240,
    marginTop: 230,
  },
});

export default CreateTodoBtn;
