
import Home from './Components/home';
import { Routes, Route} from 'react-router-dom'
import Welcome from './Components/welcome';



function App() {
  return (
    <div className="app">
      
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/:email' element={<Welcome/>}/>
       </Routes>
    </div>
  );
}

export default App;
