import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Rating from './components/Rating/Rating'
import Thank from './components/Thank/Thank'
import styles from './App.module.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Rating />} exact></Route>
        <Route path='/Thank' element={<Thank />}></Route>
      </Routes>
    </Router>
  )
}

export default App