import HeaderBtn from './HeaderBtn';
import {StyleSheet, View} from 'react-native';

function Header() {
  return (
    <View style={styles.headerWrapper}>
      <HeaderBtn name="Work" />
      <HeaderBtn name="Study" />
      <HeaderBtn name="Buy" />
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginLeft: 15,
  },
});

export default Header;
