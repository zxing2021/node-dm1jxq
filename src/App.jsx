import HelloWorld from './components/HelloWorld';
import { HashRouter } from 'react-router-dom';
export default function App(props) {
  return (
    <HashRouter>
      <HelloWorld />
    </HashRouter>
  );
}
