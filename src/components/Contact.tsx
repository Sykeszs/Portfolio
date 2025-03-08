import React, { useEffect, useState } from "react";
import { useTheme } from '../ThemeContext';
import emailjs from "@emailjs/browser";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
    const [_isSent, setIsSent] = useState<boolean>(false);
    const [_error, setError] = useState<string | null>(null);

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
          { ...formData },
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

const mark = "/TaskManagement.png";
const mark2x = "/TaskManagement.png";
const markshadow = "/TaskManagement.png";

const customMarker = new L.Icon({
  iconUrl: "/marker-icon-2x.png",
  iconRetinaUrl: "/marker-icon.png",
  shadowUrl: "/marker-shadow.png",
  iconSize: [25, 41], 
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41], 
});

  useEffect(() => {
    import("leaflet").then((L) => {
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: mark2x,
        iconUrl: mark,
        shadowUrl: markshadow,
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
          <Marker position={[14.490099, 120.901554]} icon={customMarker}>
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
