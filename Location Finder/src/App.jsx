import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App





// Fileting techniques to restrict third party plugins in client browser environment       
// Blockchain versus Distributed Centralized Data Server Environment 
// Role of Artificial Intelligence in medical appliances 
// Failure Cause for implementation of Driverless Cars in India 
// Farmers Online Trading and Selling  
// Vehicle Breakdown - Emergency Support  
// Plant and Soil E-Portal 
// Track of Vulnerabilities and Malwares 
// Vulnerabilities Analyser versus Data Security Level 
// Primary Stage of Plant Image Analysis for Virus Detection 
// Smart Energy Saving System for Household Items  
// University Tracking System for Higher Education  
// Pre-Research E-Learning system for Scholars  
// Vehicle Number Plate Recognition System  
// Online Certificate Verification System  
// Design and Integration of VoIP 
// Automatic License Number Plate Recognition System 
// Build CNN for Image Classification, Colorization using Deep Transfer Learning 
// Deep Learning based RNN for Text Recognition in Images 
// Fake currency detection using Machine Learning Techniques  
// Analysis of fake news detection using Machine Learning Techniques 
// Object detection by using Machine Learning Techniques 
// Plant Species Identification  
// Analysis of best Machine Learning Model for Medical Imaging  
// Auto-Tuning and Control Vehicles based on Central Coloured-Line  