import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import { Header } from './components/Header';
import "./css/index.scss";

const App = () => (
  <BrowserRouter>
    <div>
      <Header/>
      <Content/>
    </div>
  </BrowserRouter>
);

export default App;
