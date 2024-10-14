import { useState } from "react";
import Title from "./ui/Title";
import { FaAddressCard } from "react-icons/fa";
import { MdMarkEmailUnread, MdContactPhone } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formData);
    emailjs
      .send(
        "service_x2mn7uk", // Replace with your service ID
        "template_ns4lfbs", // Replace with your template ID
        formData,
        "RC0rV3wIdPozpn8Om" // Replace with your user ID
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Optionally, reset form fields
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        console.error("Failed to send email. Error:", err);
      });
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-6 space-y-2">
        <div className="text-center space-y-6">
          <Title title="Contact Me" />
          <div className="space-y-1">
            <h2 className="text-4xl font-bold text-gray-800">
              I Want To Hear From You
            </h2>
            <p className="text-gray-600 mt-4">
              Please fill out the form on this section to contact with me.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-10">
          {/* Left Section: Contact Info */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center">
              <span className="bg-orange-100 p-3 rounded-full text-orange-500">
                <FaAddressCard size={40} />
              </span>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Address</h4>
                <p className="text-gray-600">Nashik, Maharashtra, India</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="bg-green-100 p-3 rounded-full text-green-500">
                <MdMarkEmailUnread size={40} />
              </span>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Email</h4>
                <p className="text-gray-600">rajhansmanoj77@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center">
              <span className="bg-purple-100 p-3 rounded-full text-purple-500">
                <MdContactPhone size={40} />
              </span>
              <div className="ml-4">
                <h4 className="font-bold text-gray-800">Phone</h4>
                <p className="text-gray-600">+91 8308341531</p>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="w-full md:w-2/3 bg-white shadow-lg rounded-lg p-8">
            <form onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <input
                  type="text"
                  name="name" // Added name attribute
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
                <input
                  type="email"
                  name="email" // Added name attribute
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  required
                />
              </div>
              
              <textarea
                name="message" // Added name attribute
                placeholder="Write your message here"
                value={formData.message}
                onChange={handleChange}
                className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-6 bg-orange-500 text-white py-2 px-6 rounded-md shadow hover:bg-orange-600 transition"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
