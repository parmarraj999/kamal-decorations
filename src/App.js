import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UpNav from './component/upNav/upnav';
import DownNav from './component/downNav/downNav';
import Nav from './layout/nav/nav';
import Home from './layout/home/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UpNav />
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
        <DownNav/>
      </BrowserRouter>
    </div>
  );
}

export default App;
