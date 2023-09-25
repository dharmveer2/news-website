import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {

  const [cname, setCname] = useState('in');
  let coun=cname;
   
  const pageSize = 5;
  const [progress, setProgress] = useState(0)
 
  return (
    <div >
      <Router>
      <NavBar cname={cname} setCname={setCname}/> 
      <LoadingBar
      height={3}
      color='#f11946'
      progress={progress} 
    />
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country={coun} category="general"/>} /> 
        <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country={coun} category="business"/>} />
        <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country={coun} category="entertainment"/>} />
        <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country={coun} category="general"/>} />
        <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country={coun} category="health"/>} /> 
        <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country={coun} category="science"/>} />
        <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country={coun} category="sports"/>} /> 
        <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country={coun} category="technology"/>} />
      </Routes>
   
      </Router>
    </div>
  )
 
}

export default App;