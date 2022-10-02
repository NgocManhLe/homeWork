import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Home from './component/home';
import News from './component/news';

function App() {
  return (
    <div className="App">
      <ul>
        <li><Link to='/' >Home</Link></li>
        <li><Link to='News' >News</Link></li>

      </ul>
     
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<h1>ágụada</h1>} />
        <Route path='/News' element={<News/>} />
     </Routes>
    </div>
  );
}

export default App;
