import Status from '../component/Status';
import {ScrollView, StyleSheet, View} from 'react-native';
import Todo from '../component/Todo';

function WorkPage() {
  return (
    <View style={styles.box}>
      <Status />
      <ScrollView>
        <Todo text="상주냠" />
        <Todo text="상주냠" />
        <Todo text="상주냠" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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

export default WorkPage;
