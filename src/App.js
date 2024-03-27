import './App.css';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import BookingPage from './Components/BookingPage';
import {Route , Routes} from 'react-router-dom';



function App() {

  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

  function updateTimes(){
    return (availableTimes)
}

const initializeTime = {availableTimes:  fetchAPI(new Date())}

const [state, dispatch] = useReducer(updateTimes, initialState);


  return (
    <>
    <div className='nav'>
      <Nav/>
    </div>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/bookingpage' element={<BookingPage availableTimes={state}  />}></Route>
    </Routes>
    <div className='footer'>
      <Footer/>
    </div>
    </>
  );
}

export default App;
