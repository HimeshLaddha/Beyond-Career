import {
  Compass,
  UserCheck,
  Briefcase,
  Users,
  BookOpen,
  TrendingUp,
  Award,
  MessageSquare,
} from "lucide-react";
import { useState } from "react";

const Services = () => {
  const services = [
    {
      icon: <Compass className="h-10 w-10" />,
      title: "Career Guidance",
      description:
        "Personalized career counseling to help you discover your ideal career path based on your interests, skills, and market trends.",
      features: [
        "One-on-one counseling",
        "Career assessment tests",
        "Industry trend analysis",
        "Skill gap identification",
      ],
      color: "from-primary-500 to-blue-600",
    },
    {
      icon: <UserCheck className="h-10 w-10" />,
      title: "Expert Mentorship",
      description:
        "Connect with industry professionals and alumni who provide ongoing guidance and support throughout your career journey.",
      features: [
        "Industry expert matching",
        "Regular mentoring sessions",
        "Goal setting & tracking",
        "Network building",
      ],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: <Briefcase className="h-10 w-10" />,
      title: "Internship Programs",
      description:
        "Access exclusive internship opportunities with top companies and startups to gain practical experience.",
      features: [
        "Curated opportunities",
        "Application support",
        "Interview preparation",
        "Performance tracking",
      ],
      color: "from-green-500 to-teal-600",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Community Support",
      description:
        "Join a vibrant community of like-minded students and professionals for networking and peer learning.",
      features: [
        "Student forums",
        "Networking events",
        "Peer study groups",
        "Success celebrations",
      ],
      color: "from-orange-500 to-red-600",
    },
    {
      icon: <BookOpen className="h-10 w-10" />,
      title: "Skill Development",
      description:
        "Access comprehensive training programs and workshops to develop in-demand technical and soft skills.",
      features: [
        "Technical workshops",
        "Soft skills training",
        "Certification programs",
        "Project-based learning",
      ],
      color: "from-indigo-500 to-purple-600",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Career Analytics",
      description:
        "Data-driven insights about career trends, salary benchmarks, and growth opportunities in various fields.",
      features: [
        "Market analysis",
        "Salary insights",
        "Growth projections",
        "Demand forecasting",
      ],
      color: "from-cyan-500 to-blue-600",
    },
  ];

  const stats = [
    { icon: <Award />, number: "5000+", label: "Students Placed" },
    { icon: <Briefcase />, number: "500+", label: "Partner Companies" },
    { icon: <Users />, number: "200+", label: "Expert Mentors" },
    { icon: <MessageSquare />, number: "10K+", label: "Sessions Conducted" },
  ];

  const handleLearnMore = (serviceName) => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="pt-20 pb-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive solutions designed to guide you through every step of
            your career journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500/50 transition-all duration-300 card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <div className="text-white">{service.icon}</div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-gray-300"
                  >
                    <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-700">
                <button
                  onClick={() => handleLearnMore(service.title)}
                  className="text-primary-500 font-semibold hover:text-primary-400 transition-all duration-300 group-hover:translate-x-2 transform flex items-center"
                >
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gray-900 rounded-3xl p-8 md:p-12 shadow-lg border border-gray-700">
          <h3 className="text-3xl font-bold text-center text-white mb-12 gradient-text">
            Our Impact in Numbers
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center bg-dark-800 py-6 px-2 rounded-2xl border border-gray-700 hover:border-primary-500/50 transition-all duration-300 transform hover:scale-105 group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 text-primary-500 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-lg">
                  {stat.icon}
                </div>

                {/* Number */}
                <div className="md:text-xl text-md font-bold text-white mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-gray-400 font-medium text-sm sm:text-md text-center">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
