import React, { useEffect, useState } from "react";
import { GrDirections } from "react-icons/gr";
import ReactDOM from "react-dom";
import { useTheme } from '../ThemeContext';
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Define Google Maps types if not already available
declare global {
  interface Window {
    initMap: () => void;
    google: any;
  }
}

const Contact: React.FC = () => {
  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
    const [isSent, setIsSent] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      const { name, email, message } = formData;
      if (!name || !email || !message) {
        setError('Please fill in all fields.');
        return;
      }

      // EmailJS service
      emailjs
        .send(
          'service_4lclscy', // Your EmailJS service ID
          'template_tjhtb9d', // Your EmailJS template ID
          formData,
          '3yRx4zz8x1BLXe4-J' // Your EmailJS user ID
        )
        .then(
          () => {
            setIsSent(true);
            setFormData({ name: '', email: '', message: '' });
            setError(null);
            alert('Message sent successfully!');
          },
          (err) => {
            console.error('Failed to send email:', err);
            setError('Something went wrong. Please try again later.');
          }
        );
    };

    return (
      <div className={`${darkMode ? "bg-CB text-CA" : "bg-CD text-CB"} w-full lg:w-1/2 p-8 shadow-lg rounded-lg`}>
        <h2 className={`text-2xl font-semibold ${darkMode ? "text-CD" : "text-CB"}`}>Contact Me</h2>
        <form action="#" method="POST" className="mt-6 space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${darkMode ? "border-CA placeholder-CA" : "border-CB placeholder-CB"}`}
            placeholder="Your Name"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${darkMode ? "border-CA placeholder-CA" : "border-CB placeholder-CB"}`}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-md ${darkMode ? "border-CA placeholder-CA" : "border-CB placeholder-CB"}`}
            placeholder="Your Message"
          ></textarea>
          <button
            type="submit"
            className={`w-full px-4 py-2 rounded-md ${darkMode ? "bg-CA text-CD" : "bg-CB text-CD"}`}
          >
            Send Message
          </button>
        </form>
      </div>
    );
  };

  const { darkMode } = useTheme();
  useEffect(() => {
    const initMap = () => {
      const caviteCity = { lat: 14.490215, lng: 120.901457 };

      const map = new window.google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: caviteCity,
        zoom: 13,
        streetViewControl: false,
        zoomControl: true,
        mapTypeControl: true,
        fullscreenControl: true,
        mapTypeControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_TOP,
          style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
        },
        fullscreenControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_BOTTOM,
        },
      });

      const marker = new window.google.maps.Marker({
        position: caviteCity,
        map: map,
        title: "Cavite City",
      });

      const infoBox = document.createElement("div");
      infoBox.style.position = "absolute";
      infoBox.style.bottom = "20px";
      infoBox.style.left = "20px";
      infoBox.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      infoBox.style.padding = "10px";
      infoBox.style.borderRadius = "8px";
      infoBox.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
      infoBox.style.fontFamily = "Arial, sans-serif";
      infoBox.style.fontSize = "14px";

      infoBox.innerHTML = `
        <strong>Contact Info</strong><br />
        <p><strong>Email:</strong> Stevenedwradmontalvo25@gmail.com</p>
        <p><strong>Phone:</strong> +63 99 2973 9954</p>
      `;
      document.getElementById("map")?.appendChild(infoBox);

      const directionsBox = document.createElement("div");
      directionsBox.style.position = "absolute";
      directionsBox.style.top = "20px";
      directionsBox.style.left = "20px";
      directionsBox.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
      directionsBox.style.padding = "10px";
      directionsBox.style.borderRadius = "8px";
      directionsBox.style.boxShadow = "0 2px 6px rgba(0,0,0,0.3)";
      directionsBox.style.fontFamily = "Arial, sans-serif";
      directionsBox.style.fontSize = "14px";

      const directionsContainer = document.createElement("div");
      directionsContainer.style.display = "flex";
      directionsContainer.style.alignItems = "center";
      directionsContainer.style.justifyContent = "space-between";

      const addressDiv = document.createElement("div");
      addressDiv.innerHTML = `
        <strong>846 Lapidario St.</strong> 
        <p>Cavite City, Philippines</p>
      `;
      addressDiv.style.marginRight = "14px";

      const directionsIconDiv = document.createElement("div");
      directionsIconDiv.style.display = "flex";
      directionsIconDiv.style.flexDirection = "column";
      directionsIconDiv.style.alignItems = "center";

      const iconContainer = document.createElement("div");
      ReactDOM.render(
        <GrDirections size={24} color="#2B7A78" />,
        iconContainer
      );

      directionsIconDiv.appendChild(iconContainer);

      const directionsText = document.createElement("span");
      directionsText.innerText = "Directions";
      directionsText.style.fontSize = "14px";
      directionsText.style.color = "#2B7A78";

      directionsIconDiv.appendChild(directionsText);
      directionsContainer.appendChild(addressDiv);
      directionsContainer.appendChild(directionsIconDiv);
      directionsBox.appendChild(directionsContainer);
      document.getElementById("map")?.appendChild(directionsBox);

      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      directionsIconDiv.addEventListener("click", () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };

              const request = {
                origin: userLocation,
                destination: caviteCity,
                travelMode: window.google.maps.TravelMode.DRIVING,
              };

              directionsService.route(request, (result: any, status: string) => {
                if (status === window.google.maps.DirectionsStatus.OK) {
                  directionsRenderer.setDirections(result);
                } else {
                  alert("Directions request failed due to " + status);
                }
              });
            },
            () => {
              alert("Error getting location");
            }
          );
        } else {
          alert("Geolocation is not supported by this browser.");
        }
      });
    };

    const script = document.createElement("script");
    script.src =
      `https://maps.gomaps.pro/maps/api/js?key=AlzaSyuUSiO4MtBiqEvGZJksY0ZC7hPv73shOLv&libraries=geometry,places,directions&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    import("leaflet").then((L) => {
      // Fix marker icon issue in Leaflet
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });
    });
  }, []);

  return (
    <div className={`${darkMode ? "bg-CD" : "bg-CA"} min-h-screen py-8 px-4 sm:px-6 lg:px-8`}>
      <h1 className={`text-3xl font-semibold mb-8 text-center ${darkMode ? "text-CB" : "text-CD"}`}>Contact</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full h-full max-w-screen-2xl mx-full lg:justify-between lg:flex">
        <div className="w-full lg:w-full lg:order-first">
          <div className="w-full h-96 lg:h-full">
          <MapContainer center={[14.490099, 120.901554]} zoom={13} className="w-full h-full">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[14.490099, 120.901554]}>
          </Marker>
        </MapContainer>
          </div>
        </div>

        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
