import { RecoilRoot } from "recoil";
import App from './App';

export const AppContainer = () => {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
};
