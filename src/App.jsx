import { useState } from 'react'
import { ZoomableGroup, ComposableMap, Geographies, Geography } from 'react-simple-maps'

import './App.css';

const App = () => {
  const [hoveredCountry, setHoveredCountry] = useState(null)
  const [selectedCountry, setSelectedCountry] = useState(null)

  return <>
    <ComposableMap>
      <ZoomableGroup>
        <Geographies geography='/features.json'>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo}
                onClick={() => setSelectedCountry(geo.properties.name)}
                onMouseEnter={() => setHoveredCountry(geo.properties.name)}
                onMouseLeave={() => setHoveredCountry(null)}
                style={{
                  default: {
                    fill: selectedCountry === geo.properties.name ? "rgb(133 36 17)" : "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: selectedCountry === geo.properties.name ? "rgb(133 36 17)" : "#F53",
                    outline: "none",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                  },
                  pressed: {
                    fill: "rgb(133 36 17)",
                    outline: "none",
                  },
                }} />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
    <div className="info">
      <div className="selected-country">{selectedCountry}</div>
      <div className="hover-country">{hoveredCountry}</div>
    </div>
  </>
}

export default App
