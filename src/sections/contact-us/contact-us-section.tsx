import Form from "@/components/form/Form";

import "./contact-us-section.scss";
import { MapComponent } from "@/components/map/Map";
export default function ContactUsSection() {
  return (
    <div className="contact-us-section" id="contact-us">
      {/* left side */}
      <div className="contact-us-section-left">
        {/* <div className="info-container">
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
            <p>Monday - Thursday: 7:30 AM–5:30 PM</p>
            <p>Friday: 8 AM–3 PM</p>
            <p>Saturday & Sunday: Closed</p>
          </div>
        </div> */}
        <MapComponent />
      </div>
      {/* right side */}
      <div className="contact-us-section-right">
        <h1>Connect With Us</h1>
        <Form />
      </div>
    </div>
  );
}
