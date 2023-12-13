import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
