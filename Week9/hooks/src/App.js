import logo from './logo.svg';
import './App.css';
import Childd from './component/Childd';
import { createContext } from 'react'
import Parent from './component/Parent';

const Firstname = createContext();
const Lastname = createContext();
function App() {
  
  return (
    <>
    <Parent/>
    <Firstname.Provider value= "Malik">
      <Childd></Childd>
    </Firstname.Provider>
    <Lastname.Provider value= "Talha">
      <Childd></Childd>
    </Lastname.Provider>
    </>
  );
}

export default App;
export {Firstname};
export {Lastname};
