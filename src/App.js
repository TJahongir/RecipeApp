import Pages from './pages/Pages'
import Category from './components/Category';
import Search from './components/Search';
import {BrowserRouter} from 'react-router-dom';
import Logo from './components/Logo';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}


export default App;
