import logo from './logo.svg';
import './App.css';
import Parent from './component/Parent';
import Grandchild from './component/Grandchild';

function App() {
  return (
    <>
    <h1>React App</h1>
    <Parent/>
    <Grandchild/>
    </>
  );
}

export default App;
