import { BrowserRouter, Route, Routes,  } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import WomenPage from './pages/WomenPage';
import Header from './components/header/Header';
import FooterData from './components/footer/FooterData';
import DetailPage from './pages/DetailPage';




function App() {
  return (
    <div className="App" >
      <BrowserRouter >
      <Header />
        <Routes>
          <Route path={'/'} Component={HomePage} />
          <Route path={'/Women'} Component={WomenPage}/>
          <Route path={'/DetailProduct'} Component={DetailPage}/>
        </Routes>
        <FooterData/>
      </BrowserRouter>
    </div>
  );
}

export default App;
