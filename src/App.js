import './App.css';
import {Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar/navbar';
import Registrasi from './pages/registrasi';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/registrasi" element={<Registrasi/>}/>
      </Routes>
    </div>
  );
}

export default App;
