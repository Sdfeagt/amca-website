import {Route, Routes} from "react-router-dom"
import React from "react"

import Home from './components/Home'
import About from './components/About'
import Board from './components/Board'
import Contact from './components/Contact'
import Join from './components/Join'
import Footer from "./components/Footer"
import Header from "./components/Header"
import Events from "./components/Events"
import Page404 from "./components/Page404"




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
            <Route path='*' element={
                <Page404/>
            }/>

        </Routes>
    <Footer/>
    </div>
  );
}

export default App;
