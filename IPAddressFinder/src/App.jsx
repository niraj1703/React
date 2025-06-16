import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./App.css";

// Fix Leaflet default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function App() {
  const [ipInfo, setIpInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://ip-api.com/json/")
      .then((res) => res.json())
      .then((data) => {
        setIpInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch IP info:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>🌍 IP Address Finder with Map</h1>
      {loading ? (
        <p>Loading...</p>
      ) : ipInfo ? (
        <>
          <div className="card">
            <p><strong>IP:</strong> {ipInfo.query}</p>
            <p><strong>City:</strong> {ipInfo.city}</p>
            <p><strong>Region:</strong> {ipInfo.regionName}</p>
            <p><strong>Country:</strong> {ipInfo.country}</p>
            <p><strong>Timezone:</strong> {ipInfo.timezone}</p>
          </div>

          <MapContainer
            center={[ipInfo.lat, ipInfo.lon]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "80%", margin: "20px auto" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            />
            <Marker position={[ipInfo.lat, ipInfo.lon]}>
              <Popup>
                {ipInfo.city}, {ipInfo.country}
              </Popup>
            </Marker>
          </MapContainer>
        </>
      ) : (
        <p>Error loading data.</p>
      )}
    </div>
  );
}

export default App;
