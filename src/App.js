import NavBar from "./components/NavBar"
import {Route, Routes} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Board from './components/Board'
import Contact from './components/Contact'
import Blog from './components/Blog'
import Join from './components/Join'

function App() {
  return (
  <div className="App">
    <NavBar/>
        <Routes>

            <Route path = "/" element={
                <Home/>
            }/>

            <Route path = "/about" element={
                <About/>
            }/>

            <Route path = "/board" element={
                <Board/>
            }/>

            <Route path = "/blog" element={
                <Blog/>
            }/>

            <Route path = "/contact" element={
                <Contact/>
            }/>

            <Route path = "/join" element={
                <Join/>
            }/>

        </Routes>
    
    </div>
  );
}

export default App;
