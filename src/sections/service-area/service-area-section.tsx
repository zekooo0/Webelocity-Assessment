import { MapComponent } from "@/components/map/Map";
import "./service-area-section.scss";
import LocationMarker from "@/components/location-mark/LocationMark";

export default function ServiceAreaSection() {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px 0px 0px 10px",
  };

  const mapCenter = {
    lat: 43.729597578228116,
    lng: -80.22984174760707,
  };

  const mapZoom = 9.5;

  const mapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "cooperative",
    mapTypeId: "roadmap",
    disableDefaultUI: true,
    styles: [
      {
        elementType: "geometry",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        elementType: "labels.text.stroke",
        stylers: [
          {
            color: "#f5f5f5",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "geometry",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#bdbdbd",
          },
        ],
      },
      {
        featureType: "administrative.neighborhood",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          {
            color: "#ffffff",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#757575",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#dadada",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#616161",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
      {
        featureType: "transit",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [
          {
            color: "#e5e5e5",
          },
        ],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [
          {
            color: "#eeeeee",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            color: "#c9c9c9",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [
          {
            color: "#9e9e9e",
          },
        ],
      },
    ],
  };

  const DraytonMarker = LocationMarker({
    backgroundColor: "#290A08",
    title: "Drayton ↗",
    position: {
      lat: 43.755342569702464,
      lng: -80.67118178605035,
    },
  });
  const ElmiraMarker = LocationMarker({
    backgroundColor: "#290A08",
    title: "Elmira ↗",
    position: {
      lat: 43.600322910026954,
      lng: -80.56252651269703,
    },
  });
  const GuelphMarker = LocationMarker({
    backgroundColor: "#290A08",
    title: "Guelph ↗",
    position: {
      lat: 43.54435853649721,
      lng: -80.24531454815441,
    },
  });
  const KitchenerMarker = LocationMarker({
    backgroundColor: "#290A08",
    title: "Kitchener ↗",
    position: {
      lat: 43.43663768003384,
      lng: -80.42652995391958,
    },
  });
  const WaterlooMarker = LocationMarker({
    backgroundColor: "#290A08",
    title: "Waterloo ↗",
    position: {
      lat: 43.47272207955442,
      lng: -80.5841382326819,
    },
  });
  const CambridgeMarker = LocationMarker({
    backgroundColor: "#290A08",
    title: "Cambridge ↗",
    position: {
      lat: 43.360100000000004,
      lng: -80.34159999999999,
    },
  });
  const StJacobsMarker = LocationMarker({
    backgroundColor: "#081729",
    title: "St. Jacobs",
    position: {
      lat: 43.54840990918986,
      lng: -80.55351541107315,
    },
  });
  const ConestogoMarker = LocationMarker({
    backgroundColor: "#081729",
    title: "Conestogo",
    position: {
      lat: 43.58113993566159,
      lng: -80.42667146930259,
    },
    titlePosition: "right",
  });

  return (
    <div className="service-area-section" id="service-area">
      <div className="typography-container">
        <h1>Our Service Area</h1>
        <h3>
          CJ Brubacher Ltd. is your trusted neighbour
          <br /> for over <span> 100 years of experience.</span>
        </h3>
      </div>
      <MapComponent
        tilt={0}
        heading={0}
        markers={[
          DraytonMarker,
          ElmiraMarker,
          GuelphMarker,
          KitchenerMarker,
          WaterlooMarker,
          CambridgeMarker,
          StJacobsMarker,
          ConestogoMarker,
        ]}
        mapOptions={mapOptions}
        mapContainerStyle={mapContainerStyle}
        center={mapCenter}
        zoom={mapZoom}
      />
    </div>
  );
}
