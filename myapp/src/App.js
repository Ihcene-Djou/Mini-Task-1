import './App.css';
import Login from './LoginForm/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='*' element={<h1>Page Not Found!</h1>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
                                                            