"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";

const defaultMapContainerStyle = {
  width: "100%",
  height: "100%",
  borderRadius: "10px 0px 0px 10px",
};

const defaultMapCenter = {
  lat: 43.591575020514796,
  lng: -80.55679636975802,
};

const defaultMapZoom = 15; // Approximately 500m view

const defaultMapOptions = {
  zoomControl: false,
  tilt: 0,
  gestureHandling: "cooperative",
  mapTypeId: "roadmap",
  disableDefaultUI: true,
  styles: [
    {
      featureType: "all",
      elementType: "geometry",
      stylers: [
        {
          color: "#E9F1FB",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          lightness: 50,
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [
        {
          visibility: "simplified",
        },
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "road.arterial",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
    {
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text",
      stylers: [{ visibility: "on" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text",
      stylers: [{ visibility: "on" }],
    },
  ],
};

const MapComponent = () => {
  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={defaultMapContainerStyle}
        center={defaultMapCenter}
        zoom={defaultMapZoom}
        options={defaultMapOptions}
        tilt={90}
        heading={90}
      >
        <Marker
          position={defaultMapCenter}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 7,
            fillColor: "#CC3128",
            fillOpacity: 0.8,
            strokeWeight: 6,
            strokeColor: "#FF9B95",
            strokeOpacity: 0.6,
          }}
        />
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
