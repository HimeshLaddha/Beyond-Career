import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const services = [
    'Career Guidance',
    'Expert Mentorship',
    'Internship Programs',
    'Skill Development',
    'Community Support',
    'Career Analytics'
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      info: "hello@beyondcareer.in",
      subInfo: "We'll respond within 24 hours",
      action: () => window.open('mailto:hello@beyondcareer.in')
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      info: "+91 98765 43210",
      subInfo: "Mon-Fri, 9AM-6PM IST",
      action: () => window.open('tel:+919876543210')
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      info: "IIT Kharagpur, West Bengal",
      subInfo: "India - 721302",
      action: () => window.open('https://maps.google.com/?q=IIT+Kharagpur')
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, href: "https://www.linkedin.com/company/beyondgradess", color: "hover:text-blue-600" }
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = async (e) => {
    const API_URL = import.meta.env.VITE_API_URL;
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch(`${API_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Message sent successfully! 🎉");
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Server error. Please try again later.");
    }

    setIsSubmitting(false);

    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to start your career journey? We're here to help you every step of the way
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side Info */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Whether you're looking for career guidance, mentorship, or have questions about our services,
              we're here to help. Reach out to us through any of the channels below.
            </p>

            {contactInfo.map((item, index) => (
              <div
                key={index}
                onClick={item.action}
                className="flex items-start space-x-4 p-6 bg-dark-800 rounded-2xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 card-hover cursor-pointer"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-purple-500 rounded-xl flex items-center justify-center text-white">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-primary-500 font-medium">{item.info}</p>
                  <p className="text-gray-400 text-sm">{item.subInfo}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-xl font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-dark-800 rounded-xl flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 border border-gray-700 hover:border-primary-500/50`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-dark-800 rounded-3xl p-8 border border-gray-700">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-primary-500 mr-2" />
                  Send us a Message
                </h3>

                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 bg-dark-700 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-xl text-white placeholder-transparent focus:border-primary-500 peer`}
                  />
                  <label className="absolute left-4 -top-2.5 text-sm bg-dark-800 px-1 text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500">
                    Your Name
                  </label>
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`w-full px-4 py-3 bg-dark-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-xl text-white placeholder-transparent focus:border-primary-500 peer`}
                  />
                  <label className="absolute left-4 -top-2.5 text-sm bg-dark-800 px-1 text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500">
                    Email Address
                  </label>
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full px-4 py-3 bg-dark-700 border border-gray-600 rounded-xl text-white placeholder-transparent focus:border-primary-500 peer"
                  />
                  <label className="absolute left-4 -top-2.5 text-sm bg-dark-800 px-1 text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500">
                    Phone Number (Optional)
                  </label>
                </div>

                {/* Service */}
                <div className="relative">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-dark-700 border ${errors.service ? 'border-red-500' : 'border-gray-600'} rounded-xl text-white focus:border-primary-500`}
                  >
                    <option value="">Select a Service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>

                {/* Message */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Message"
                    rows={4}
                    className={`w-full px-4 py-3 bg-dark-700 border ${errors.message ? 'border-red-500' : 'border-gray-600'} rounded-xl text-white placeholder-transparent focus:border-primary-500 peer resize-none`}
                  />
                  <label className="absolute left-4 -top-2.5 text-sm bg-dark-800 px-1 text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-primary-500">
                    Your Message
                  </label>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-primary-500 to-purple-500 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="loader small"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Message Sent Successfully!</h3>
                <p className="text-gray-400 mb-6">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <div className="flex items-center justify-center text-gray-400">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>Expected response time: 24 hours</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} pauseOnHover theme="dark" />
    </section>
  )
};

export default Contact;
