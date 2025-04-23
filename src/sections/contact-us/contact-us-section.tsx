import Form from "@/components/form/Form";
import { MapComponent } from "@/components/map/Map";
import "./contact-us-section.scss";

export default function ContactUsSection() {
  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "10px 0px 0px 10px",
  };

  const mapCenter = {
    lat: 43.590764470432795,
    lng: -80.58745535768189,
  };

  const mapZoom = 12.5;

  const mapOptions = {
    zoomControl: false,
    tilt: 90,
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
            color: "#b7c3d1",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [
          {
            color: "#8e98a3",
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
        featureType: "landscape.man_made",
        elementType: "geometry",
        stylers: [
          {
            color: "#FFFFFF",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "labels.icon",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.icon",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{ visibility: "on" }],
      },
    ],
  };

  const marker = {
    position: {
      lat: 43.586434567045345,
      lng: -80.55822486058793,
    },
    icon: {
      url: `data:image/svg+xml,${encodeURIComponent(`
        <svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.8265 40.3265C30.7764 40.3265 39.6531 31.4499 39.6531 20.5C39.6531 9.55011 30.7764 0.673462 19.8265 0.673462C8.87664 0.673462 0 9.55011 0 20.5C0 31.4499 8.87664 40.3265 19.8265 40.3265Z" fill="#F6D4D3" fill-opacity="0.5"/>
          <path d="M19.8266 30.0168C25.0825 30.0168 29.3433 25.756 29.3433 20.5C29.3433 15.2441 25.0825 10.9833 19.8266 10.9833C14.5706 10.9833 10.3098 15.2441 10.3098 20.5C10.3098 25.756 14.5706 30.0168 19.8266 30.0168Z" fill="white"/>
          <path d="M19.8261 28.4306C24.2061 28.4306 27.7567 24.88 27.7567 20.5C27.7567 16.1201 24.2061 12.5694 19.8261 12.5694C15.4462 12.5694 11.8955 16.1201 11.8955 20.5C11.8955 24.88 15.4462 28.4306 19.8261 28.4306Z" fill="#CC3128"/>
        </svg>
      `)}`,
    },
  };

  return (
    <div className="contact-us-section" id="contact-us">
      <div className="contact-us-section-left">
        <div className="info-container">
          <div className="info-item">
            <h3>Address</h3>
            <p>19 First St East, Elmira, ON N3B 2E6</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>(519) 669-3362</p>
          </div>
          <div className="info-item">
            <h3>Email</h3>
            <p>admin@cjbrubacher.com</p>
          </div>
          <div className="info-item">
            <h3>Operating Hours</h3>
            <div className="info-item-hours">
              <p>Monday - Thursday: 7:30 AM–5:30 PM</p>
              <p>Friday: 8 AM–3 PM</p>
              <p>Saturday & Sunday: Closed</p>
            </div>
          </div>
        </div>
        <MapComponent
          tilt={90}
          heading={90}
          markers={[marker]}
          mapOptions={mapOptions}
          mapContainerStyle={mapContainerStyle}
          center={mapCenter}
          zoom={mapZoom}
        />
      </div>
      <div className="contact-us-section-right">
        <h1>Connect With Us</h1>
        <Form />
      </div>
    </div>
  );
}
