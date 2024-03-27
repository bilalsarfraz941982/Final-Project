import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import BookingPage from './Components/BookingPage';
import {Route , Routes} from 'react-router-dom';



function App() {

  return (
    <>
    <div className='nav'>
      <Nav/>
    </div>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/bookingpage' element={<BookingPage />}></Route>
    </Routes>
    <div className='footer'>
      <Footer/>
    </div>
    </>
  );
}

export default App;
