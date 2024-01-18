import HeaderBtn from './HeaderBtn';
import {StyleSheet, View} from 'react-native';
import { useSetRecoilState } from "recoil";
import { PageSelectedAtom } from "../recoil/PageSelectedAtom";

function Header() {
  const setPageSelectedAtom = useSetRecoilState(PageSelectedAtom);
  const pressWork = () => {
    setPageSelectedAtom('Work');
  };
  const pressStudy = () => {
    setPageSelectedAtom('Study');
  };
  const pressBuy = () => {
    setPageSelectedAtom('Buy');
  };

  return (
    <View style={styles.headerWrapper}>
      <HeaderBtn name="Work" onPressBtn={pressWork} />
      <HeaderBtn name="Study" onPressBtn={pressStudy} />
      <HeaderBtn name="Buy" onPressBtn={pressBuy} />
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
