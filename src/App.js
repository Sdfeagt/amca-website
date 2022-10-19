import {Route, Routes} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Board from './components/Board'
import Contact from './components/Contact'
import Join from './components/Join'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Events from "./components/Events"

const App=()=> {
  return (
  <div className="App">
    <Header/>
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

            <Route path = "/events" element={
                <Events/>
            }/>

            <Route path = "/contact" element={
                <Contact/>
            }/>

            <Route path = "/join" element={
                <Join/>
            }/>

        </Routes>
    <Footer/>
    </div>
  );
}

export default App;
