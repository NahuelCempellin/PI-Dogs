import './App.css';
import Home from './components/Home/Home';
import DogsDetail from './components/DogsDetail/DogDetail';
import LandingPage from './components/LandingPage/LandingPage';
import DogieForm from './components/DogForm/DogForm';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<LandingPage/>}/>
        <Route exact path='/dogs' element={<Home/>}/>
        <Route exact path='/dogs/:id' element={<DogsDetail/>}/>
        <Route exact path='/form' element={<DogieForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
