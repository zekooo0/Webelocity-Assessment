"use client";

import { MapProps } from "@/types";
import { GoogleMap, Marker } from "@react-google-maps/api";

const MapComponent = ({
  mapContainerStyle,
  center,
  zoom,
  mapOptions,
  markers,
  tilt,
  heading,
  children,
}: MapProps) => {
  return (
    <div className="map-container">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={mapOptions}
        tilt={tilt}
        heading={heading}
      >
        {markers?.map((marker, index) => (
          <Marker
            key={`marker-${index}`}
            position={marker.position}
            icon={marker.icon}
            onClick={marker.onClick}
            zIndex={marker.zIndex}
          />
        ))}
        {children}
      </GoogleMap>
    </div>
  );
};

export { MapComponent };
