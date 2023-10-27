import { useEffect, useState } from 'react';
import './App.css';
import api from './api/apiConfig';
import Layout from './components/Layout'
import Home from './components/home/Home';
import {Routes, Route} from 'react-router-dom';

function App() {

  const [movies, setMovies] = useState();
  const getMovies = async () => {
    try {
      const respose = await api.get("/api/v1/movies");
      console.log(respose.data);
      setMovies(respose.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home movies={movies}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
