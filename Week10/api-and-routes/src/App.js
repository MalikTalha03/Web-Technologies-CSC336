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
          <Route exact path="/" Component={Home}></Route>
          <Route exact path="/about" Component={About}></Route>
          <Route exact path="/contact" Component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
