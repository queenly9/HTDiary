import {useRecoilValue} from 'recoil';
import {PageSelectedAtom} from '../recoil/PageSelectedAtom';
import WorkPage from '../page/WorkPage';
import BuyPage from '../page/BuyPage';
import StudyPage from '../page/StudyPage';

function PageSelection() {
  const pageSelectedAtom = useRecoilValue(PageSelectedAtom);
  if (pageSelectedAtom === 'Work') {
    return <WorkPage />;
  } else if (pageSelectedAtom === 'Study') {
    return <StudyPage />;
  } else if (pageSelectedAtom === 'Buy') {
    return <BuyPage />;
  }
}

export default PageSelection;
