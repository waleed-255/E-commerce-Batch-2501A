import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Menu from './Components/Menu';
import { Route, Routes } from 'react-router-dom';
import Chefs from './Components/Chefs';
import Reservation from './Components/Reservation';
import Testimonials from './Components/Testimonials';
import Contact from './Components/Contact';
import Test from './Components/Test';
import ApiTask from './Components/ApiTask';
import { UserContext } from './Components/MyContext';


function App() {
  return (
    <>
    <useContext.provider value="Waleed">
      <Routes>
          <Route path='' element={<Home />} />
          <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/chefs' element={<Chefs />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/test' element={<Test />} />
        <Route path='/apitask' element={<ApiTask />} />
      </Routes>
      </useContext.provider>
    </>


  );
}

export default App;
