import './App.css';
import NavBar from './Components/NavBar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../src/Components/Home'
import Skills from '../src/Components/Skills'
import Project from '../src/Components/Project'
import Contact from '../src/Components/Contact'



function App() {
  return (
    <div className="App bg-gradient-to-r from-violet-200 to-pink-200">
      
      <NavBar/>
      
    </div>
  );
}

export default App;
