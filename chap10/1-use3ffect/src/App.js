import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
// import useEffectCleapUp from '../components/useEffect2'
import useEffectCallAPi from './components/useEffect3';
function App() {
  return (
    <div className="App">
      <useEffectCallAPi/>
    </div>
  );
}

export default App;
