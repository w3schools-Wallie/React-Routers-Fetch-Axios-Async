import Navbar from './components/Navbar/Navbar';
import Albums from './components/Pages/Albums';
import Posts from './components/Pages/Posts';
import Users from './components/Pages/Users';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Pages/Home';
import AlbumDetails from './components/Pages/AlbumDetails';
import UserDetails from './components/Pages/UserDetails';
function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/albums'} element={<Albums/>}/>
      <Route path={'/albums/:id'} element={<AlbumDetails/>}/>
      <Route path={'/users'} element={<Users/>}/>
      <Route path={'/users/:id'} element={<UserDetails/>}/>
      <Route path={'/posts'} element={<Posts/>}/>
    </Routes>
    </Router>
  );
}

export default App;
