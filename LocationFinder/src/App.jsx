import { useEffect, useState } from "react";
import ReactMapGL, { Marker, FlyToInterpolator }
      from "react-map-gl";
import Fly from "./Components/Fly";
import { ImLocation } from "react-icons/im";
import "./App.css";

function App() {

  // Setting up the state for the latitude
  // and longitude
  const [lat, setLat] = useState(22.5726);
  const [lon, setLon] = useState(88.3639);

  // Setting up the state for the map
  const [viewport, setViewport] = useState({
    latitude: lat,
    longitude: lon,
    zoom: 12,
    bearing: 0,
    pitch: 0,
    width: "100%",
    height: "100vh",
  });

  // Map viewport updates whenever the
  // latitude and longitude changes
  useEffect(() => {
    setViewport({
      latitude: lat,
      longitude: lon,
      zoom: 12,
      transitionInterpolator: 
        new FlyToInterpolator({ speed: 1.0 }),
      transitionDuration: "auto",
      width: "100%",
      height: "100vh",
    });
  }, [lat, lon]);

  return (
    <ReactMapGL
      mapboxApiAccessToken={"<YOUR_API_KEY>"}
      {...viewport}
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      <Marker latitude={lat} longitude={lon}>
        <ImLocation size="30px" />
      </Marker>
      <Fly setLat={setLat} setLon={setLon} />
    </ReactMapGL>
  );
}

export default App;





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