import { ReactNode } from "react";

export interface LocationMarkerProps {
  backgroundColor: string;
  title: string;
  position: {
    lat: number;
    lng: number;
  };
  titlePosition?: "left" | "right";
}

export interface MarkerProps {
  position: google.maps.LatLngLiteral;
  icon?: google.maps.Symbol | google.maps.Icon;
  onClick?: () => void;
  zIndex?: number;
}

export interface MapProps {
  mapContainerStyle?: React.CSSProperties;
  center?: google.maps.LatLngLiteral;
  zoom?: number;
  mapOptions?: google.maps.MapOptions;
  markers?: MarkerProps[];
  children?: ReactNode;
  tilt?: number;
  heading?: number;
}
